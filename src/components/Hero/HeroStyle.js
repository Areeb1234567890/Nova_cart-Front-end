import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1366px;
  height: 500px;
  margin: 0 auto;
  margin-top: 50px;
  div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div > .wrap {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #343a40;
  }
  .wrap > img {
    width: 50%;
    height: 50%;
  }

  .slick-prev {
    left: 10px;
    z-index: 2;
    height: 30px !important;
    width: 30px !important;
  }

  .slick-next {
    right: 10px;
    z-index: 2;
  }
`;
