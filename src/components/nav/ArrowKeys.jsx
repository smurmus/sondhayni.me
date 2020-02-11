import React from 'react';
import styled from 'styled-components';

const ArrowBox = styled.div`
  background-color: #d1ecff;
  height: 48px;
  width: 48px;
  border-radius: 24px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  padding: 24px;
  display: flex;
  width: 240px;
  align-items: center;
  justify-content: center;
`;

const VerticalKeys = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ArrowKeys = () => (
  <Container>
    <ArrowBox
      onClick={() => console.log('Left!')}
    >
      ←
    </ArrowBox>
    <VerticalKeys>
      <ArrowBox>↑</ArrowBox>
      <div style={{ height: 20 }} />
      <ArrowBox>↓</ArrowBox>
    </VerticalKeys>
    <ArrowBox>→</ArrowBox>
  </Container>

);

export default ArrowKeys;
