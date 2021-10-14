import { useState } from "react";

// NavBar is a Stateful Component
// It has communicates with it's parent
// App.js to send back changes in active
// tab or search value

const tabs = [
  {
    icon: 'home',
    url: '',
    name: 'home'
  },
  {
    icon: 'account_circle',
    url: 'profile',
    name: 'profile'
  }
];

/*
props = {
  onChangeActiveTab: function () {},
  onUpdateSearchValue: function () {}
}
*/
const NavBar = (props) => {
  const [activeTab, setActiveTab] = useState(props.subPath || 'home');
  const [searchValue, setSearchValue] = useState('');

  // updateActiveTab and updateSearchValue
  // can be replaced by the useEffect Hook
  // they have been left out of the implementation
  // to keep things simple for the short workshop

  // Please read further about hooks
  // https://reactjs.org/docs/hooks-intro.html

  const updateActiveTab = (tabObject) => {
    if (props.onChangeActiveTab) {
      props.onChangeActiveTab(tabObject);
    }
    setActiveTab(tabObject.name);
    setSearchValue('');
  }

  const updateSearchValue = (ev) => {
    if (props.onUpdateSearchValue) {
      props.onUpdateSearchValue(ev.target.value);
    }
    setSearchValue(ev.target.value);
  }

  return (
    <div className="gram-nav">
      <h2>THE GRAM</h2>
      <div className="nav-search">
        <input
          placeholder="Search"
          value={searchValue}
          onChange={updateSearchValue}
        />
      </div>
      <div className="nav-links">
        {
          tabs.map(tabObject => (
            <div
              onClick={() => updateActiveTab(tabObject)}
              className={`nav-link-item material-icons ${activeTab === tabObject.name ? 'active' : ''}`}
              key={`nav-to-${tabObject.name}`}
            >
              {tabObject.icon}
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default NavBar;