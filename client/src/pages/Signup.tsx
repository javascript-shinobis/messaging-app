import React, { useRef } from "react";

import { Card } from "components/Card";
import Input from "components/Input";
import ActionButton from "@/components/ActionButton";
import { Submit } from "@/components/ActionButton/stories/index.stories";

const Signup = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const imageUrlRef = useRef<HTMLImageElement>(null);

  return (
    <>
    <Card.Header><h1 className="text-3xl font-bold mb-8 text-center">Sign Up</h1></Card.Header>
      <Card.Body>
        <form className="grid gris-cols-[auto,1fr] gap-x-3 gap-y-5 items-center justify-items-first">
          <label htmlFor="username">Username</label>
          <Input
            type="text"
            id="username"
            pattern="\s*"
            required
            ref={usernameRef}
          />
<label htmlFor="name">Name</label>
          <Input
            type="text"
            id="name"
            ref={nameRef}
          />
          <label htmlFor="imageurl">Image url</label>
          <Input
            type="text"
            id="imageUrl"
            required
            ref={imageUrlRef}
          />
          <ActionButton label="submit" onClick={()}/> 
        </form>
      </Card.Body>
      <Card.Footer> Create Account</Card.Footer>
    </>
  );
};

export default Signup;
