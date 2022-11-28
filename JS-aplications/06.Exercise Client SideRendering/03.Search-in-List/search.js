import { html, render } from '../node_modules/lit-html/lit-html.js';
import {towns} from './towns.js';

const divTowns = document.getElementById('towns')
const main = document.querySelector('body');


const searchTemplate=(towns,input)=>html`
<article>
<div id="towns">
    <ul>
        ${towns.map(t=>allTownsTemplate(t,input))};
    </ul>
</div>
<input type="text" id="searchText" />
<button @click = ${search}>Search</button>
<div id="result">${countMatches(towns,input)}</div>
</article>`
const allTownsTemplate = (town,input)=>html`
<li class = ${(input && town.toLowerCase().includes(input.toLowerCase())) ? 'active':''}>${town}</li>`

update()
function update(input =''){
   const res = searchTemplate(towns,input);
   render(res,main)
}
function search() {
   const input =  document.getElementById('searchText').value;
//  const input =  document.getElementById('searchText').value;
 update(input)

}
function countMatches(towns, input){
const matches = towns.filter(t=>input && t.toLocaleLowerCase().includes(input.toLowerCase())).length ;
return `${matches} matches found`  ;
}
