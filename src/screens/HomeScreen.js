import { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { obtenerPersonajes } from '../api/rickAndMorty';
import styles from '../styles';

const ESTADOS = [
  { label: 'Todos', value: '' },
  { label: 'Vivo', value: 'alive' },
  { label: 'Muerto', value: 'dead' },
  { label: 'Desconocido', value: 'unknown' },
];

export default function HomeScreen({ navigation }) {
  const [busqueda, setBusqueda] = useState('');
  const [estado, setEstado] = useState('');
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      buscar();
    }, 500);

    return () => clearTimeout(timer);
  }, [busqueda, estado]);

  function buscar() {
    setCargando(true);
    setError(null);

    obtenerPersonajes(busqueda, estado)
      .then((resultado) => setPersonajes(resultado))
      .catch((err) => {
        setError(err.message);
        setPersonajes([]);
      })
      .finally(() => setCargando(false));
  }

  let contenido;

  if (cargando) {
    contenido = (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#3a6ea5" />
      </View>
    );
  } else if (error) {
    contenido = (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  } else if (personajes.length === 0) {
    contenido = (
      <View style={styles.centered}>
        <Text style={styles.emptyText}>No se encontraron personajes</Text>
      </View>
    );
  } else {
    contenido = (
      <FlatList
        data={personajes}
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
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explorador</Text>

      <TextInput
        style={styles.input}
        placeholder="Buscar por nombre"
        value={busqueda}
        onChangeText={setBusqueda}
      />

      <View style={styles.filterRow}>
        {ESTADOS.map((opcion) => (
          <TouchableOpacity
            key={opcion.value}
            style={[styles.filterButton, estado === opcion.value && styles.filterButtonActive]}
            onPress={() => setEstado(opcion.value)}
          >
            <Text style={[styles.filterText, estado === opcion.value && styles.filterTextActive]}>
              {opcion.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {contenido}
    </View>
  );
}
