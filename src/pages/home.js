import html from 'choo/html'

export default (state, prev, send) => html`
  <main>
    <h1>iRail!</h1>
    <ul>${state.stations.map((station) => html`<li><a href="${station.id.split('.')[2]}">${station.name}</a></li>`)}</ul>
  </main>
`
