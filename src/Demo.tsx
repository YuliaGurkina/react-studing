import { Signin, Signup } from "./components";
import "./App.css";

export const Demo = () => {
  const handleSignInSubmit = (email: string, password: string) => {
    console.log('Отправленные данные:', { email, password });
  };

  const handleSignUpSubmit = (value) => {
    console.log('Отправленные данные:', { value });
  };

  return (
    <>
    <div>
      <h2>Sign in</h2>
      <Signin onSubmit={handleSignInSubmit}></Signin>
    </div>
    {/*  */}
    <div>
      <h2>Sign up</h2>
      <Signup onSubmit={handleSignUpSubmit}></Signup>
    </div>
    </>
  );
}
