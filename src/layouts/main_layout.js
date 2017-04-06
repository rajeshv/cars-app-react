import React, { Component } from 'react';
import MainMenu from './main_menu';

export default class MainLayout extends Component {
  render() {
    return (
      <div className="app">
        <MainMenu items={['home', 'car makers', 'about']}/>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}