import { useState } from "react";
import { InputField } from "../input/input";

interface SigninProps {
  onSubmit: (email: string, password: string) => void;
}
export const Signin: React.FC<SigninProps>  = ({onSubmit}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(email, password);
    setEmail('');
    setPassword('');
  };

  return (
      <form onSubmit={handleSubmit} className="signin-form">
       <InputField
          type="email"
          label="Email"
          name="email"
          id="email"
          value={email}
          onChange={setEmail}
          required
          placeholder="Введите email"
        />
        <InputField
          type="password"
          label="Пароль"
          name="password"
          id="password"
          value={password}
          onChange={setPassword}
          required
          placeholder="Введите пароль"
        />
        <button type="submit">Войти</button>
      </form>
  );
};
