import React from "react";
import {
  PageWrpr,
  Container,
  LoginFormCont,
  ImageCarrouselCont,
} from "./style.js";

import Carrousel from "../../components/carrousel/index.jsx";

import Image1 from "../../assets/images/image1.png";
import Image2 from "../../assets/images/image2.png";
import Image3 from "../../assets/images/image3.png";
import Image4 from "../../assets/images/image4.png";

function LoginPage() {
  const ImageUrlMappingArray = [Image1, Image2, Image3, Image4];

  return (
    <PageWrpr>
      <Container>
        <LoginFormCont></LoginFormCont>
        <ImageCarrouselCont>
          <Carrousel arrayOfImages={ImageUrlMappingArray} />
        </ImageCarrouselCont>
      </Container>
    </PageWrpr>
  );
}

export default LoginPage;
