import { getPassengers } from './getPassengers';

export async function findPassengers(value, filter) {
  const passengers = await getPassengers();

  return passengers.filter((passenger) => {
    const info = passenger[filter].toLowerCase();

    return info.includes(value.toLowerCase());
  });
}
