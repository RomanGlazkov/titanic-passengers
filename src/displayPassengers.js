import { createPassenger } from './createPassenger';

const passengersList = document.querySelector('.passengers-list');

export function displayPassengers(passengers, start, end) {
  const displayedPassengers = passengers.slice(start, end);

  displayedPassengers.forEach((passenger) => {
    const passengerItem = createPassenger(passenger);

    passengersList.append(passengerItem);
  });
}
