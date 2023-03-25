// eslint-disable-next-line import/no-extraneous-dependencies
import isEmpty from 'lodash/isEmpty';
import { usePostLoginAuth } from 'context/AuthContext';
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
  const { user, streamChat } = usePostLoginAuth();
  if (!streamChat || isEmpty(streamChat)) return <LoadingIndicator />;

  return (
    <Chat client={streamChat}>
      <ChannelList filters={{ members: { $in: [user.id] } }} />
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
