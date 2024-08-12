import React from "react";
import {
  NonProfileCont,
  PageWrpr,
  ProfileCont,
  ProfilePic,
  ProfilePicWrpr,
} from "./style.js";

function LandingPage() {
  return (
    <PageWrpr>
      <NonProfileCont></NonProfileCont>
      <ProfileCont>
        <ProfilePicWrpr>
          <ProfilePic
            imageUrl={
              "https://res.cloudinary.com/dw6ntktro/image/upload/v1723495818/379638295_841146494078713_9204764168426934650_n_mpbyfq.jpg"
            }
          />
        </ProfilePicWrpr>
      </ProfileCont>
    </PageWrpr>
  );
}

export default LandingPage;
