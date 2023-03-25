// eslint-disable-next-line import/no-extraneous-dependencies
import isEmpty from 'lodash/isEmpty';
import { useAuth } from 'context/AuthContext';
import {
  Channel,
  ChannelHeader,
  ChannelList,
  Chat,
  LoadingIndicator,
  MessageInput,
  MessageList,
  Window,
} from 'stream-chat-react';
import 'stream-chat-react/dist/css/index.css';

export default function Dashboard() {
  const { user, streamChat } = useAuth();
  if (!streamChat || isEmpty(streamChat)) return <LoadingIndicator />;

  return (
    <Chat client={streamChat}>
      <ChannelList />
      <Channel>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
      </Channel>
    </Chat>
  );
}
