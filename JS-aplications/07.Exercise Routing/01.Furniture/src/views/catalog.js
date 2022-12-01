import {html, render} from '../../../node_modules/lit-html/lit-html.js'

export async function catalogView(ctx){
    const test = html`<p>hi</p>`
    ctx.render(test);
    // console.log('catalog');
}