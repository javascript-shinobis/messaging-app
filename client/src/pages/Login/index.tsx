// eslint-disable-file jsx-a11y/label-has-associated-control
import { FormEvent, useRef } from 'react';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import { Card } from 'components/Card';
import ActionButton from 'components/ActionButton';
import Input from 'components/Input';
import { useAuth } from 'context/AuthContext';

function Login() {
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { login } = useAuth();

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (login.isLoading) return;

    const userName = userNameRef.current?.value;
    const password = passwordRef.current?.value;
    if (!userName || userName === ' ' || !password || password === ' ') {
      toast.error('Please input a correct login username!');
      return;
    }
    login.mutate({ id: userName, password });
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
          {/* eslint-disable jsx-a11y/label-has-associated-control */}
          <label htmlFor="username" className="block text-gray-700 font-bold">
            Username
          </label>
          <Input type="text" id="username" required ref={userNameRef} />
          <label htmlFor="password" className="block text-gray-700 font-bold">
            Password
          </label>
          <Input type="password" id="password" required ref={passwordRef} />

          <ActionButton loading={login.isLoading} label="Login" type="submit" />
        </form>
      </Card.Body>
      <Card.Footer>
        <p className="text-black">
          Not an existing user?{' '}
          <Link to="/signup">
            <em className="text-blue-600">Signup</em>
          </Link>
        </p>
      </Card.Footer>
    </>
  );
}

export default Login;
