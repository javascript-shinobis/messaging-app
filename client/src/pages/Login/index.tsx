import { useRef } from "react";

import { Card } from "components/Card";
import ActionButton from "@/components/ActionButton";
import Input from "@/components/Input";
import { Link } from "react-router-dom";

const Login = () => {
  const userNameRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <Card.Header>
        <h1 className="text-3xl font-bold mb-2 text-center">Login</h1>
      </Card.Header>
      <Card.Body>
        <form
          className="grid gris-cols-[auto,1fr] gap-x-3 gap-y-5 items-center justify-items-start"
          onSubmit={() => {}}
        >
          <label htmlFor="username" className="block text-gray-700 font-bold">
            Username
          </label>
          <Input type="text" id="username" required ref={userNameRef} />

          <ActionButton label="Login" type="submit" />
        </form>
      </Card.Body>
      <Card.Footer>
        <p className="text-black">
          Not an existing user?{" "}
          <Link to="/signup">
            <em className="text-blue-600">Signup</em>
          </Link>
        </p>
      </Card.Footer>
    </>
  );
};

export default Login;
