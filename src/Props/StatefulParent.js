import { useState } from "react";
import StatelessChild from "./StatelessChild";

const StatefulParent = () => {
    const [userName, setUserName] = useState('World');
    return(
        <div className="stateful-parent">
            <h6>THIS IS A STATEFUL PARENT (1)</h6>
            <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <StatelessChild userName={userName} />
        </div>
    )
}

export default StatefulParent;