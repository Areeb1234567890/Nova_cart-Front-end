import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1366px;
  height: 500px;
  margin: 0 auto;
  margin-top: 50px;
  .Container {
    width: 1366px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .Container > .wrap {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #343a40;
  }
  .wrap > img {
    width: 70%;
    height: 80%;
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
