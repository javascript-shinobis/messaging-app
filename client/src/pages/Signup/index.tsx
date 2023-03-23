import React, { FormEvent, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

import { Card } from "components/Card";
import Input from "components/Input";
import ActionButton from "components/ActionButton";
import { useAuth } from "context/AuthContext";

const Signup = () => {
  const { signup } = useAuth();

  const usernameRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    if (signup.isLoading) {
      return;
    }

    const userName = usernameRef.current?.value;
    const name = nameRef.current?.value;
    const imageUrl = imageRef.current?.value;

    if (!userName || userName === " " || !name || name === " ") {
      toast.error("Please input a correct signup credentials!");
      return;
    }

    signup.mutate({ id: userName, name, image: imageUrl });
  };

  return (
    <React.Fragment>
      <Toaster />
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
          <Input type="text" id="username" required ref={usernameRef} />
          <label htmlFor="name" className="block text-gray-700 font-bold">
            Name
          </label>
          <Input type="text" id="name" required ref={nameRef} />
          <label htmlFor="image" className="block text-gray-700 font-bold">
            Image URL
          </label>
          <Input type="url" id="image" pattern="\S*" ref={imageRef} />
          <ActionButton
            label={signup.isLoading ? "Loading..." : "Sign up"}
            type="submit"
            disabled={signup.isLoading}
          />
        </form>
      </Card.Body>
    </React.Fragment>
  );
};

export default Signup;
