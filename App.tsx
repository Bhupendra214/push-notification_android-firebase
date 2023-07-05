import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {requestUserPermission, NotificationListener} from './src/helpers';
const App = () => {
  useEffect(() => {
    requestUserPermission();
    NotificationListener();
  }, []);
  return (
    <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
      <Text>Push Notification...</Text>
    </View>
  );
};

export default App;
