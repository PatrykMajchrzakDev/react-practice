import { useEffect } from "react";
import classes from "./NewsletterSignup.module.css";
import { useFetcher } from "react-router-dom";
function NewsletterSignup() {
  //fetcher is used whenever I want to trigger an action or loader without actually navigating to the page it belongs
  //when I want to interract with some action or loader without transitioning - sending request without triggering any route change
  const fetcher = useFetcher();
  const { data, state } = fetcher;

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert("Signup successful!");
    }
  }, [data, state]);
  return (
    <fetcher.Form
      method="post"
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
