import { html, nothing } from "../lib.js";

export async function homePageView(ctx) {

    ctx.render(homePageTemplate());

}

const homePageTemplate = () => html`${nothing}`



