import React, {useState} from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../helpers/axiosWithAuth';


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
    

const Login = (props) => {

  const [user, setUser] = useState({ 
    username: "", 
    password: "" 
  });

  const [ isLoading, setIsLoading ] = useState(false);
  const history = useHistory();

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setIsLoading(true);
    axiosWithAuth()
    .post('/api/login', user)
    .then(res => {
      setIsLoading(false)
      console.log('authentication response', res);
      localStorage.setItem('token', res.data.payload);
      history.push('/Dashboard');
    })
    .catch(err => console.log(err));
  };

  return (
    <div>
      {console.log(user)}
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>
          Username:
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
          />
        </StyledLabel>
        <StyledLabel>
          Password:
          <input
            type="text"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </StyledLabel>
        <StyledButton>Submit!</StyledButton>
      </StyledForm>
    </div>
  )
}

export default Login;

