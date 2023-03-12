import './App.css';
import React from 'react';
import Header from './components/Header';
import Livres from './components/Livres';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      livres: [],
      currentPage: 1,
      totalItems: 0,
    };
  }

  

  render() {
    return (
      <div>
        <Header titre="API recherche Google Books" onChange={(livres) => this.setState({ livres: livres })} 
          currentPage={this.state.currentPage} 
          totalItems={this.state.totalItems}
        />
        <div class="wrapper">
          <Livres livres={this.state.livres} currentPage={this.state.currentPage} totalItems={this.state.totalItems}/>
        </div>
      </div>
    );
  }
}

export default App;
