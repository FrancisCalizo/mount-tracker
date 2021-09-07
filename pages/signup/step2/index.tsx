import React, { useRef } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faTiktok,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import AuthLayout from 'components/layout/AuthLayout';
import { useAuth } from 'components/AuthContext';
import { useSignupContext } from 'components/layout/AuthLayout';
import { useContentful } from 'components/ContentfulContext';

type FormValues = {
  twitterHandle: string;
  facebookHandle: string;
  instagramHandle: string;
  tikTokHandle: string;
  youtubeHandle: string;
};

export default function Step1() {
  const { user } = useAuth();
  const router = useRouter();
  const { signupForm, setSignupForm } = useSignupContext();
  const { clientManagement } = useContentful();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormValues>();

  // Input Refs & shared ref usge with React-Hook-Form
  // Read more here: https://react-hook-form.com/faqs
  const twitterRef = useRef<HTMLInputElement | null>(null);
  const facebookRef = useRef<HTMLInputElement | null>(null);
  const instagramRef = useRef<HTMLInputElement | null>(null);
  const tikTokRef = useRef<HTMLInputElement | null>(null);
  const youtubeRef = useRef<HTMLInputElement | null>(null);
  const { ref: sharedTwitterRef, ...twitterRest } = register('twitterHandle');
  const { ref: sharedFacebookRef, ...facebookRest } = register('facebookHandle');
  const { ref: sharedInstagramRef, ...instagramRest } = register('instagramHandle');
  const { ref: sharedTikTokRef, ...tikTokRest } = register('tikTokHandle');
  const { ref: sharedYoutubeRef, ...youtubeRest } = register('youtubeHandle');

  const onSubmit = async (data: FormValues) => {
    const { twitterHandle, facebookHandle, instagramHandle, tikTokHandle, youtubeHandle } = data;

    const isAtleastOneValue = [
      twitterHandle,
      facebookHandle,
      instagramHandle,
      tikTokHandle,
      youtubeHandle,
    ].some((handle) => !!handle);

    // Check that atleast one social account is provided
    if (!isAtleastOneValue) {
      return setError('twitterHandle', {
        type: 'manual',
        message: 'Atleast one social account is required.',
      });
    }

    // console.log('data', data);
    // console.log('signupForm', signupForm);

    try {
      const space = await clientManagement.getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID);
      const env = await space.getEnvironment('master');

      const res = await env.createEntryWithId('talent', 'Hkdf832Jjs4239', {
        fields: {
          title: {
            'en-US': 'Blah test',
          },
        },
      });

      console.log(res);
    } catch (err) {
      console.log(err);
    }

    // router.push('/signup/step2');
  };

  // If user, bypass this login page
  if (user) {
    router.push('/dashboard');
  }

  return (
    <MainContainer>
      <BodyContainer>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h2>Time to connect!</h2>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h5>Please provide the account handles of all social media platforms you'd like to use</h5>

        {errors.twitterHandle && (
          <InputErrorMessage>{errors.twitterHandle.message}</InputErrorMessage>
        )}

        <div className="form-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputContainer onClick={() => twitterRef.current && twitterRef.current.focus()}>
              <div className="input-group">
                <FontAwesomeIcon icon={faTwitter} style={{ fontSize: 30, color: 'gray' }} />
              </div>
              <InputPlaceholder type="text" disabled placeholder="@" width={25} />
              <Input
                type="text"
                id="twitterHandle"
                ref={(e) => {
                  sharedTwitterRef(e);
                  twitterRef.current = e;
                }}
                {...twitterRest}
              />
            </InputContainer>

            <InputContainer onClick={() => facebookRef.current && facebookRef.current.focus()}>
              <div className="input-group">
                <FontAwesomeIcon icon={faFacebookSquare} style={{ fontSize: 30, color: 'gray' }} />
              </div>
              <InputPlaceholder type="text" disabled placeholder="facebook.com/" width={100} />
              <Input
                type="text"
                id="facebookHandle"
                ref={(e) => {
                  sharedFacebookRef(e);
                  facebookRef.current = e;
                }}
                {...facebookRest}
              />
            </InputContainer>

            <InputContainer onClick={() => instagramRef.current && instagramRef.current.focus()}>
              <div className="input-group">
                <FontAwesomeIcon icon={faInstagram} style={{ fontSize: 30, color: 'gray' }} />
              </div>
              <InputPlaceholder type="text" disabled placeholder="@" width={25} />
              <Input
                type="text"
                id="instagramHandle"
                ref={(e) => {
                  sharedInstagramRef(e);
                  instagramRef.current = e;
                }}
                {...instagramRest}
              />
            </InputContainer>

            <InputContainer onClick={() => tikTokRef.current && tikTokRef.current.focus()}>
              <div className="input-group">
                <FontAwesomeIcon icon={faTiktok} style={{ fontSize: 30, color: 'gray' }} />
              </div>
              <InputPlaceholder type="text" disabled placeholder="@" width={25} />
              <Input
                type="text"
                id="tikTokHandle"
                ref={(e) => {
                  sharedTikTokRef(e);
                  tikTokRef.current = e;
                }}
                {...tikTokRest}
              />
            </InputContainer>

            <InputContainer onClick={() => youtubeRef.current && youtubeRef.current.focus()}>
              <div className="input-group">
                <FontAwesomeIcon icon={faYoutube} style={{ fontSize: 24, color: 'gray' }} />
              </div>
              <InputPlaceholder type="text" disabled placeholder="@" width={25} />
              <Input
                type="text"
                id="youtubeHandle"
                ref={(e) => {
                  sharedYoutubeRef(e);
                  youtubeRef.current = e;
                }}
                {...youtubeRest}
              />
            </InputContainer>

            <RegisterButton>Register</RegisterButton>
          </form>
        </div>
      </BodyContainer>
    </MainContainer>
  );
}

Step1.getLayout = (page: any) => <AuthLayout>{page}</AuthLayout>;

const MainContainer = styled.div``;

const InputErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.danger};
  font-size: 12px;
  width: 100%;
  margin: 0 auto 1rem;
  text-align: center;
`;

const BodyContainer = styled.div`
  & h2 {
    text-align: center;
    margin: -1rem 0 0;
    color: ${(props) => props.theme.colors.gray};
  }

  & h5 {
    text-align: center;
    margin: 1rem auto;
    max-width: 420px;
  }

  .form-container {
    max-width: 400px;
    margin: 0 auto;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 0 4px 4px 0;
  margin: 0.5rem 0;

  ${(props) => props.theme.global.setFocusAndFocusWithin(darken(0.1, props.theme.colors.pink))}

  .input-group {
    border: none;
    height: 42px;
    border-radius: 4px 0 0 4px;
    border-right: none;
    border-color: lightgray;
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
  }
`;

const Input = styled.input`
  display: block;
  font-size: calc(14px + (16 - 14) * ((100vw - 400px) / (1800 - 400)));
  padding: 0.75rem 0;
  width: 100%;
  border: none;

  @media (max-width: 630px) {
    max-width: none !important;
  }

  ${(props) => props.theme.global.setInputFocus(darken(0.1, props.theme.colors.pink))}
`;

const InputPlaceholder = styled.input<{ width: number }>`
  display: block;
  font-size: calc(14px + (16 - 14) * ((100vw - 400px) / (1800 - 400)));
  padding: 0.75rem 0.25rem;
  width: ${({ width }) => `${width}px`};
  border: 1px solid lightgray;
  border: none;

  @media (max-width: 630px) {
    max-width: none !important;
  }

  ${(props) => props.theme.global.setInputFocus(darken(0.1, props.theme.colors.pink))}
`;

const RegisterButton = styled.button`
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
  cursor: pointer;

  &:hover {
    background: ${(props) => darken(0.03, props.theme.colors.pink)};
  }

  ${(props) => props.theme.global.setFocus(props.theme.colors.pink)}
`;
