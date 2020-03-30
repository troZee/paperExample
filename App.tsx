/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider as PaperProvider, useTheme} from './src';

declare var global: {HermesInternal: null | {}};

const AA = () => {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
};
const App = () => {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: theme.colors.background,
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: theme.colors.text,
        }}>{`dark theme enabled: ${theme.dark}`}</Text>
    </SafeAreaView>
  );
};

export default AA;
