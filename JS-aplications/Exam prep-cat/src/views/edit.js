import { html } from "../lib.js";

export async function editView(ctx){
    ctx.render(editTemplate())
}

const editTemplate=()=>html`<p>template Here</p>`
