// Image is a Stateless Component
// Displays the "image", and whether
// it has been "liked"

/*
  props = {
    // Trigger this function when user double clicks on this Image 
    doubleClick: function () {}, 
    // "Image" for our demo purposes
    color: '', 
    isLiked: true | false
  }
*/
const Image = (props) => (
  <div
    onDoubleClick={props.doubleClick}
    className="gram-image"
    style={{backgroundColor: props.color}}
  >
    {/* If and only if isLiked is true, show heart emoji */}
    {props.isLiked && (
      <div>
        {/* UNICODE FOR HEART EMOJI */}
        &#128151;
      </div>
    )}
  </div>
);

export default Image;