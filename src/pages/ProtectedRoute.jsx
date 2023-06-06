import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

export default function ProtectedRoute({ children, requireAdmin }) {
  console.log("ProtectedRoute");
  console.log("엥 1",children);
  console.log("엥 2",requireAdmin);
  
  const user = useAuthContext();

  console.log('엥 3',user);
  console.log("---------------------");

  

  if (!user || (requireAdmin && !user.isAdmin)) {
   console.log('여기걸려서 날라간다는뎅')
   return <Navigate to="/" replace />;
  }else{

    return children;
  }

}
