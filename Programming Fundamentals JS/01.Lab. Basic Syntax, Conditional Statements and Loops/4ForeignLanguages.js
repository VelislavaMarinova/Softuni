function foreignLanguages(counntry) {
    switch (counntry) {
        case "England":
        case 'USA': console.log("English");
            break;
        case 'Spain':
        case 'Argentina':
        case 'Mexico': console.log("Spanish");break;
        default: console.log("unknown");break;
    }
}
//foreignLanguages("USA")
//foreignLanguages('Germany')
//foreignLanguages('Argentina')
foreignLanguages('Mexico')