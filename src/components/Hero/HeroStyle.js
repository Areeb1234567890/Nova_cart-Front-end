import styled from "styled-components";

export const BannerMain = styled.div`
  width: 100%;
  height: 650px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
`;
