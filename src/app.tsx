import React from 'react';
import { hot } from 'react-hot-loader/root';
import Counter from './counter';

const App: React.FC = () => (
  <div>
    Hello,World666!
    <Counter />
  </div>
);

export default hot(App);
