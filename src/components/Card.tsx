import React from "react";
import styled from "styled-components";

const CardContainer = styled.View`
  background-color: ${props => props.theme.darkMode ? '#494949' : '#fff'}
  padding: 12px;
`;

const TitleText = styled.Text`
  font-size: 24px;
  text-align: center;
  color: ${props => !props.theme.darkMode ? '#000' : '#fff'}
`;

const Card = ({ title }) => {
  return (
    <CardContainer>
      <TitleText>{title}</TitleText>
    </CardContainer>
  );
};

export default Card;
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });
