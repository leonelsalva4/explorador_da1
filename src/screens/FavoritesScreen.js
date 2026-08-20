import { useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { FavoritesContext } from '../context/FavoritesContext';
import styles from '../styles';

export default function FavoritesScreen({ navigation }) {
  const { favoritos } = useContext(FavoritesContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favoritos</Text>

      {favoritos.length === 0 ? (
        <View style={styles.centered}>
          <Text style={styles.emptyText}>Todavía no marcaste favoritos</Text>
        </View>
      ) : (
        <FlatList
          data={favoritos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate('Detail', { id: item.id })}
            >
              <Image source={{ uri: item.image }} style={styles.thumbnail} />
              <View style={styles.cardInfo}>
                <Text style={styles.cardName}>{item.name}</Text>
                <Text style={styles.cardSubtitle}>{item.species}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}
