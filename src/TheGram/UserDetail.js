// UserDetail is a Stateless Component
// It displays user name, and allows for
// an option component as the "lower half" 
// that will rendered under the userName

/*
  props = {
    size: 'small' | 'large',
    userName: '',
    lowerHalf: '' | React.Component
  }
*/
const UserDetail = (props) => (
  <div className="gram-user-detail">
    <div className="detail-row">
      <div className={`user-pic ${props.size}`} />
      <div className="user-detail">
        <h5>{props.userName}</h5>
        {props.lowerHalf}
      </div>
    </div>
  </div>
);

export default UserDetail;