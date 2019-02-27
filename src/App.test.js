import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Container from './components/container';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Container />, div);
  ReactDOM.unmountComponentAtNode(div);
});