import styled from "styled-components";

export const NavCon = styled.div`
  width: 100%;
  background-color: #fff;
  position: sticky;
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
  }
  .NavLinks {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    h3 {
      font-size: 20px;
      font-family: Areeb;
      cursor: pointer;
    }
  }

  .active {
    h3 {
      color: orange;
      font-family: Areeb;
    }
  }

  @media (max-width: 500px) {
    height: 60px;
    .Logo {
      font-size: 18px;
    }
    .NavLinks {
      gap: 20px;
      h3 {
        font-size: 18px;
        font-family: Areeb;
        cursor: pointer;
      }
    }
  }
`;

export const UserSec = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  gap: 5px;
  .Cart {
    height: 40px;
    width: 40px;
    position: relative;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      background-color: #dadada;
    }
    img {
      width: 30px;
    }
  }
  @media (max-width: 500px) {
    .Cart {
      width: 30px;
      height: 30px;
      img {
        width: 20px;
      }
    }
  }
`;

export const Count = styled.div`
  position: absolute;
  top: -3px;
  right: -5px;
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
    right: -2px;
    top: -6px;
    height: 15px;
    width: 15px;
    span {
      font-size: 8px;
    }
  }
`;
