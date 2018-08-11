//import libraries
import React from "react";
import styled from "styled-components";

// create a component
const Superheroes = props => {
  return (
    <Wrapper>
      <h1>Comics!</h1>
      {props.heroes.map(hero => {
        return (
          <div className="books" key={hero.superhero}>
            <h3>{hero.superhero}</h3>
            <p>
              <strong>Publisher</strong>: {hero.publisher}
            </p>
            <p>
              <strong>Alter Ego</strong>: {hero.alter_ego}
            </p>
            <p>
              <strong>First appearance</strong>: {hero.first_appearance}
            </p>
          </div>
        );
      })}
    </Wrapper>
  );
};

// define your styles
const Wrapper = styled.div`
  position: relative;
`;

//make this component available to the app
export default Superheroes;
