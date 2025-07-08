import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { searchRestaurants } from '../utils/Api';

export default function ResultsScreen({ route }) {
  const { foodType, city } = route.params;
  const [loading, setLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await searchRestaurants(foodType, city);
        setRestaurants(data);
      } catch (err) {
        setError('Error al buscar restaurantes.');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [foodType, city]);

  if (loading)
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#FF4081" />
        <Text style={styles.loadingText}>Cargando resultados...</Text>
      </View>
    );

  if (error)
    return (
      <View style={styles.messageContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );

  if (restaurants.length === 0)
    return (
      <View style={styles.messageContainer}>
        <Text style={styles.noResultsText}>No se encontraron resultados.</Text>
      </View>
    );

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {restaurants.map((r, index) => (
        <View key={r.fsq_id || index} style={styles.card}>
          <Text style={styles.name}>{r.name}</Text>

          {/* Verificación de fotos */}
          {r.photos && r.photos.length > 0 && r.photos[0].prefix && r.photos[0].suffix ? (
            <Image
              source={{ uri: `${r.photos[0].prefix}original${r.photos[0].suffix}` }}
              style={styles.image}
              resizeMode="cover"
            />
          ) : r.categories && r.categories[0] && r.categories[0].icon ? (
            <Image
              source={{
                uri: `${r.categories[0].icon.prefix}88${r.categories[0].icon.suffix}`,
              }}
              style={styles.image}
              resizeMode="cover"
            />
          ) : (
            <Text style={styles.noImageText}>Imagen no disponible</Text>
          )}

          <Text style={styles.info}>Distancia: {r.distance} metros</Text>
          <Text style={styles.info}>
            Dirección: {r.location?.formatted_address || 'No disponible'}
          </Text>
          <Text style={styles.info}>Teléfono: {r.tel || 'No disponible'}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 15,
    paddingBottom: 30,
    backgroundColor: '#fce4ec', // Rosa claro de fondo
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
    color: '#D5006D', // Rosa fuerte
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 10,
  },
  noImageText: {
    fontSize: 16,
    color: '#D5006D', // Rosa fuerte
    marginBottom: 10,
  },
  info: {
    fontSize: 14,
    color: '#D5006D', // Rosa fuerte
    marginBottom: 4,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fce4ec', // Rosa claro de fondo
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#FF4081', // Rosa fuerte para el texto de carga
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: '#D5006D', // Rosa fuerte
  },
  noResultsText: {
    fontSize: 18,
    color: '#D5006D', // Rosa fuerte
  },
});
