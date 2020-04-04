/*
 * @flow
 */
import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TVMenuControl,
} from 'react-native';
import {useIsFocused, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function Button({title, onPress, onFocus}) {
  return (
    <TouchableOpacity
      hasTVPreferredFocus={true}
      onPress={() => onPress()}
      onFocus={() => onFocus()}>
      <Text style={styles.button}>{title}</Text>
    </TouchableOpacity>
  );
}

function HomeScreen({navigation}) {
  const isFocused = useIsFocused();
  return isFocused ? (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('Screen1')}
        onFocus={() => console.log('Focus: Home')}
        title="Go to Screen 1"
      />
    </View>
  ) : null;
}

function Screen({route, navigation}) {
  const isFocused = useIsFocused();
  const index = parseInt(route.name.substring(6, 7), 10);
  React.useEffect(() => {
    TVMenuControl.enableTVMenuKey();
    return () => {
      if (index === 1) {
        TVMenuControl.disableTVMenuKey();
      }
    };
  });
  const nextIndex = index + 1;
  const buttonTitle = `Go to Screen ${nextIndex}`;
  return isFocused ? (
    <View style={styles.container}>
      <Text style={styles.title}>{`Screen ${index}`}</Text>
      <View style={styles.buttoncontainer}>
        <Button
          onPress={() => {}}
          onFocus={() => console.log(`Focus: ${route.name}, Button 1`)}
          title="Button 1"
        />
        <Button
          onPress={() => {}}
          onFocus={() => console.log(`Focus: ${route.name}, Button 2`)}
          title="Button 2"
        />
        <Button
          onPress={() => {}}
          onFocus={() => console.log(`Focus: ${route.name}, Button 3`)}
          title="Button 3"
        />
      </View>
      {index < 3 ? (
        <Button
          onPress={() => navigation.navigate(`Screen${nextIndex}`)}
          onFocus={() =>
            console.log(`Focus: ${route.name}, ${index}, nav button`)
          }
          title={buttonTitle}
        />
      ) : null}
    </View>
  ) : null;
}
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Screen1"
          component={Screen}
          options={{title: 'Screen 1'}}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen}
          options={{title: 'Screen 2'}}
        />
        <Stack.Screen
          name="Screen3"
          component={Screen}
          options={{title: 'Screen 3'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
  },
  button: {
    fontSize: 50,
    color: '#0000FF',
    margin: 50,
  },
  buttoncontainer: {
    flexDirection: 'row',
    margin: 100,
  },
});
