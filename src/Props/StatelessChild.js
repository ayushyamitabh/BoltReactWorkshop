const StatelessChild = (props) => (
    <div className="stateless-child">
        <h6>THIS IS A STATELESS CHILD (1)</h6>
        Hello, <span>{props.userName}</span>!
    </div>
);

export default StatelessChild;