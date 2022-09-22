import React from 'react';
import styled from 'styled-components';

const Title = ({children}) => {
  return <TitleWrapper><span>Q.</span>{children}</TitleWrapper>
};

const TitleWrapper = styled.h1`
  color: #121111;
  font-size: 24px;
  line-height: 28px;
  font-weight: bold;
  margin: 0;
  
  span {
    margin-right: 12px;
  }
`

export default Title;
