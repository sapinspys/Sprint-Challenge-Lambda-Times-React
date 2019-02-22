import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Cards = props => {
  return (
    <CardsContainer>
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {props.cards.map((card,index) => (
        <Card key={index}
          card={card} />
      ))}
    </CardsContainer>
  )
}

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;

  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
}

export default Cards;