import React from 'react';
import styled from 'styled-components';

export default function Content({ children }: any) {
  return <MainContainer>{children}</MainContainer>;
}

const MainContainer = styled.div`
  background: #f1f2f6;
  padding: 1rem;
  margin-top: 61px;
  min-height: calc(100vh - 61px);

  @media (min-width: 769px) {
    margin-left: 260px;
    margin-top: 72px;
    min-height: calc(100vh - 72px);
  }
`;
