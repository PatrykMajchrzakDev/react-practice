import React from "react";
import "styles.css";

// don't change the Component name "App"
export default function App() {
  const [isDeleting, setIsDeleting] = React.useState(false);

  const showDeleteMessageHandler = () => {
    setIsDeleting(true);
  };
  const hideDeleteMessageHandler = () => {
    setIsDeleting(false);
  };
  return (
    <div>
      {isDeleting && (
        <div id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={hideDeleteMessageHandler}>Proceed</button>
        </div>
      )}
      <button onClick={showDeleteMessageHandler}>Delete</button>
    </div>
  );
}
