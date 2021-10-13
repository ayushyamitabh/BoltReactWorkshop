import Post from './Post'

// Feed is a Stateless Component
// It is simply a group of Posts being rendered
// from an array of given data

/*
  props = {
    posts : [
      {
        caption: '',
        userName: '',
        color: '',
        liked: true | false
      }
    ]
  }
*/
const Feed = (props) => (
  props.posts.map((post, i) => (
    <Post
      key={`post-${i}`}
      index={i}
      caption={post.caption}
      color={post.color}
      userName={post.userName}
      liked={post.liked}
    />
  ))
)

export default Feed;