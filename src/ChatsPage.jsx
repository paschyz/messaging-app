import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props)=> {
    const chatProps = useMultiChatLogic(
    '798190e8-eb80-4dc1-bf34-223f1399eb1f',
    props.user.username,
    props.user.secret
    );

    return (
        <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <PrettyChatWindow {...chatProps} style={{ height: '100vh' }}/>
        </div>
    )
}

export default ChatsPage