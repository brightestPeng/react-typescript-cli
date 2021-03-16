import React from 'react';
import { hot } from 'react-hot-loader/root';
import Counter from './counter';

import './app.less';

const App: React.FC = () => (
  <div>
    Hello,World4333344666!
    <Counter />
  </div>
);

export default hot(App);
