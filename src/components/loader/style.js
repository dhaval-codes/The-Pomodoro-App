import styled, { keyframes } from "styled-components";

const rotatingAnimation = keyframes`
  from{
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.primaryBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ArcedCircle = styled.div`
  height: 7.5rem;
  width: 7.5rem;
  border-radius: 10rem;
  background: conic-gradient(
    ${({ theme }) => theme.red} 0%,
    ${({ theme }) => theme.yellow} 16.66%,
    ${({ theme }) => theme.green} 33.33%,
    ${({ theme }) => theme.sky} 50%,
    ${({ theme }) => theme.blue} 66.66%,
    ${({ theme }) => theme.purple} 83.33%,
    ${({ theme }) => theme.red} 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${rotatingAnimation} 1s linear infinite;
`;

export const CenterCircle = styled.div`
  height: 6rem;
  width: 6rem;
  border-radius: 5rem;
  background-color: ${({ theme }) => theme.primaryBackground};
`;

export const LoadingText = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.textColor};
  font-weight: 600;
`;
