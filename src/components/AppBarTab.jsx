import { Pressable, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'white',
    padding: 10,
    fontWeight: 'bold',
  },
});

const AppBarTab = ({ text }) => {
  return (
    <Pressable>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default AppBarTab;
