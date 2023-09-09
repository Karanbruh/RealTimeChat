import { PrettyChatWindow } from 'react-chat-engine-pretty'
export default function ChatsPage(props) {

    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId='cc3fb527-aab6-4e64-ab96-3a334d892bd2'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>
    )
}