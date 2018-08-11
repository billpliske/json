import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import Superheroes from "./components/Superheroes";
import StarWars from "./components/StarWars";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      superheroes: [],
      books: [],
      starwars: []
    };
  }

  componentDidMount() {
    fetch("./data/superheroes.json")
      .then(response => response.json())
      // .then(results => console.log(results));
      .then(results => this.setState({ superheroes: results }));

    fetch("./data/books.json")
      .then(response => response.json())
      // .then(results => console.log(results));
      .then(results => this.setState({ books: results }));

    fetch("./data/starwars.json")
      .then(response => response.json())
      // .then(results => console.log(results.movies));
      .then(results => this.setState({ starwars: results.movies }));
  }

  render() {
    return (
      <Wrapper>
        <div>
          <h1>Books!</h1>
          {this.state.books.map(book => {
            return (
              <div className="books" key={book.title}>
                <h3>{book.title}</h3>
                <p>
                  <strong>Author</strong>: {book.author}
                </p>
                <p>
                  <strong>Year</strong>: {book.year_written}
                </p>
                <p>
                  <strong>Publisher</strong>: {book.edition}
                </p>
              </div>
            );
          })}
        </div>
        <div>
          <Superheroes heroes={this.state.superheroes} />
        </div>
        <div>
          <StarWars starwars={this.state.starwars} />
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0;
  padding: 40px;
  text-align: left;
`;

export default App;
