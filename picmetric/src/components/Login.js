import React, {useState} from 'react';
import styled from 'styled-components';


const StyledForm = styled.form`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `
const StyledLabel = styled.label`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1%;
    `
const StyledButton = styled.button`

    margin: 2%;
    padding: 1%;
    width: 11%;
    border-radius: .5rem;
    `
    

const Login = () => {

const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(user.name);
    console.log(user.password);
  };

  return (
    <div>
      {console.log(user)}
      <StyledForm onSubmit={event => handleSubmit(event)}>
        <StyledLabel>
          Username:
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={event => handleChange(event)}
          />
        </StyledLabel>
        <StyledLabel>
          Password:
          <input
            type="text"
            name="password"
            value={user.password}
            onChange={event => handleChange(event)}
          />
        </StyledLabel>
        <StyledButton>Submit!</StyledButton>
      </StyledForm>
    </div>
  )
}

export default Login;

