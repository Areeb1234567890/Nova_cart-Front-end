import styled from "styled-components";

export const CartWrapper = styled.div`
  max-width: 1366px;
  height: 89vh;
  margin: 0 auto;
  padding: 30px 0 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 50px;
`;
export const ProductCart = styled.div`
  width: 65%;
  height: 100%;
  border-radius: 15px;
  border: 2px solid #dadada;
  .logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    padding: 0 30px 5px;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 60px;
    background-color: #33393f;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    .img {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      gap: 5px;
      img {
        width: 40px;
      }
      h3 {
        color: #fff;
        font-size: 25px;
      }
    }
  }
  .productsSec {
    width: 100%;
    height: calc(100% - 60px);
    padding: 20px 15px;
    overflow-y: scroll;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    gap: 15px;
    .Product {
      width: 100%;
      height: 150px;
      border: 2px solid #dadada;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 10px;
      #Pwrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        .ProductImage {
          height: 130px;
          width: 150px;
          border-radius: 8px;
        }
        h3 {
          font-size: 15px;
          font-family: Regular;
          color: #343a40;
        }
        span {
          opacity: 0.5;
          font-weight: 600;
          padding-top: 10px;
        }
      }
      .Counter {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
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
      .price {
        span {
          font-size: 25px;
          font-weight: 700;
          font-family: Regular;
        }
      }
      .Actions {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        cursor: pointer;
        &:hover {
          background-color: #dadada;
        }
        .checkBox {
          height: 15px !important;
          width: 15px !important;
          cursor: pointer;
        }
      }
    }
  }
`;
export const CheckOut = styled.div`
  width: 35%;
  height: 60%;
  border-radius: 30px;
  background-color: #f3f3f9;
  padding: 35px 20px 15px;

  h2 {
    font-family: Regular;
    padding-bottom: 15px;
  }
  .PromoSec {
    width: 100%;
    height: 50px;
    border: 2px solid #dadada;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 5px 5px 20px;
    margin-bottom: 18px;
    input {
      height: 100%;
      width: 60%;
      background-color: transparent;
      border: none;
      outline: none;
      color: #111;
      font-size: 15px;
      font-weight: 600;
      font-family: Regular;
    }
    .primary {
      width: 30% !important;
      height: 100% !important;
      border-radius: 25px !important;
      font-size: 13px !important;
      font-weight: 600 !important;
    }
  }

  .billing {
    padding: 25px 0 15px;
    .dets {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 20px;
      .sec {
        color: #babacd;
        font-family: Regular;
      }
      .primary {
        font-family: Regular;
        font-size: 18px;
      }
    }
  }
  .btn {
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    background-color: #343a40;
    color: #fff;
    font-weight: 700;
    &:hover {
      background-color: #64707c;
    }
  }
`;
