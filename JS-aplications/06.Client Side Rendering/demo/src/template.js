const placeholderPattern = /%%(.+?)%%/g;

const templates = {};

export async function render(templateName/*html*/, ctx) {//templateName==view=home/catalog/about, ctx={username,items}

    // const response = await fetch(`views/${templateName}.html`);
    // const html =await response.text();//както response.json(), но html е текст
    //ctx ще го получаваме като параметър(аргуент) и ще го преместим в app.js
    // let ctx = {
    //     username,
    //     items
    // }
    const html = await loadTemplate(templateName);//templateName==view=home/catalog/about

    const result = html.replace(placeholderPattern, replacer)

    /*
     let result = html.replace('%%username%%', username)//replace in string(html ===string)
    let result = html.replace('%%username%%', ctx['username']);
    // result = result.replace('%%items%%', items.map(i => `<li>${i}</li>`).join('\n'))
    result = result.replace('%%items%%', ctx['items'].map(i => `<li>${i}</li>`).join('\n'));
    */
    document.querySelector('main').innerHTML = result;


    function replacer(match, name) { //???nb!function replacer(...params){console.log(params)}=>[0: match,1:username/items,2:...3:...]
        
        const value = ctx[name];
        if (value !== undefined) {
            return escapeHtml(value);
        }
        // console.log(name); ==username;items
        return match;

    }
}

async function loadTemplate(name) {//name =templateName==view=home/catalog/about
    if (templates[name] === undefined) {
        const response = await fetch(`views/${name}.html`);
        templates[name] = await response.text();
    }

    return templates[name]
}

function escapeHtml(html){
    return html.toString()//.toString() поради това, че в каталог има масив
    .replaceAll('<','&lt')
    .replaceAll('>','&gt')
    .replaceAll('&','&amp')
}