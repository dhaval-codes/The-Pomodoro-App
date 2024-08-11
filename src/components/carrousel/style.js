import styled from "styled-components";

export const CarrouselCont = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: auto;
`;

export const Slide = styled.div`
  height: 100%;
  width: ${(props) => (props.active ? "100%" : "0%")};
  background-image: url(${(props) => props.imgurl});
  background-size: cover;
  background-position: center;
`;
