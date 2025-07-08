const API_KEY = 'BAXXHT0MFVEQVVCFX0ZDMK2IHUWXSRX5X4TZ2JTIAS00SFOD'; // Tu API Key real sin "Bearer"

export async function searchRestaurants(query, location) {
  const url = `https://places-api.foursquare.com/places/search?query=${encodeURIComponent(query)}&near=${encodeURIComponent(location)}&limit=10`;

  try {
    const response = await fetch(url, {
      headers: {
        'accept': 'application/json',
        'authorization': `Bearer ${API_KEY}`,
        'X-Places-Api-Version': '2025-06-17'
      }
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error al buscar restaurantes:', error);
    throw error;
  }
}

// Función para obtener la URL de la imagen usando el photoId
async function fetchImage(photoId) {
  const photoUrl = `https://api.foursquare.com/v2/photos/${photoId}?oauth_token=${API_KEY}&v=20230707`;
  try {
    const response = await fetch(photoUrl);
    const data = await response.json();
    if (data.response && data.response.photo) {
      const imageUrl = `${data.response.photo.prefix}original${data.response.photo.suffix}`;
      return imageUrl;
    }
    throw new Error('Foto no encontrada');
  } catch (error) {
    console.error('Error al obtener la imagen:', error);
    return null;
  }
}
