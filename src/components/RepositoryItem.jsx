import { View, Text, Image, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  description: {
    color: 'gray',
    marginBottom: 4,
  },
  language: {
    color: 'white',
    backgroundColor:'#1a72b9',
    marginBottom: 4,
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  statistics: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  statistic: {
    alignItems: 'center',
  },
})

const formatThousands = (num) => {
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}k`;
  }
  return num
};

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.profilePicture} source={{ uri: item.ownerAvatarUrl }} />
        <View style={{ flex: 1 }}>
          <Text style={styles.name}> {item.fullName}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.language}>{item.language}</Text>
        </View>
      </View>
      <View style={styles.statistics}>
        <View style={styles.statistic}>
          <Text style={{ fontWeight: 'bold' }}>{formatThousands(item.stargazersCount)}</Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.statistic}>
          <Text style={{ fontWeight: 'bold' }}>{formatThousands(item.forksCount)}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.statistic}>
          <Text style={{ fontWeight: 'bold' }}>{formatThousands(item.reviewCount)}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.statistic}>
          <Text style={{ fontWeight: 'bold' }}>{formatThousands(item.ratingAverage)}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
