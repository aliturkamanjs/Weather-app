import styled from "styled-components";
import background from "./images/background.png";

const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  border-radius: 11px;
  padding: 8px;
  width: 100%;
  padding-left: 10px;
  background: #ffffffc5;
  color: #a6a6a6;
  transition: 0.2s ease-in-out;
  :focus {
    box-shadow: 0px 6px 9px #b4b4b4;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-top: 230px;
`;

export const Section = styled.section`
  width: 29%;
  height: 100vh;
  @media (max-width: 1440px) and (min-width: 1024px) {
    width: 45%;
  }
  @media (max-width: 1024px) and (min-width: 425px) {
    width: 50%;
  }
  @media (max-width: 768px) and (min-width: 258px) {
    width: 90%;
  }
`;

export const Title = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 55px;
  font-size: 55px;
  color: #3d3d3d;
  @media (max-width: 768px) and (min-width: 258px) {
    font-size: 40px;
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Temp = styled.h3`
  color: #448fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 49px;
  font-weight: 400;
  margin-left: 10px;
  @media (max-width: 768px) and (min-width: 258px) {
    font-size: 40px;
  }
`;

export const Image = styled.img`
  width: 60px;
`;

export const Time = styled.h1`
  font-size: 46px;
  color: #3d3d3d;
  font-family: "Roboto", sans-serif;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Blur = styled.div`
  width: 70%;
  height: auto;
  padding: 17px 0;
  background: #ffffff54;
  backdrop-filter: blur(16px);
  border-radius: 20px;
  margin: auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  @media (max-width: 768px) and (min-width: 258px) {
    width: 90%;
  }
`;

export const DateS = styled.h3`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  margin-top: 9px;
  @media (max-width: 768px) and (min-width: 258px) {
    font-size: 17px;
  }
`;
