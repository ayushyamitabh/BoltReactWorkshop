import { useState } from "react";
import StatelessChild from "./StatelessChild";
import StatelessChildTwo from "./StatelessChildTwo";

const StatefulParentTwo = () => {
    const [userName, setUserName] = useState('World');

    const changeHandler = (ev) => {
        setUserName(ev.target.value)
    }

    return (
        <div className="stateful-parent-two">
            <h6>THIS IS A STATEFUL PARENT (2)</h6>
            <StatelessChild userName={userName} />
            <StatelessChildTwo
                value={userName}
                onChange={changeHandler}
            />
        </div>
    );
}

export default StatefulParentTwo;