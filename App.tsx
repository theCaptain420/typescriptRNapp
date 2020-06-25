
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import {EnthuTest} from './src/home/EnthusiasmTest'
import {Enthu} from './src/home/Enthusiasm'
import EnterMyName from './src/home/EnterMyName'

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <View>
      <EnthuTest name="mads" enthusiasmLevel={1}/>
      <Enthu name="test" enthusiasmLevel={1} />
      <EnterMyName name="tsm" favoriteNumber={1}/>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
