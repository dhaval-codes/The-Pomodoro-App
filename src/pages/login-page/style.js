import styled from "styled-components";

export const PageWrpr = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.primaryBackground};
  padding: 2rem;
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const LoginFormCont = styled.div`
  height: 100%;
  width: 60%;
  /* background-color: ${({ theme }) => theme.red}; */
`;

export const ImageCarrouselCont = styled.div`
  height: 100%;
  width: 40%;
`;
