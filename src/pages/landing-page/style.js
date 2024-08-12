import styled from "styled-components";

export const PageWrpr = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.primaryBackground};
  display: flex;
`;

export const NonProfileCont = styled.div`
  height: calc(100% - 4rem);
  width: calc(75% - 4rem);
  background-color: ${({ theme }) => theme.red};
  margin: 2rem;
`;

export const ProfileCont = styled.div`
  height: 100%;
  width: 25%;
  background-color: ${({ theme }) => theme.secondaryBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

export const ProfilePicWrpr = styled.div`
  height: 12rem;
  width: 12rem;
  background-color: ${({ theme }) => theme.purple};
  border-radius: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ProfilePic = styled.div`
  height: 11rem;
  width: 11rem;
  border-radius: 11rem;
  border: 5px solid ${({ theme }) => theme.secondaryBackground};
  background-image: url(${(props) => props.imageUrl});
`;
