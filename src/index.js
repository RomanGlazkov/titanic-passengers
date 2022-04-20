import './styles.css';
import { getPassengers } from './getPassengers';
import { displayPassengers } from './displayPassengers';
import { findPassengers } from './findPassengers';
import { createSelectOptions } from './createSelectOptions';
import { debounce } from './debounce';

const passengersList = document.querySelector('.passengers-list');
const searchInput = document.querySelector('.search-input');
const loader = document.querySelector('.loader');
const select = document.querySelector('.select');
let passengers = [];
let start = 0;
let end = 15;

async function setInitialState() {
  passengers = await getPassengers();
  start = 0;
  end = 15;

  displayPassengers(passengers, start, end);
}

async function displayFoundedPassengers(inputValue) {
  passengersList.innerHTML = '';

  if (inputValue.trim() === '') {
    await setInitialState();
  } else {
    passengers = await findPassengers(inputValue, select.value);

    if (passengers.length === 0) {
      passengersList.textContent = 'Nothing to display!';
    }

    start = 0;
    end = 15;

    displayPassengers(passengers, start, end);
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  passengers = await getPassengers();

  const options = Object.keys(passengers[0]);

  createSelectOptions(options);

  loader.hidden = true;

  displayPassengers(passengers, start, end);
});

document.addEventListener('scroll', () => {
  const html = document.documentElement;
  const documentRect = html.getBoundingClientRect();

  if (documentRect.bottom < html.clientHeight + 100) {
    start = end;
    end += 15;
    displayPassengers(passengers, start, end);
  }
});

searchInput.addEventListener(
  'input',
  debounce(async (event) => {
    const { value } = event.target;

    await displayFoundedPassengers(value);
  }, 300)
);

select.addEventListener('change', async () => {
  await displayFoundedPassengers(searchInput.value);
});
