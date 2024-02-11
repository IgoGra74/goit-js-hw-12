import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  formSearch: document.querySelector('.form-inline'),
  galleryContainer: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  btnLoadMore: document.querySelector('.button'),
  firstGalleryItem: document.querySelector('.gallery-item'),
};
let query = 'igor';
let currentPage = 1;
let perPage = 15;
let totalPages = 0;

refs.formSearch.addEventListener('submit', onFormSubmit);

const lightbox = new SimpleLightbox('.gallery a', {});

async function onFormSubmit(event) {
  event.preventDefault();

  query = event.target.elements.query.value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Caution',
      titleColor: '#FFFFFF',
      message: 'Please enter text to search',
      position: 'topRight',
      messageColor: '#FFFFFF',
      backgroundColor: '#4169E1',
      iconUrl: null,
    });
    return;
  }
  refs.galleryContainer.innerHTML = '';
  showSpinner();

  currentPage = 1;

  try {
    const data = await getImage(query);
    totalPages = data.totalHits;

    if (Array.isArray(data.hits) && data.hits.length > 0) {
      renderImage(data.hits);

      lightbox.refresh();
    } else {
      iziToast.warning({
        titleColor: '#FFFFFF',
        message:
          'Sorry, there are no images matching your search query. Please try again.',
        messageSize: '16px',
        position: 'topRight',
        messageColor: '#FFFFFF',
        backgroundColor: '#EF4040',
        iconUrl: null,
      });
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    iziToast.error({
      title: 'Error',
      titleColor: '#FFFFFF',
      message: 'An error occurred while fetching data. Please try again.',
      position: 'topRight',
      messageColor: '#FFFFFF',
      backgroundColor: '#FF6347',
      iconUrl: null,
    });
  } finally {
    event.target.reset();
    hideSpinner();
    checkBtnStatus();
  }
}

async function getImage(query) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api';
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

refs.btnLoadMore.addEventListener('click', onLoadMoreClick);

refs.btnLoadMore.addEventListener('click', onLoadMoreClick);

async function onLoadMoreClick() {
  showSpinner();

  currentPage += 1;

  const data = await getImage(query);

  renderImage(data.hits);

  checkBtnStatus();

  hideSpinner();

  const galleryItemHeight = getGalleryItemHeight();

  window.scrollBy({
    top: galleryItemHeight * 2,
    behavior: 'smooth',
  });
}
function imageTemplate({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
              <img
                class="gallery-image"
                src="${webformatURL}"
                alt="${tags}"
              />
            </a>
            <ul class="data-image">
              <li>
                <div class="data-item">
                  <span class="image-property">Likes</span>
                  <span>${likes}</span>
                </div>
              </li>
              <li>
                <div class="data-item">
                  <span class="image-property">Views</span>
                  <span>${views}</span>
                </div>
              </li>
              <li>
                <div class="data-item">
                  <span class="image-property">Comments</span>
                  <span>${comments}</span>
                </div>
              </li>
              <li>
                <div class="data-item">
                  <span class="image-property">Downloads</span>
                  <span>${downloads}</span>
              </div>
              </li>
            </ul>
          </li>`;
}

function imagesTemplate(hits) {
  return hits.map(imageTemplate).join('');
}

function renderImage(hits) {
  const markup = imagesTemplate(hits);
  refs.galleryContainer.insertAdjacentHTML('beforeend', markup);
}

function checkBtnStatus() {
  const maxPage = Math.ceil(totalPages / perPage);
  const isLastPage = maxPage <= currentPage;
  if (isLastPage) {
    hideBtnLodMore();
  } else {
    showBtnLodMore();
  }
}

function showSpinner() {
  refs.loader.classList.remove('hidden');
}

function showBtnLodMore() {
  refs.btnLoadMore.classList.remove('hidden');
}

function hideBtnLodMore() {
  refs.btnLoadMore.classList.add('hidden');
}

function hideSpinner() {
  refs.loader.classList.add('hidden');
}
function getGalleryItemHeight() {
  if (refs.firstGalleryItem) {
    const { height } = refs.firstGalleryItem.getBoundingClientRect();
    return height;
  }

  return 0;
}
