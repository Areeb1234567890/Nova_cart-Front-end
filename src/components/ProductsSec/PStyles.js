import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 70px 0;
  max-width: 1366px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin: 0 auto;
  .Product {
    width: 400px;
    height: 420px;
    transition: 0.2s all ease-in;
    cursor: pointer;
    padding: 10px 10px;
    .Price {
      padding-top: 10px;
      color: #343a40;
      font-weight: 800;
    }
  }
  .Product:hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  }
`;

export const PImg = styled.div`
  width: 100%;
  height: 300px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.image});
`;
