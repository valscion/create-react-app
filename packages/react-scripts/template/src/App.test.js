import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const fn = ({ a, ...otherProps }) => otherProps;

  fn({ a: 1, b: 2 });

  console.log(fn({ a: 1, b: 2 }));

  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
