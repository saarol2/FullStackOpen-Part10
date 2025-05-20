import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    // ...
  },
  header: {
    backgroundColor: '#24292e',
    padding: 10,
    color: '#ffffff',
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <>
        <Pressable style={styles.header} onPress={() => {}}>
          <AppBarTab text="Repositories" />
        </Pressable>
      </>
    </View>
  );
};

export default AppBar;