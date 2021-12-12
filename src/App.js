import { Component } from 'react';
import './index.css';
import Title from './components/Title';
import Icon from './components/Icon';
import Navbar from './components/Navbar';
import Sitemap from './components/Sitemap';
import Footer from './components/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      section: "news"
    }
  }

  render() {
    return (
      <main className="App">
        <header>
          <Icon />
          <Title name="diablo 2 remastered" />
          <Navbar />
        </header>        
        <section>
          Test
        </section>
        <footer>
          <Sitemap />
          <Footer />
        </footer>
      </main>
    );
  }  
}

export default App;
