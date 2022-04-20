const select = document.querySelector('.select');

export function createSelectOptions(options) {
  options.forEach((option) => {
    const optText = `Search by ${option}`;
    const opt = new Option(optText, option);

    select.append(opt);
  });
}
