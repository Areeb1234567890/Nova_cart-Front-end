import styled from "styled-components";

export const NavCon = styled.div`
  width: 100%;
  background-color: #343a40;
  position: sticky;
  z-index: 10;
  top: 0;
  padding: 0 20px;
  left: 0;
  right: 0;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
`;

export const NavWrap = styled.div`
  height: 80px;
  max-width: 1366px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  margin: 0 auto;
  .Logo {
    font-family: Areeb;
    white-space: nowrap;
    color: #dadada;
    &:hover {
      color: #fff;
    }
  }
  .NavLinks {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    input {
      height: 35px;
      width: 350px;
      padding: 0 20px;
      border-radius: 2px;
      border: none;
      font-family: Regular;
    }
    button {
      height: 35px;
      width: 100px;
      background-color: orange;
      color: #fff;
      font-weight: 500;
      border: none;
      transition: background-color 0.2s ease-in-out;
      outline: none;
      border-radius: 2px;
      cursor: pointer;
      &:hover {
        background-color: #f9cd7b;
      }
    }
  }

  .active {
    h3 {
      color: orange;
      font-family: Areeb;
    }
    button {
      background-color: orange;
      color: #fff;
      font-weight: 700;
    }
  }

  @media (max-width: 500px) {
    height: 60px;
    .Logo {
      font-size: 18px;
    }
    .NavLinks {
      gap: 20px;
    }
  }
`;

export const UserSec = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  gap: 15px;
  button {
    height: 30px;
    width: 100px;
    border: none;
    border-radius: 2px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    &:hover {
      background-color: #ffcd04;
      color: #fff;
    }
  }
  .Cart {
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 5px;
    gap: 5px;
    cursor: pointer;
    &:hover {
      border-bottom: 2px solid #dadada;
      h4 {
        color: #fff;
      }
    }
    h4 {
      color: #dadada;
    }
    img {
      width: 30px;
    }
  }
  @media (max-width: 500px) {
    .Cart {
      img {
        width: 20px;
      }
    }
  }
`;

export const Count = styled.div`
  position: absolute;
  top: -10px;
  right: 28px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: orange;
  border: 2px solid orange;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: #fff;
    font-weight: 700;
    font-size: 12px;
  }
  @media (max-width: 500px) {
    right: 20px;
    top: -6px;
    height: 15px;
    width: 15px;
    span {
      font-size: 8px;
    }
  }
`;

export const Count2 = styled.div`
  position: absolute;
  top: -7px;
  right: 48px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: orange;
  border: 2px solid orange;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: #fff;
    font-weight: 700;
    font-size: 12px;
  }
  @media (max-width: 500px) {
    right: 20px;
    top: -6px;
    height: 15px;
    width: 15px;
    span {
      font-size: 8px;
    }
  }
`;

export const Count3 = styled.div`
  position: absolute;
  top: 11px;
  right: 20px;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background-color: orange;
  border: 2px solid orange;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: #fff;
    font-weight: 700;
    font-size: 12px;
  }
  @media (max-width: 500px) {
    right: 20px;
    top: -6px;
    height: 15px;
    width: 15px;
    span {
      font-size: 8px;
    }
  }
`;
