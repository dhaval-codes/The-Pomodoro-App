import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => {
    console.log("Theme color:", theme); // Log the color to the console
    return theme.red; // Return the color to be used as the background
  }};
`;
