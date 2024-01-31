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
  .dets {
    height: 30px;
    width: 70%;
    border-radius: 15px;
    text-align: center;
    padding-top: 3px;
    background-color: #dadada;
    margin-bottom: 30px;
    p {
      font-size: 20px;
      font-weight: 500;
    }
  }
  .ButtonDiv {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    width: 100%;
    .Btn {
      width: 70%;
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
  }
`;
