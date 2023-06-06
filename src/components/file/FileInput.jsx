import React from "react";
import { useState } from "react";
import { uploadFile } from "../../api/fileClient"

export default function FileInput() {
  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    setFiles(Array.from(e.target.files || []));
  };

  const handleDelete = (index) => {
    setFiles([...files.slice(0, index), ...files.slice(index + 1)]);
  };

  const handleClick = () =>{
    //파일을 업로드 하시겠습니까??
    if(files.length === 0){
      alert('파일이 선택되지 않았습니다.')
      return;
    } 
    
    const formData = new FormData();
    //formData.append('file',files);

    files.forEach((file)=> formData.append("file",file));

    console.log('파일들',files)

    const data = {};
    data.name = "test1";

    formData.append("data",new Blob([JSON.stringify(data)], {type: "application/json"}))
    
    console.log("전송",formData.get("file"))

    uploadFile(formData);

    // 업로드
  }

  const FILE_VISIBLE = files.length > 0 ? 'hidden' : 'pt-5 bg-gray-300';

  console.log("파일들 :", files);

  return (
    <div className="flex flex-col border-gray-200">
      <input multiple type="file" className={FILE_VISIBLE} onChange={handleChange} />
      {files.length > 0 && 
        (
          <ul className="pt-5">
          {files.map((file, index) => 
          (
            <li key={`${file.name}_${index}`}>
              {file.name}
              <button onClick={() => handleDelete(index)}>삭제</button>
            </li>
          ))}
          </ul>
      )}
      <button onClick={handleClick}>업로드</button>
    </div>
  );
}
