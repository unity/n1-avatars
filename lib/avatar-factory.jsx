import AvatarImage from './avatar-image';
import { React } from 'nylas-exports';

export default function(size, name){
  const Avatar = (props)=>{
    const { thread={} } = props;
    const { participants=[] } = thread;
    if(!participants.length) return <noscript/>;

    let participant = participants[participants.length-1];

    if (participant.isMe() && participants.length>1) {
      participant = participants[participants.length-2];
    }

    if(!participant) return <noscript/>;
    return <AvatarImage email={participant.email} name={participant.name} className='thread-avatar' size={size} round={true}/>
  }
  Avatar.displayName=name;
  return Avatar;
}
