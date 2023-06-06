import React from 'react';
import { useParams } from 'react-router-dom';
import Forbidden from '../../components/error/Forbidden';
import NotFound from '../../components/error/NotFound';

export default function ErrorPage() {

  const { code } = useParams();
  const status = code ? code : null;
  

  return (
    <div>
      {status === null ? <NotFound/> : ''}
      {status === "403" ? <Forbidden/> : ''}
    </div>
  );
}

