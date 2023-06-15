import { useNavigate, useParams } from 'react-router-dom';

import StompJs from 'stompjs';
import SockJS from 'sockjs-client';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';



export default function Room() {

  // room 번호
  const {id} = useParams();

  // 사용할 stompClient
  const stompClient = useRef(null);
  
  // Stomp 서버 연결 상태
  const [connected,setConnected] = useState(false);
  // 메시지 목록
  const [messages, setMessages] = useState([]);
  // 메시지 입력 값
  const [message, setMessage] = useState("");
  //테스트용
  const [myId, setMyId] = useState("");
  
  // textArea useRef
  const ref = useRef();
  
  const stompHeaders = {};

  const navigate = useNavigate();

  // stompClient 초기화
  useEffect(()=>{
    connectServer();

    //return () => disconnect();
   
  })

  // textArea 초기화
  useEffect(()=>{
    if (ref === null || ref.current === null) {
      return;
    }
    ref.current.style.height = '38px';
    ref.current.style.height = ref.current.scrollHeight + 'px';
  })


  // Stomp 서버에 연결
  const connectServer = useCallback(()=>{
    if(connected) return;

    const baseURL = 'localhost:18011';      // spring stomp 서버 주소
    const socket = new SockJS(`http://${baseURL}/ws`);

    stompClient.current = StompJs.over(socket);
    stompClient.current.debug = null;  // stomp debug 모드 해제
    stompClient.current.heartbeat.incoming = 2000
    stompClient.current.heartbeat.outgoing = 2000
    stompClient.current.reconnectDelay = 2000;
    //stompClient.current.reconnect_delay = 2000;

    //Stomp 연결
    stompClient.current.connect(
      stompHeaders,
      (frame)=> {  // connect callback
        setConnected(true);

        stompClient.current.subscribe(
          '/sub/channel/'+id,
          (frame)=>{
            // 구독 이후 전달되는 메시지 처리하는 곳
            messageClassify(frame);
          },
          stompHeaders
        );
      },
      (err)=>{    // error callback
        console.log('err',err)
        // 에러 발생 시 재연결시도
        setConnected(false);
        connectServer();
      }
    )
  },[stompHeaders,id,connected])

  // Stomp 서버와 연결 끊기
  const disconnect = useCallback((event)=>{
    stompClient.current.disconnect(
      (frame)=>{
        if(event){
          event();
        }
      },
      stompHeaders
    );
  },[stompHeaders])

  // 메시지 전달 버튼 클릭 이벤트 처리
  const sendMessageEvent = () =>{
    
    if(message.length === 0){
      return;
    }

    const now = new Date();
    const hour = now.getHours();
    const type = hour < 12 ? "오전 " : "오후 "
    const parseHour = hour > 12 ? hour - 12 : hour;
    
    const min = now.getMinutes() < 10 ? "0"+now.getMinutes() : now.getMinutes();

    let msgData = {
      "message": message
    }
  
    let msgBody = {
      "type":"msg",
      "sender":myId,
      "channelId": id,
      "data":msgData,
      "date": type+parseHour+":"+min
    }

    stompClient.current.send(
      '/pub/chat/message',
      stompHeaders,
      JSON.stringify(msgBody)
    );
    
    setMessage('');
  }

  // textArea onChange 이벤트 처리
  const handleChange = (event) =>{
    event.preventDefault();

    setMessage(event.target.value);
  }

  // 테스트용
  const handleIdChange = (event) =>{
    event.preventDefault();

    setMyId(event.target.value);
  }

  // 방나가기 이벤트 처리
  const handleQuitEvent = () =>{
    disconnect(roomQuit);
  }

  const roomQuit = () => {
    navigate(`/`)
  }

  // 메시지 타입에 따른 분류 함수
  const messageClassify = (o) => {
    const dto = JSON.parse(o.body);
    // 상대방을 초대를 하는 경우
    if(dto.type ==='new'){
      console.log('입장')
    }
    // 참가자 퇴장
    if(dto.type ==='quit'){
      console.log('퇴장')
    }
    // 일반 메시지
    if(dto.type ==='msg'){
      setMessages((list)=>{
        return [...list, 
          {
            type: "msg",
            sender: dto.sender,
            message: dto.data.message,
            date: dto.date
          }
        ];
      })
    }
  }  
//w-5/6
  return (
    <section className='h-full max-w-lg min-w-lg justify-center items-center mr-auto ml-auto pt-10'>
      <div className='h-10'>채팅방: {id}</div>
      <div className='whitespace-pre-line h-5/6'>
        <div className='h-5/6 bg-white mb-3'>
          <ul className='chat-list'>
            {messages.length > 0 && messages.map((m,i)=>{
              console.log('msg',m)
              if(m.sender === myId){
                return (
                  <li key={i} className="flex justify-end">
                    <div className='flex flex-row mb-3 mr-3 text-right w-3/4  justify-end'>
                      <div className='w-1/6 mr-1 text-xs self-end'>{m.date}</div>
                      <div className='bg-orange-300 min-w-sm max-w-md rounded-md p-2 break-words'>{m.message}</div>
                    </div>
                    
                  </li>
                );
              }else{
                return (
                  <li key={i} className="flex justify-start">
                    <div className='flex flex-row mb-3 ml-3 text-left w-3/4 justify-start'>
                      <div className='bg-red-200 min-w-sm max-w-md rounded-md p-2 break-words'>{m.message}</div>
                      <div className='w-1/6 ml-1 text-xs self-end'>{m.date}</div>
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        </div> 
        <div className='flex flex-col justify-center'>
          <input className='mb-3 ml-5 mr-5' type="text" onChange={handleIdChange} name="" id="" />
          <textarea 
            className="resize-none ml-5 mr-5"
            onChange={handleChange}
            placeholder="글자를 입력하세요"
            ref={ref}
            value={message} />
          <button onClick={handleQuitEvent}>quit</button>
          <button onClick={sendMessageEvent} >message</button>
        </div>
      </div>
    </section>
  );
}