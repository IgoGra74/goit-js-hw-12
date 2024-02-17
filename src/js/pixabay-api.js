import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { perPage, currentPage } from '../main.js';

export default async function getImage(query) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const API_KEY = '42099926-52a1046a87902a6e56a7e135a';
  const url = `${BASE_URL}${END_POINT}`;

  const option = {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: currentPage,
      per_page: perPage,
    },
  };
  try {
    const response = await axios.get(url, option);

    return response.data;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      titleColor: '#FFFFFF',
      message: 'An error occurred while fetching data. Please try again.',
      position: 'topRight',
      messageColor: '#FFFFFF',
      backgroundColor: '#FF6347',
      iconUrl: null,
    });
    console.error('Error fetching data:', error);
    throw error;
  }
}
