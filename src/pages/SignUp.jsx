import React, { useState } from 'react';

export default function SignUp() {
  const [isStrongPassword, setIsStrongPassword] = useState();
  setIsStrongPassword(checkStringPassword());

  return (
    <div>
      
    </div>
  );
}

const regex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);
function checkStringPassword(inputPassword) {
  if (regex.test(inputPassword)) {
    return true;
  }else{
    return false;
  }
}
