const StatelessChildTwo = (props) => (
    <div className="stateless-child-two">
        <h6>THIS IS A STATELESS CHILD (2)</h6>
        <h6>It has a custom styled input that can be re-used</h6>
        <input
            value={props.value}
            onChange={props.onChange}
        />
    </div>
);

export default StatelessChildTwo;