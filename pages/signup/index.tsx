import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useAuth } from 'components/AuthContext';

export default function Signup() {
  const { user, TEMP_LOGIN } = useAuth();
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // TODO: Use AuthContext to handle user auth
    // login(username, password);
    TEMP_LOGIN();
    router.push('/dashboard');
  };

  // If user, bypass this login page
  if (user) {
    router.push('/dashboard');
  }

  return (
    <MainContainer>
      <LoginBlockContainer>
        <LogoContainer>
          <Image src={`/circle-gradient.png`} alt="logo" width={55} height={55} quality={50} />
          <div className="title" style={{ marginLeft: 10, fontFamily: 'Shadows Into Light' }}>
            <span>Cast</span>
            <span>Me</span>
            <span>App</span>
          </div>
        </LogoContainer>

        <h1>Log In</h1>
        <p>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Don't have an account? <Link href="/signup">Sign Up</Link>
        </p>

        <Input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <SignupButton type="submit" onClick={handleSubmit}>
          Signup
        </SignupButton>
      </LoginBlockContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  height: 100vh;
  background: hsla(193, 80%, 76%, 1);

  background: linear-gradient(
    315deg,
    hsla(193, 80%, 76%, 1) 0%,
    hsla(230, 35%, 76%, 1) 49%,
    hsla(341, 57%, 84%, 1) 100%
  );

  background: -moz-linear-gradient(
    315deg,
    hsla(193, 80%, 76%, 1) 0%,
    hsla(230, 35%, 76%, 1) 49%,
    hsla(341, 57%, 84%, 1) 100%
  );

  background: -webkit-linear-gradient(
    315deg,
    hsla(193, 80%, 76%, 1) 0%,
    hsla(230, 35%, 76%, 1) 49%,
    hsla(341, 57%, 84%, 1) 100%
  );

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBlockContainer = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 500px;
  border-radius: 5px;
  max-height: 600px;
  padding: 3rem 2rem 5rem;
  margin: 0 1rem;

  h1 {
    text-align: center;
    margin: 0;
    color: rgba(0, 0, 0, 0.6);
  }

  p {
    font-size: 14px;
    text-align: center;
    margin: 0.7rem 0 3rem 0;
    color: rgba(0, 0, 0, 0.4);

    & > a {
      text-decoration: underline;
      font-size: 15px;
      font-weight: bold;

      &:hover {
        color: rgba(0, 0, 0, 0.7);
      }
    }
  }
`;

const Input = styled.input`
  display: block;
  font-size: 18px;
  padding: 0.5rem;
  margin: 1rem auto;
  width: 100%;
  max-width: 300px;
  border: 1px solid lightgray;
`;

const SignupButton = styled.button`
  display: block;
  font-size: 18px;
  padding: 0.5rem;
  margin: 2.5rem auto;
  width: 100%;
  max-width: 300px;
  color: #fff;
  background: ${(props) => props.theme.colors.pink};
  border: 1px solid rgba(180, 180, 180, 0.8);
  box-shadow: ${(props) => props.theme.button.boxShadow};
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 50px;
`;

const LogoContainer = styled.h3`
  text-align: center;
  position: relative;
  margin-bottom: -2rem;
  display: flex;
  align-items: center;
  transform: none;
  border-radius: 100px;
  width: 100%;
  display: block;

  & .title {
    color: gray;
    transform: translate(-5px, -55px);
    font-size: 30px;

    & > span:nth-child(1) {
      color: ${(props) => props.theme.colors.teal};
    }
    & > span:nth-child(2) {
      color: #fff;
    }
    & > span:nth-child(3) {
      color: ${(props) => props.theme.colors.pink};
    }

    @media (max-width: 600px) {
      left: -27px;
      top: 10px;
      font-size: 22px;
    }
  }
`;
