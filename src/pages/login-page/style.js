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
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const ImageCarrouselCont = styled.div`
  height: 100%;
  width: 40%;
`;

export const AppTitle = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textColor};
  text-decoration: underline;
`;

export const FormWrpr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.textColor};
`;

export const SecondaryTitle = styled.span`
  font-size: 0.8125rem;
  font-weight: 400;
  color: ${({ theme }) => theme.textColor};
`;

export const SignInButton = styled.div`
  height: 4rem;
  width: 25rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 1rem;
  border: 5px solid ${({ theme }) => theme.secondaryBackground};
  margin-top: 5rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.secondaryBackground};
  }
`;

export const ButtonText = styled.span`
  font-size: 1.125rem;
  font-weight: 900;
  color: ${({ theme }) => theme.textColor};
`;

export const HorizontalLine = styled.hr`
  width: 25rem;
  border: 1px solid ${({ theme }) => theme.secondaryBackground};
  margin: 2rem;
`;

export const ThirdText = styled.span`
  font-size: 0.8125rem;
  font-weight: 900;
  color: ${({ theme }) => theme.textColor};

  a {
    color: ${({ theme }) => theme.sky};
    cursor: pointer;
  }
`;

export const ProblemCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

export const ProblemText = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;
`;
