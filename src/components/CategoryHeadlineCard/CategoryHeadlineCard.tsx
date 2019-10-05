import React from "react";
import styled from "styled-components";
import { CardContainer, TitleText } from "../Card/Card";

export interface Props {
  title: string;
}

const HeadlineText = styled(TitleText)`
  font-weight: 900;
  font-size: 48px;
`;

const CategoryHeadlineCard = ({ title }: Props) => {
  return (
    <CardContainer>
      <HeadlineText>{title}</HeadlineText>
    </CardContainer>
  );
};

export default CategoryHeadlineCard;
