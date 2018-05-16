import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Films extends React.Component {
  state = { films: {} }

  componentDidMount() {
    axios.get('https://swapi.co/api/films/')
      .then( res => {
        this.setState({ films: res.data.results })
        // console.log(this.state.people)
      })
      .catch(err => {
        // console.log(err.response)
      })
  }

  render() {
    const { films } = this.state;
    return (
      <Container>
        <Header as='h1' textAlign='center'>Films Component</Header>
        { films[0] ?
        films.map((film, i) => {
          // film.url .. need to split this and save only the second to last character as teh ID
          return(
          <Link key={(i+1)} to={`/film/${(i+1)}`}>{film.title}<br /></Link>
          )
        })
        :
        null
        }
      </Container>
    );
  }
}

export default Films;
