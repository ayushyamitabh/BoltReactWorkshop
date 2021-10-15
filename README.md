# Bolt McGill | React Workshop
_By Ayushya Amitabh_

A very brief _(30-ish minutes)_ introduction to React.  
Source code to go along with [Bolt React Workshop | Deck](https://github.com/ayushyamitabh/BoltReactWorkshop/blob/master/Bolt%20React%20Workshop%20-%20Ayushya%20Amitabh.pdf)

## Quickstart

If you already know the concepts but need a refresher on where to start
```sh
# Start by installing Node.js / NPM
https://nodejs.org/en/download/
# NPM is what we really need, 
# it comes bundled with Node.js
```
```sh
# Check NPM installed properly
$ npm -v
# Should print out version, if not
# try restarting your terminal / 
# command line first, then troubleshoot
# with Google's help
```
```sh
# Start your project
$ npx create-react-app your-project-name
# This may take a while depending on
# internet speed
```
```sh
# Go to your project folder
$ cd your-project-name
# Start your local server
$ npm start
# Server will automatically refresh
# your UI when you update source code
```
## What's Next

Documentation is a developer's best friend, here's some useful reading to get going quick

|Topic|Link|Comments|
|-----|----|--------|
|React Installation & Getting Started| https://reactjs.org/docs/create-a-new-react-app.html| The most common (and easiest way) for beginners is to use [React's Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) Method|
|React's Documentation|https://reactjs.org/docs/hello-world.html| Learn about Component, State Management, Props & More - this is a great starting point|
|React Router DOM|https://reactrouter.com/web/guides/quick-start|This will help you with route management for a Single Page Application (SPA), eg: your-app.com/home vs your-app.com/profile. This is used because by default React's Create React App (`npx create-react-app`) targets only one HTML file - `index.html`. You can  customize this behavior as needed but may add complexity.|
|API Calls with Fetch & React|https://reactjs.org/docs/faq-ajax.html||
|Global State Management|[React Redux](https://react-redux.js.org/introduction/getting-started) _OR_<br /> [React's Context](https://reactjs.org/docs/context.html)|This is a slightly advanced topic but, might be helpful in your project - this helps provide your entire app with a share `State` so that every component can use data from a shared collection. Redux is slightly more complicated but, more established. Context API from React might be a better choice for smaller projects that need to be built quickly.|

## Helpful Tips / Links

Some general tips & links to help you kickstart your project

|Resource|Link|Comment|
|-|-|-|
|Firebase|https://firebase.google.com/ <br />[Hosting React with Firebase](https://medium.com/swlh/how-to-deploy-a-react-app-with-firebase-hosting-98063c5bf425) <br /> [Firebase Web Project Setup](https://firebase.google.com/docs/web/setup)|Provides free hosting and Realtime NoSQL database for free (for small projects)|
|GitHub|https://github.com/<br />[GitHub Desktop App](https://desktop.github.com/)|You probably are already aware of Git, GitHub provides free public code hosting. Their desktop app is also helpful in removing complexity for first time Git users.|
|Visual Studio Code|https://code.visualstudio.com/| Great editor with IDE capabilities, and great React / JSX support|
|Design Libraries|[Ant Design](https://ant.design/docs/react/introduce)<br />[Material UI](https://mui.com/getting-started/usage/)|Two very popular UI libraries to help you get started without having to deal with designing your components from scratch|
