import Image from "./Image";
import UserDetail from "./UserDetail";

// Profile combines Image & User Detail
// Profile vs Post
// They use the same components but, in
// different orders, and with different use cases
// Profile is a Stateless Component

/*
  props = {
    data: {
      profile: {
        userName: '',
        followersCount: 0,
        followingCount: 0
      },
      posts: [
        {
          color: '',
          liked: true | false
        }
      ]
    }
  }
*/
const Profile = (props) => {
  return (
    <div className="user-profile">
      {/*
        We fix the template for the lowerHalf prop of the
        UserDetail - then plug in the data we have into the
        template
      */}
      <UserDetail size="large" 
        userName={props.data.profile.userName}
        lowerHalf={
          <div>
            <strong>{props.data.posts.length}</strong>&nbsp;posts&nbsp;&nbsp;&nbsp;&nbsp;
            <strong>{props.data.profile.followersCount}</strong>&nbsp;followers&nbsp;&nbsp;&nbsp;&nbsp;
            <strong>{props.data.profile.followingCount}</strong>&nbsp;following
          </div>
        } 
      />
      <div className="profile-posts">
        {
          props.data.posts.map((post, i) => (
            <Image key={`image-${i}`} isLiked={post.liked} color={post.color} />
          ))
        }
      </div>
    </div>
  );
}

export default Profile;