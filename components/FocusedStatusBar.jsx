import { useIsFocused } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';

export const FocusedStatusBar = props => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBar;
