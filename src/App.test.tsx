import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App title="your-mum" message="Smells" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
