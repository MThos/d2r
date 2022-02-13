import { Component } from 'react';
import './index.css';
import './css/basics.css';
import './css/classes.css';
import Title from './components/Title';
import Icon from './components/Icon';
import Navbar from './components/Navbar';
import Sitemap from './components/Sitemap';
import Footer from './components/Footer';
import Section from './components/Section';

class App extends Component {
  constructor() {
    super();
    this.state = {
      active: "classes"
    }
  }

  onClick = link => {
    this.setState({ active: link.target.id });
  }

  render() {
    return (
      <main className="App">
        <header>
          <Icon />
          <Title name="diablo 2 remastered" />
          <Navbar content={this.state.active} onClick={this.onClick} />
        </header>        
        <section>
          <Section active={this.state.active} />
        </section>
        <footer>
          <Sitemap onClick={this.onClick} />
          <Footer />
        </footer>
      </main>
    );
  }  
}

export default App;
