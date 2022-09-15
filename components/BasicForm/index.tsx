import styles from "@/styles/Forms.module.css";
import { FormEvent, useState } from "react";

function BasicForm() {
  // Q5.1
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [usernameIsValid, setUsernameIsValid] = useState<boolean>(false);
  const [passwordIsValid, setPasswordIsValid] = useState<boolean>(false);
  const [usernameIsTouched, setUsernameIsTouched] = useState<boolean>(false);
  const [passwordIsTouched, setPasswordIsTouched] = useState<boolean>(false);

  const usernameChangeHandler = (event: string) => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = (event: string) => {
    setPassword(event.target.value);
  };

  const usernameBlurHandler = (event: boolean) => {
    setUsernameIsTouched(true);
  };

  const passwordBlurHandler = (event: boolean) => {
    setPasswordIsTouched(true);
  };

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    // Q5.2.1
    event.preventDefault();

    setUsernameIsTouched(true);
    setPasswordIsTouched(true);

    let check_pw = /(?=.*[a-z])(?=.*[0-9])/;
    if (username && username.trim().length >= 5) {
      if (password && password?.trim().length >= 5 && check_pw.test(password)) {
        setPasswordIsValid(true);
        setUsernameIsValid(true);
        alert("Valid password and username");
        setPassword("");
        setUsername("");
      } else {
        // invalid password
        setPasswordIsValid(false);
      }
    } else {
      // invalid username
      setUsernameIsValid(false);
    }
  }

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <h2>Sign in</h2>
      <div className={styles["control-group"]}>
        <div className={`${styles["form-control"]} `}>
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={usernameChangeHandler}
            onBlur={usernameBlurHandler}
          />
        </div>
        {!usernameIsValid && usernameIsTouched && (
          <p>Name must be 5 characters or more.</p>
        )}
        <div className={`${styles["form-control"]} `}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
        </div>
        {!passwordIsValid && passwordIsTouched && (
          <p>
            Password must be 5 characters or more and contain at least one
            letter and number.
          </p>
        )}
      </div>
      <div className={styles["form-actions"]}>
        {<button type="submit">Submit</button>}
      </div>
    </form>
  );
}

export default BasicForm;
