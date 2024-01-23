import styled from "styled-components";

export const CartWrapper = styled.div`
  width: 450px;
  max-height: 600px;
  background-color: #fff;
  position: absolute;
  right: ${(props) => (props.opencart ? "-90px" : "-550px")};
  transition: right 0.3s ease-in-out;
  padding: 20px 20px;
  top: 90px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  .Top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #dadada;
    padding-bottom: 10px;
    h2 {
      font-family: Areeb;
      color: orange;
    }
  }
`;

export const ProductCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 5px 20px 0;
  .img {
    width: 100px;
  }
  #check {
    width: 15px;
    height: 15px;
    cursor: pointer;
    border-radius: 50px !important;
    background-color: orange !important;
    margin-right: 15px;
  }
  h4 {
    padding-left: 15px;
    font-size: 13px;
    overflow: hidden;
  }
  h5 {
    padding-left: 15px;
    padding-top: 5px;
    color: orange;
    font-weight: 600;
    font-family: Areeb;
    font-size: 18px;
  }
`;

export const ProductAarea = styled.div`
  width: 100%;
  max-height: 450px;
  overflow-y: scroll;
  h3 {
    padding: 10px 0;
    font-size: 14px;
  }
`;

export const Last = styled.div`
  display: flex;
  padding-top: 10px;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid #dadada;

  h2 {
    font-family: Areeb;
    color: orange;
  }
  button {
    height: 35px;
    width: 120px;
    border-radius: 4px;
    background-color: #f57224;
    font-weight: 600;
    font-size: 14px;
    color: #fff;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: #d0611e;
    }
  }
`;
