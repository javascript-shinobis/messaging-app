import { FormEvent, useRef } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { toast, Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import Select, { SelectInstance } from 'react-select';

import { useAuth } from 'context/AuthContext';
import Input from 'components/Input';
import { Card } from 'components/Card';
import ActionButton from 'components/ActionButton';

function NewChannel() {
  const { streamChat, user } = useAuth();
  const navigate = useNavigate();
  const createChannel = useMutation({
    mutationFn: ({
      name,
      memberIds,
      imageUrl,
    }: {
      name: string;
      memberIds: string[];
      imageUrl?: string;
    }) => {
      if (streamChat == null) throw Error('Not connected');
      if (!user) throw Error('User Not found');

      return streamChat
        .channel('messaging', crypto.randomUUID(), {
          name,
          image: imageUrl,
          members: [user.id, ...memberIds],
        })
        .create();
    },
    onSuccess: () => {
      toast.success('Channel created Succefully', {
        duration: 3000,
      });
      setTimeout(() => {
        navigate('/');
      }, 2000);
    },
  });

  const nameRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const memberIdsRef =
    useRef<SelectInstance<{ label: string; value: string }>>(null);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const name = nameRef.current?.value;
    const imageUrl = imageRef.current?.value;
    const selectOptions = memberIdsRef.current?.getValue();

    if (!name || name === ' ' || !selectOptions || selectOptions.length === 0)
      return;

    createChannel.mutate({
      name,
      imageUrl,
      memberIds: selectOptions.map((option) => option.value),
    });
  };

  const users = useQuery({
    queryKey: ['stream', 'users'],
    queryFn: () =>
      streamChat!.queryUsers({ id: { $ne: user!.id } }, { name: 1 }),
    enabled: streamChat != null,
  });
  return (
    <>
      <Toaster />

      <Card.Header>
        <h1 className="text-3xl font-bold mb-2 text-center">
          New Conversation
        </h1>
      </Card.Header>
      <Card.Body>
        <form
          className="grid gris-cols-[auto,1fr] gap-x-3 gap-y-5 items-center justify-items-start"
          onSubmit={submitHandler}
        >
          {/* eslint-disable jsx-a11y/label-has-associated-control */}
          <label htmlFor="name" className="block text-gray-700 font-bold">
            Name
          </label>
          <Input type="text" id="name" required ref={nameRef} />

          <label htmlFor="image" className="block text-gray-700 font-bold">
            ImageUrl
          </label>
          <Input type="url" id="image" ref={imageRef} />

          <label htmlFor="members">Members</label>
          <Select
            ref={memberIdsRef}
            id="members"
            required
            isMulti
            classNames={{ container: () => 'w-full' }}
            options={users.data?.users.map((userr) => {
              return { value: userr.id, label: userr.name || userr.id };
            })}
          />

          <ActionButton label="Create" type="submit" />
        </form>
      </Card.Body>
      <Card.Footer>
        <p className="text-black">
          <Link to="/">
            <em className="text-blue-600">Go Back</em>
          </Link>
        </p>
      </Card.Footer>
    </>
  );
}

export default NewChannel;
