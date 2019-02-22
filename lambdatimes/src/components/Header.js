import React from 'react';
import styled from 'styled-components'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <div className="header">
      <span className="date">SMARCH 32, 2018</span>
      <h1>Lambda Times</h1>
      <span className="temp">98°</span>
    </div>
  )
}

const HeaderContainer = styled.div`
  display: flex,
  justify-content: space-between,
  align-items: center,
  flex-direction: row,
  background-color: #fff,
  border-bottom: 1px solid lightgrey,
  width: 100%,
  height: 120px,
  margin-top: 44px,
  padding-bottom: 15px,

  @media (min-width: 1280px) {
      width: 1280px,
  }
`;

const HeaderTitle = styled.h1`
    font-size: 60px,
    font-family: Didot, serif,
    font-weight: bold,
    flex: 8,
    text-align: center,
    color: #000,
`;

.header span `
  align-self: flex-end,
  font-size: 11px,
  font-weight: bold,
  letter-spacing: 1px,
`;
.header .date `
  margin-left: 25px,
  flex: 1,
`;
.header .temp `
  text-align: right,
  margin-right: 25px,
  flex: 1,
`;

export default Header