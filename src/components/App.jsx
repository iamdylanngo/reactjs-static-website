import React from 'react';
import Header from './header/Header.jsx';
import Body from './body/Body.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { ThemeContext, themes } from './ThemesContext';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light
    };
  }

  changeTheme = (isDrak) => {
    if (isDrak) {
      this.setState({
        theme: themes.dark
      });
    } else {
      this.setState({
        theme: themes.light
      });
    }
  }

  changeEmail = (e) => {

  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <Container style={{
          background: this.state.theme.background,
          color: this.state.theme.color
        }} fluid>
          <Row>
            <Col xs={2}>
              <Header />
            </Col>
            <Col xs={10}>
              <Body changeTheme={this.changeTheme} />
            </Col>
          </Row>
        </Container>
      </ThemeContext.Provider>
    );
  }
}

export default App;
