import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { getData } from "./data";
import Feed from "./Feed";
import NavBar from "./NavBar";
import Profile from "./Profile";

// Combines NavBar, Feed, & Profile
// Uses sample data exported from data.js
const App = (props) => {
  const [activeTabObject, setActiveTabObject] = useState(null);

  // Keep track of last activated tab,
  // Method is called by NavBar when tab changed
  // Or when search value is cleared
  const changedTab = (tabObject) => {
    setActiveTabObject(tabObject);
    if (tabObject) {
      props.history.push(`/theGram/${tabObject.url}`);
    } else {
      props.history.push('/theGram/');
    }
  }

  // Get search value from NavBar
  // Then pass this value to Feed, to filter results
  const onSearch = (searchValue) => {
    if (searchValue.length > 0) props.history.push(`/theGram/search/${searchValue}`);
    else changedTab(activeTabObject);
  }
  console.log(props.match.params);
  return (
    <div>
      <NavBar subPath={props.match.params.subPath} onChangeActiveTab={changedTab} onUpdateSearchValue={onSearch} />
      {/* Router Implementation is different than what you would typically find,
          we're using nested routes because same page is being used to show lots
          of other examples.

          In normal use case, <Switch> </Switch> would be wrapped by BrowserRouter
          (imported from react-router-dom), eg:

          import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

          <Router>
            <Switch>
              <Route path="/profile" render={() => <Profile data={data} />} />
              // similarly for other routes
            </Switch>
          </Router>
      */}
      <Switch>
        <Route path="/theGram/" exact render={() => <Feed posts={getData().feed} /> } />
        <Route path="/theGram/profile" render={() => <Profile data={getData()} />} />
        <Route path="/theGram/search/:s" render={(props) => (
            <div className="search-results">
              <h4>Results for "{props.match.params.s}"</h4>
              <Feed posts={getData().feed.filter(p => p.userName.includes(props.match.params.s) || p.caption.includes(props.match.params.s))} />
            </div>
          )}
        />
      </Switch>
    </div>
  )
}

export default App;