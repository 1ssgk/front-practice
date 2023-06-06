import React from 'react';
import OrderCard from '../../components/order/OrderCard';

export default function Order() {

  const hasOrders = testList && testList.length > 0;

  return (
    <section>
        <p className='text-2xl text-left font-bold pl-4 pt-4 pb-4 border-b border-gray-300'>
          주문
        </p>
        {hasOrders && (
        <>
          <ul className='border-b border-gray-300 mb-8 p-4 px-8 items-center justify-center'>
            {testList && 
            testList.map((o)=>(
              <OrderCard key={o.id} order={o}/>
            ))}
          </ul>
        </>
        )}

    </section>
  );
}



const testList = [
  {
    id : 1,
    title : '000111',
    price : 3000,
    orederDt : '2023-03-01'
  },
  {
    id : 2,
    title : '000222',
    price : 3000,
    orederDt: '2023-03-02'
  },
  {
    id : 3,
    title : '000222',
    price : 3000,
    orederDt: '2023-03-02'
  },
  {
    id : 4,
    title : '000222',
    price : 3000,
    orederDt: '2023-03-02'
  },
  {
    id : 5,
    title : '000222',
    price : 3000,
    orederDt: '2023-03-02'
  },
  {
    id : 6,
    title : '000222',
    price : 3000,
    orederDt: '2023-03-02'
  },
  {
    id : 7,
    title : '000222',
    price : 3000,
    orederDt: '2023-03-02'
  },
  {
    id : 8,
    title : '000222',
    price : 3000,
    orederDt: '2023-03-02'
  },
  {
    id : 9,
    title : '000222',
    price : 3000,
    orederDt: '2023-03-02'
  },
  {
    id : 10,
    title : '000222',
    price : 3000,
    orederDt: '2023-03-02'
  }
]