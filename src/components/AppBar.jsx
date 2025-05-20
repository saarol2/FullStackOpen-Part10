import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    flexDirection: 'row',
  },
  tab: {
    padding: 10,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Link to="/" style={styles.tab}>
        <AppBarTab text="Repositories" />
      </Link>
      <Link to="/signin" style={styles.tab}>
        <AppBarTab text="Sign In" />
      </Link>
    </View>
  );
};

export default AppBar;
