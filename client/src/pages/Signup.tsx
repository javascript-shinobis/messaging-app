import React, { FormEvent, useRef, useState } from "react";

import { Card } from "components/Card";
import Input from "components/Input";
import ActionButton from "components/ActionButton";

const Signup = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <>
      <Card.Header>
        <h1 className="text-3xl font-bold mb-2 text-center">Sign Up</h1>
      </Card.Header>
      <Card.Body>
        <form
          className="grid gris-cols-[auto,1fr] gap-x-3 gap-y-5 items-center justify-items-start"
          onSubmit={submitHandler}
        >
          <label htmlFor="username" className="block text-gray-700 font-bold">
            Username
          </label>
          <Input
            type="text"
            id="username"
            pattern="\S*"
            required
            ref={usernameRef}
          />
          <label htmlFor="name" className="block text-gray-700 font-bold">
            Name
          </label>
          <Input type="text" id="name" pattern="\S*" required ref={nameRef} />
          <label htmlFor="image" className="block text-gray-700 font-bold">
            Image URL
          </label>
          <Input type="url" id="image" pattern="\S*" required ref={imageRef} />
          <ActionButton
            label="Sign up"
            type="submit"
            loading={loading}
          />
        </form>
      </Card.Body>
    </>
  );
};

export default Signup;
