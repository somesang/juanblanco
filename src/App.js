import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Intro from './components/Intro';
import Languages from './components/Languages';
import Tools from './components/Tools';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
					<a href="#intro">Intro</a>
					<a href="#tools">Tools</a>
					<a href="#languages">Languages</a>
					<a href="#basic-syntax">Basic Syntax</a>
					<a href="#resources">Resources</a>
					<a href="#contact">Contact</a>
        </header>

				<div class="App-body">
					<Intro />
					<Tools />
					<Languages />
					<Main />
					<Resources />
					<Contact />
				</div>

      </div>
    );
  }
}

export default App;
