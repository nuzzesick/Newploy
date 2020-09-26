import { useState } from 'react';
import Header from '../../components/Header';

const Login = ({ API_URL }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const signIn = (e) => {
    e.preventDefault();
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const raw = JSON.stringify(
      {
        email,
        password,
      },
    );

    const requestOptions = {
      method: 'POST',
      headers,
      body: raw,
      redirect: 'follow',
    };

    fetch(`${API_URL}/api/auth`, requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  };
  return (
    <>
      <Header />
      <div className="main authentication-container">
        <form className="authentication-form" onSubmit={(e) => signIn(e)}>
          <h1 className="authentication-title">Login</h1>
          <label htmlFor="email" className="authentication-label">
            Email
          </label>
          <input type="email" name="email" className="authentication-input" onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="email" className="authentication-label">
            Password
          </label>
          <input type="password" name="password" className="authentication-input" onChange={(e) => setPassword(e.target.value)} />
          <input type="submit" className="authentication-button" value="Login" />
        </form>
      </div>
    </>
  );
};
export async function getStaticProps() {
  // Fetch content
  const API_URL = process.env.API_URL;

  return {
    props: {
      API_URL,
    },
  };
}
export default Login;
