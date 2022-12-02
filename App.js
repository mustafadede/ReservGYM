import {View, Text} from 'react-native';
import React from 'react';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import Root from './src/Root';
const App = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};

export default App;
