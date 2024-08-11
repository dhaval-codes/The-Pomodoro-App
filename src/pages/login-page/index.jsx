import React from "react";
import {
  PageWrpr,
  Container,
  LoginFormCont,
  ImageCarrouselCont,
  AppTitle,
  FormWrpr,
  Title,
  SecondaryTitle,
  SignInButton,
  ButtonText,
  HorizontalLine,
  ThirdText,
  ProblemCont,
  ProblemText,
} from "./style.js";

import Carrousel from "../../components/carrousel/index.jsx";
import GoogleLogo from "../../assets/icons/GoogleLogo.jsx";
import QuestionCircle from "../../assets/icons/QuestionCircle.jsx";

import { useNavigate } from "react-router-dom";

//importing images for Carousle
import Image1 from "../../assets/images/image1.png";
import Image2 from "../../assets/images/image2.png";
import Image3 from "../../assets/images/image3.png";
import Image4 from "../../assets/images/image4.png";

function LoginPage() {
  const ImageUrlMappingArray = [Image1, Image2, Image3, Image4];
  const navigate = useNavigate();

  return (
    <PageWrpr>
      <Container>
        <LoginFormCont>
          <AppTitle>Pomodoro Study</AppTitle>
          <FormWrpr>
            <Title>Welcome Back!</Title>
            <SecondaryTitle>
              start your distraction free study sessions with few simple steps
            </SecondaryTitle>
            <SignInButton onClick={() => navigate("/landing-page")}>
              <GoogleLogo />
              <ButtonText>Login Using Google</ButtonText>
            </SignInButton>
            <FormWrpr style={{ padding: 0 }}>
              <HorizontalLine />
              <SecondaryTitle
                style={{
                  position: "absolute",
                  backgroundColor: `${({ theme }) => theme.primaryBackground}`,
                }}
              >
                or
              </SecondaryTitle>
            </FormWrpr>
            <ThirdText>
              Don't have an account yet? <a>Register Now</a>
            </ThirdText>
          </FormWrpr>
          <ProblemCont>
            <QuestionCircle />
            <ProblemText>Problem in Login?</ProblemText>
          </ProblemCont>
        </LoginFormCont>
        <ImageCarrouselCont>
          <Carrousel arrayOfImages={ImageUrlMappingArray} />
        </ImageCarrouselCont>
      </Container>
    </PageWrpr>
  );
}

export default LoginPage;
