import React, { useRef } from "react";

import { Card } from "components/Card";
import Input from "components/Input";

const Signup = () => {
  const usernameRef = useRef<HTMLInputElement>(null)
  

 
  return (
    <>
      <Card.Header>
        <h1 className="text-3xl font-bold mb-8 text-center">Sign Up</h1>
      </Card.Header>
      <Card.Header>
        <form className="grid gris-cols-[auto,1fr] gap-x-3 gap-y-5 items-center justify-items-end">
          <label htmlFor="username">Username</label>
          <Input type="text" id="username" pattern="\s*" required ref={usernameRef}/>
        </form>
      </Card.Header>
    </>
  );
};

export default Signup;
