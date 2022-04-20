const url =
  'https://raw.githubusercontent.com/altkraft/for-applicants/master/frontend/titanic/passengers.json';

export async function getPassengers() {
  try {
    const response = await fetch(url);
    const passengers = await response.json();
    const noInfo = 'No info';

    return passengers.map((passenger) => {
      const survived = passenger.survived ? 'SURVIVED' : 'NOT SURVIVED';

      return {
        name: passenger.name || noInfo,
        gender: passenger.gender || noInfo,
        survived: survived,
        age: `${passenger.age.toFixed()}y` || noInfo,
        ticket: passenger.ticket || noInfo,
        cabin: passenger.cabin || noInfo,
      };
    });
  } catch (err) {
    console.log(err.message);
  }
}
