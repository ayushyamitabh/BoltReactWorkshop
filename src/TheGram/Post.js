import { useState } from 'react';
import data from './data';
import Image from  './Image';
import UserDetail from './UserDetail';

// Post is a stateful component
// it combines Image & User Detail
// Keeps track of changing liked status

/*
  props = {
    liked: true | false,
    index: 0,
    color: '',
    caption: '',
    userName: ''
  }
*/
const Post = (props) => {
  const [liked, setLiked] = useState(props.liked || false);

  const updateLikedStatus = () => {
    setLiked(!liked);
    // This would be replaced with an API call
    // or something similar to persist the liked
    // status to the data store
    if (props.index) {
      data.feed[props.index].liked = !liked;
    }
    // "Hook" to allow parent to be aware of
    // liked status changes
    if (props.onUpdateLikedStatus) { 
      props.onUpdateLikedStatus(!liked);
    }
  }

  return (
    <div className="gram-user-card">
      <Image
        doubleClick={updateLikedStatus}
        isLiked={liked}
        color={props.color}
      />
      {/* Post will only use small size UserDetail
          so we can fix that prop value */}
      <UserDetail
        size="small"
        userName={props.userName}
        lowerHalf={<p>{props.caption}</p>}
      />
    </div>
  );
}

export default Post;