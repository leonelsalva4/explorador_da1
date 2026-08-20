import { useContext, useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { obtenerPersonajePorId } from '../api/rickAndMorty';
import { FavoritesContext } from '../context/FavoritesContext';
import styles from '../styles';

export default function DetailScreen({ route }) {
  const id = route.params.id;
  const [personaje, setPersonaje] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const { esFavorito, alternarFavorito } = useContext(FavoritesContext);

  useEffect(() => {
    setCargando(true);
    obtenerPersonajePorId(id)
      .then((datos) => setPersonaje(datos))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, [id]);

  if (cargando) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#3a6ea5" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  const favorito = esFavorito(personaje.id);

  return (
    <ScrollView style={styles.detailContainer}>
      <Image source={{ uri: personaje.image }} style={styles.image} />

      <View style={styles.detailContent}>
        <Text style={styles.name}>{personaje.name}</Text>

        <TouchableOpacity
          style={[styles.favoriteButton, favorito && styles.favoriteButtonActive]}
          onPress={() => alternarFavorito(personaje)}
        >
          <Text style={[styles.favoriteButtonText, favorito && styles.favoriteButtonTextActive]}>
            {favorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          </Text>
        </TouchableOpacity>

        <View style={styles.row}>
          <Text style={styles.label}>Estado</Text>
          <Text style={styles.value}>{personaje.status}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Especie</Text>
          <Text style={styles.value}>{personaje.species}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Género</Text>
          <Text style={styles.value}>{personaje.gender}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Origen</Text>
          <Text style={styles.value}>{personaje.origin.name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Última ubicación</Text>
          <Text style={styles.value}>{personaje.location.name}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
