import styled from "styled-components";

export const DetailWrapper = styled.div`
  height: 80vh;
  width: 1366px;
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const ProductDisplaySec = styled.div`
  width: 50%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.image});
  border-radius: 20px;
`;
export const ProductInfoSec = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  padding: 50px;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  h1 {
    font-size: 35px;
    padding-bottom: 20px;
    font-family: Regular;
  }
  h2 {
    color: #343a40;
    font-size: 60px;
    padding: 15px 0 30px;
  }
  h3 {
    padding-bottom: 30px;
    font-size: 25px;
    font-weight: 400;
  }
  .stockValues {
    display: flex;
    justify-content: center;
    gap: 50px;
    .Stock {
      display: flex;
      justify-content: center;
      gap: 5px;
      h3 {
        font-size: 20px;
        text-decoration: underline;
        font-family: Regular;
      }
      span {
        font-family: Regular;
        font-size: 20px;
        font-weight: 700;
      }
    }
    .Counter {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-bottom: 20px;
      .op {
        height: 30px;
        width: 30px;
        border-radius: 50%;
        border: 2px solid #dadada;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
        cursor: pointer;
        span {
          font-size: 20px;
        }
      }
    }
  }

  .ButtonDiv {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    width: 100%;
    gap: 20px;
    .Btn {
      width: 50%;
      height: 40px;
      background-color: #343a40 !important;
      color: #fff !important;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      font-size: 16px;
      font-weight: 600;
      &:hover {
        background-color: #64707c !important;
      }
    }
    .buy {
      background-color: rgb(236, 180, 76) !important;
      &:hover {
        background-color: orange !important;
      }
    }
    .disable {
      background-color: grey !important;
      &:hover {
        background-color: grey !important;
      }
    }
  }
`;
