import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCircle,
  faSearchDollar,
  faCalendarAlt,
  faGlobeAmericas,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <MainContainer>
      <ImageContainer>
        <Image
          src={'/images/header.gif'}
          alt="header"
          layout="fixed"
          width={400}
          height={200}
          quality={95}
        />
      </ImageContainer>

      <MainText>
        <div>
          A place where Talent creates, Clients hire, Consumers are entertained and all
          opportunities can be Cast to the right match for the Experience and Vending opportunity
          for Brand Awareness and Talent Platform monetization.
        </div>
        <div>
          CastMeApp is the world of opportunity, bridging the gap between Talent and Client without
          wasted hours of false data or long contracts commiting you to something that may not work
          out.
        </div>
        <div>
          With CastMeApp clients can track performance and Talent can be themselves, authentically
          creating and landing in front of the right opportunity.
        </div>
        <div>
          Through CastMeApp we bring to surface the ability to hire the right ambassadors for the
          job, we empower Talent to business their platform as an advertising space to help share
          the brands they love with the world and above all, we partner with companies, experiences
          and brands all over the world to bring the global market to our fingertips.
        </div>
      </MainText>

      <Line />

      <SubText>
        <h2 className="main">Are you Ready?</h2>
        <h3 className="secondary">Click an option below to learn more</h3>
      </SubText>

      <IconsContainer>
        {ICONS.map((icon, key) => (
          <Icon key={key} role="button" tabIndex={0} onClick={() => console.log('On Click')}>
            <div>
              <FontAwesomeIcon
                icon={icon.icon}
                style={{ fontSize: 36, color: 'rgb(52, 52, 52)' }}
              />
            </div>
            <div>
              <span>{icon.title}</span>
            </div>
          </Icon>
        ))}
      </IconsContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  padding: 0 2rem;
  background-image: linear-gradient(
    to right bottom,
    #edbecd,
    #f9c3c6,
    #ffc9be,
    #ffd1b8,
    #ffdbb4,
    #f2e0b1,
    #e3e6b4,
    #d2ebbb,
    #b8ebc7,
    #a3e9d7,
    #95e5e6,
    #93dff3
  );
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;

const MainText = styled.h1`
  font-size: calc(14px + (20 - 14) * ((100vw - 400px) / (1800 - 400)));
  color: #404040;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1), 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.6);

  div:nth-child(1),
  div:nth-child(2),
  div:nth-child(3) {
    padding: 1rem 1rem 0;
  }
  div:nth-child(4) {
    padding: 1rem 1rem;
  }
`;

const SubText = styled.div`
  position: relative;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  color: #404040;

  .main {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: black;
  }

  .secondary {
    font-size: 1rem;
    margin: 0;
  }
`;

const Line = styled.div`
  position: relative;
  height: 3px;
  background: ${(props) => props.theme.colors.pink};
  max-width: 700px;
  margin: 1rem auto 0;
  box-shadow: ${(props) => `0 3px 2px -1px ${props.theme.colors.purple}`};
`;

const IconsContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  justify-content: center;
  max-width: 600px;
  margin: 2rem auto 0;
  padding-bottom: 1.5rem;
`;

const Icon = styled.div`
  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
  }

  & > div:nth-child(1) {
    background: white;
    margin: 0.5rem;
    padding: 1.4rem 1.4rem;
    border-radius: 100px;
    border: 1px solid ${(props) => props.theme.colors.purple};
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3), 0 2px 6px 0 rgba(0, 0, 0, 0.19);
    transition: all 300ms ease-in-out;
  }

  & div:nth-child(2) {
    display: flex;
    justify-content: center;

    & > span {
      color: white;
      text-align: center;
      background: ${(props) => props.theme.colors.teal};
      padding: 1px 5px;
      border: 1px solid ${(props) => props.theme.colors.pink};
      border-radius: 5px;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3), 0 2px 6px 0 rgba(0, 0, 0, 0.19);
      transform: translateY(-20px);
      transition: all 300ms ease-in-out;
    }
  }
`;

const ICONS = [
  { title: 'Talent', icon: faSearchDollar },
  { title: 'Clients', icon: faUserCircle },
  { title: 'Events', icon: faCalendarAlt },
  { title: 'Vendors', icon: faBuilding },
  { title: 'Travel', icon: faGlobeAmericas },
];
