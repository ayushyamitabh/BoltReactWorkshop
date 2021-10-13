import{ useState } from 'react';

// Stateful Component
// In ES6 Notation
const StatefulApp = () => {
  const [userName, setUserName] = useState('World')
  return (
    <div>
      <input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <div>Hello, {userName}!</div>
    </div>
  );
}

export default StatefulApp;
