import axios from 'axios';

const API_KEY = '52500093-745b03fff18f695149292f5ed';

export async function getImagesByQuery(query, page = 1) {
  const res = await axios.get('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 15,
    },
  });
  return res.data;
}
