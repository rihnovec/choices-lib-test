import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import Choices from 'choices.js'
import 'choices.js/public/assets/styles/choices.min.css'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
  <input
          class="form-control"
          id="choices-text-remove-button"
          type="text"
          value="preset-1,preset-2"
          placeholder="Enter something"
        />
`

setupCounter(document.querySelector('#counter'))

document.addEventListener('DOMContentLoaded', () => {
  const choices = new Choices('#choices-text-remove-button', {
    allowHTML: true,
    delimiter: ',',
    editItems: true,
    maxItemCount: 5,
    removeItemButton: true,
  })
})
