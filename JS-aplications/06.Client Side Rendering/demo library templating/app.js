import { html, render } from 'https://unpkg.com/lit-html?module';

// const p=document.createElement('p');
// p.textContent='hello'

// render(p,document.querySelector('main'))

const p =(name,className) => html`<p class=${className}>Hello ${name}!</p>`;//това е arrow f. и тя не се хойства
const input = (disabled)=>html`<input ?disabled=${disabled}>`

render(p("world",'greeting'/*className*/), document.querySelector('main'));
render(p("Peter",'content'/*className*/), document.querySelector('nav'));
