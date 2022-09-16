import styles from "@/styles/Forms.module.css";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";

function AuthForm() {
  const [isSignin, setIssignin] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("brent");
  const [password, setPassword] = useState<string>("123");

  const emailChangeHandler = (event: string) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };

  const passwordChangeHandler = (event: string) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };

  function switchAuthHandler() {
    setIssignin((prevState) => !prevState);
  }

  async function createUser(email, password) {
    const response = await fetch("api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application-json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    return data;
  }

  async function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSignin) {
      // Question 7.1.3
      //   log user in
    } else {
      // Question 7.1.2
      //   create user
      try {
        const result = await createUser(email, password);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <h2>{isSignin ? "Sign in" : "Sign up"}</h2>
      <div className={styles["control-group"]}>
        <div className={styles["form-control"]}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            required
            value={email}
            onChange={emailChangeHandler}
          />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={passwordChangeHandler}
          />
        </div>
      </div>
      <div className={styles["form-actions"]}>
        <button type="submit">Submit</button>
        <a onClick={switchAuthHandler}>
          {!isSignin ? "Sign in" : "Sign up"} instead?
        </a>
      </div>
    </form>
  );
}

export default AuthForm;
