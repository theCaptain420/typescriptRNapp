
import React from 'react';
import {
  View,
} from 'react-native';


import {EnthuTest} from './src/home/EnthusiasmTest'
import {Enthu} from './src/home/Enthusiasm'
import EnterMyName from './src/home/EnterMyName'


const App = () => {
  return (
    <View>
      <EnthuTest name="mads" enthusiasmLevel={1}/>
      <Enthu name="test" enthusiasmLevel={1} />
      <EnterMyName name="tsm" favoriteNumber={1}/>
    </View>
  );
};

export default App;
