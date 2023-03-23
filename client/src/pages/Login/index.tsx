import { FormEvent, useRef, useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import { Card } from "components/Card";
import ActionButton from "components/ActionButton";
import Input from "components/Input";

const Login = () => {
  const userNameRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false); // to be removed once login BE integration is done

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const userName = userNameRef.current?.value;
    if (!userName || userName === " ") {
      toast.error("Please input a correct login username!");
      return;
    }
    setLoading(true);

    // add login logic here
    setTimeout(() => setLoading(false), 4000); // to be removed once login integration is done
  }

  return (
    <>
      <Toaster />

      <Card.Header>
        <h1 className="text-3xl font-bold mb-2 text-center">Login</h1>
      </Card.Header>
      <Card.Body>
        <form
          className="grid gris-cols-[auto,1fr] gap-x-3 gap-y-5 items-center justify-items-start"
          onSubmit={onSubmit}
        >
          <label htmlFor="username" className="block text-gray-700 font-bold">
            Username
          </label>
          <Input type="text" id="username" required ref={userNameRef} />

          <ActionButton loading={loading} label="Login" type="submit" />
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
