import React from 'react';
import { hot } from 'react-hot-loader/root';
import Counter from './counter';

const App: React.FC = () => (
  <div>
    Hello,World!
    <Counter />
  </div>
);

export default hot(App);