/* Page: station */

import html from 'choo/html'

export default (state, prev, send) => html`
  <main onload=${() => send('requestStation', state.location.params.station)}>
    <a href='/'>back</a>
    <h1>${state.station.name}</h1>
    <small>${state.location.params.station}</small>
  </main>
`
