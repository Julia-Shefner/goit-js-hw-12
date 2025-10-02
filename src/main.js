import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  loadMoreBtn,
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
let page = 1;
let query = '';

form.addEventListener('submit', handlerSubmit);
loadMoreBtn.addEventListener('click', onLoadMore);

function handlerSubmit(event) {
  event.preventDefault();
  query = event.target.elements['search-text'].value.trim();
  page = 1;
  if (!query.length) {
    iziToast.error({
      position: 'topRight',
      progressBar: false,
      timeout: 3000,
      message: 'Sorry, you need to put key for search!',
    });
    return;
  }
  clearGallery();
  showLoader();
  getImagesByQuery(query, page)
    .then(res => {
      if (!res.hits.length) {
        iziToast.error({
          position: 'topRight',
          progressBar: false,
          timeout: 3000,
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      createGallery(res.hits);
      showLoadMoreButton();
    })
    .catch(error => {
      iziToast.error({
        position: 'topRight',
        progressBar: false,
        timeout: 3000,
        message: `${error.message}`,
      });
    })
    .finally(() => {
      hideLoader();
    });
  form.reset();
}

async function onLoadMore() {
  page += 1;

  try {
    const data = await getImagesByQuery(query, page);
    createGallery(data.hits);

    const card = document.querySelector('.gallery-item');
    const cardHeight = card.getBoundingClientRect().height;
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    const perPage = 15;
    const totalPages = Math.ceil(data.totalHits / perPage);

    if (page >= totalPages) {
      hideLoadMoreButton();
      iziToast.info({
        position: 'topRight',
        progressBar: false,
        timeout: 3000,
        message: "We're sorry, but you've reached the end of search results",
      });
    }
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      progressBar: false,
      timeout: 3000,
      message: `${error.message}`,
    });
  }
}
