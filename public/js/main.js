const form = document.querySelector('#form');
const result = document.querySelector('#result');
form.addEventListener('submit', event => {
  event.preventDefault();

  const input = document.querySelector('#input_form');
  fetch('/new', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      url: input.value,
    })
  })
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      while (result.hasChildNodes()) {
        result.removeChild(result.lastChild);
      }

      result.insertAdjacentHTML('afterbegin', `
          <a target="_blank" class="short-url" rel="noopener" href="/${data.short_id}">
            ${location.origin}/${data.short_id}
          </a>
      `)
    })
    .catch(console.error)
});