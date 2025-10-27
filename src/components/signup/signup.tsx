import { useState } from "react";
import { InputField } from "../input/input";
import IconUmbrella from '../../assets/umbrella.svg?react'

interface SignupProps {
  onSubmit: (value: Object) => void;
}

const initialState = {
    name: '',
    nickname: '',
    email: '',
    gender: 'male',
    password: '',
    checkpassword: ''
  };

export const Signup: React.FC<SignupProps> = ({onSubmit}) => {
   // Состояние для хранения значений полей
  const [value, setValue] = useState(initialState);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(value);
    setValue(initialState);
  };

  const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
	setValue(prevState => ({
		...prevState,
		[(event.target as HTMLInputElement).name]: (event.target as HTMLInputElement).value,
	}));
};

  return (
      <form 
        onSubmit={handleSubmit}
        onChange={handleChange}
        className="signup-form"
    >
        <InputField
          label="Name"
          name="name"
          id="name"
          value={value.name}
          required
          placeholder="Введите имя"
        />
        <InputField
          label="Nickname"
          name="nickname"
          id="nickname"
          value={value.nickname}
          required
          placeholder="Введите ник"
          leftSection={<IconUmbrella />}
          //error='bla bla bla'
          //radius='lg'
          //size='xl'
          //withAsterisk={true}
        />
         <InputField
            type="email"
            label="Email"
            name="email"
            id="email"
            value={value.email}
            required
            placeholder="Введите email"
        />
         <div className="radio-group-wrapper">
            <div className="radio-group">
                <label htmlFor="male">Male</label>
                {/* <input type="radio" id="male" name="gender" value="male" checked={value.gender === 'male'}/> */}
                 <InputField
                    type="radio"
                    name="gender"
                    id="male"
                    value='male'
                    checked={value.gender === 'male'}
                />
            </div>
            <div className="radio-group">
                <label htmlFor="female">Female</label>
                {/* <input type="radio" id="female" name="gender" value="female" checked={value.gender === 'female'}/> */}
                 <InputField
                    type="radio"
                    name="gender"
                    id="female"
                    value='female'
                    checked={value.gender === 'female'}
                />
            </div>
         </div>
       <InputField
            type="password"
            label="Пароль"
            name="password"
            id="password"
            value={value.password}
            required
            placeholder="Введите пароль"
        />
       <InputField
            type="password"
            label="Повторите пароль"
            name="checkpassword"
            id="checkpassword"
            value={value.checkpassword}
            required
            placeholder="Повторите пароль"
        />
       
        <button type="submit">Войти</button>
      </form>
  );
};
