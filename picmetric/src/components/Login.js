import React, {useState} from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../helpers/axiosWithAuth';
import Spinner from './Spinner';

const StyledLoginDiv = styled.div`
  background-color: #fdfdfd;
`

const StyledLoginForm = styled.form`
    font-family: 'Julius Sans One', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `
const StyledLabel = styled.label`
    font-family: 'Julius Sans One', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1%;
    `

const StyledButton = styled.button`
    font-family: 'Julius Sans One', sans-serif;
    display: block;
    background-color: black;
    cursor: pointer;
    height: 45px;
    font-size: 1rem;
    border-radius: 10px;
    text-align: center;
    width: 200px;
    color: #fbfbfb;
    margin: 1.5rem auto;
    
    `

    

const Login = (props) => {

  const [user, setUser] = useState({ 
    username: '', 
    password: '' 
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
    <StyledLoginDiv>
      <StyledLoginForm onSubmit={handleSubmit}>
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
        {
          !!isLoading && <Spinner />
        }

       <div>
          {'Not registered'} <a style={{cursor: 'pointer', color: 'black', textDecoration: 'underline'}} onClick={ (e) => {props.setShowLogin(false)}}>Create New Account</a>
      </div>

       
      </StyledLoginForm>
      
    </StyledLoginDiv>
  )
}

export default Login;

