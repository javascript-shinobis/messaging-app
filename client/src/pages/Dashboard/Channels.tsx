import { useNavigate } from 'react-router-dom';
import { ChannelListMessengerProps, useChatContext } from 'stream-chat-react';

import ActionButton from 'components/ActionButton/index';
import { usePostLoginAuth } from 'context/AuthContext';

export default function Channels({
  loadedChannels,
}: ChannelListMessengerProps) {
  // setActiveChannel: A function to set the currently active channel
  // channel: The currently active channel, which populates the Channel component.
  const { setActiveChannel, channel: activeChannel } = useChatContext();
  const navigate = useNavigate();
  const { logout } = usePostLoginAuth();

  return (
    <div className="w-60 flex flex-col gap-4 m-3 h-full">
      <ActionButton
        type="button"
        label="New Conversation"
        onClick={() => navigate('/channel/new')}
      />
      <hr className="border-gray-500 mt-auto" />
      {loadedChannels != null && loadedChannels?.length > 0
        ? loadedChannels.map((channel) => {
            const isActive = channel === activeChannel;
            const extraClasses = isActive
              ? 'bg-blue-500 text-white'
              : 'hover:bg-blue-100 bg-gray-100';
            return (
              <button
                onClick={() => setActiveChannel(channel)}
                disabled={isActive}
                type="button"
                className={`p-4 rounded-lg flex gap-3 items-center ${extraClasses}`}
                key={channel.id}
              >
                {channel.data?.image && (
                  <img
                    src={channel.data.image}
                    alt="profile"
                    className="w-10 h-10 rounded-full object-center object-cover"
                  />
                )}
                <div className="text-ellipsis overflow-hidden whitespace-nowrap">
                  {channel.data?.name || channel.id}
                </div>
              </button>
            );
          })
        : 'No Conversation'}
      <ActionButton
        type="button"
        label="Logout"
        onClick={() => logout.mutate()}
        disabled={logout.isLoading}
        loading={logout.isLoading}
      />
    </div>
  );
}
