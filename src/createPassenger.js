export function createPassenger(passenger) {
  const passengerItem = document.createElement('div');
  const primaryInfo = document.createElement('div');
  const secondaryInfo = document.createElement('div');

  passengerItem.classList.add('passenger');
  primaryInfo.classList.add('info', 'primary-info');
  secondaryInfo.classList.add('info', 'secondary-info');

  for (let info in passenger) {
    const div = document.createElement('div');

    div.classList.add(info);
    div.textContent = passenger[info];

    if (info === 'ticket' || info === 'cabin') {
      secondaryInfo.append(div);
    } else {
      primaryInfo.append(div);
    }
  }

  passengerItem.append(primaryInfo, secondaryInfo);

  return passengerItem;
}
