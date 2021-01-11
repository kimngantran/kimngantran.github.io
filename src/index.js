import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import SmoothScroll from 'smooth-scroll';

ReactDOM.render(<App />, document.getElementById('root'));

new SmoothScroll('a[href*="#"]', {
  speed: 500,
  offset: 56
});