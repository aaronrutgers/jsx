// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
// Create a react component
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="Today at 4:45PM" />
      <CommentDetail author="Alex" timeAgo="Today at 2:00AM" />
      <CommentDetail author="Jane" timeAgo="Today at 6:00pm" />
      
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
