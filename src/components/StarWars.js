//import libraries
import React from "react";
import styled from "styled-components";

// create a component
const StarWars = props => {
  return (
    <Wrapper>
      <h1>Comics!</h1>
      {props.starwars.map(sw => {
        return (
          <div className="books" key={sw.title}>
            <h3>{sw.title}</h3>
            <p>
              <strong>Publisher</strong>: {sw.episode_number}
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
export default StarWars;
