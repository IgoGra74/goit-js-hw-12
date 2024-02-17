import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import renderImage from './js/render-functions';
import getImage from './js/pixabay-api';

export const refs = {
  formSearch: document.querySelector('.form-inline'),
  galleryContainer: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  btnLoadMore: document.querySelector('.button'),
  firstGalleryItem: document.querySelector('.gallery-item'),
};

let query = 'igor';
let totalPages = 0;
export let perPage = 15;
export let currentPage = 1;

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

refs.btnLoadMore.addEventListener('click', onLoadMoreClick);

async function onLoadMoreClick() {
  showSpinner();

  currentPage += 1;
  try {
    const data = await getImage(query);

    renderImage(data.hits);

    lightbox.refresh();
  } catch {
    console.error('Error fetching data:', error);

    throw error;
  } finally {
    checkBtnStatus();

    hideSpinner();

    const galleryItemHeight = getGalleryItemHeight();

    window.scrollBy({
      top: galleryItemHeight * 2,
      behavior: 'smooth',
    });
  }
}

function checkBtnStatus() {
  const maxPage = Math.ceil(totalPages / perPage);
  const isLastPage = maxPage <= currentPage;
  if (isLastPage) {
    hideBtnLodMore();
    iziToast.warning({
      titleColor: '#FFFFFF',
      message: "We're sorry, but you've reached the end of search results.",
      messageSize: '16px',
      position: 'topRight',
      messageColor: '#FFFFFF',
      backgroundColor: '#EF4040',
      iconUrl: null,
    });
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
