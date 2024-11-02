import { getHeroData } from "./hero/hero";

export const generarContextoDePagina = (page)=>{
    console.log('page', page);
    const contextObject = {
    };
    let pageObject = {}
    switch(page){
        case '/gallery.html':
            pageObject = getGalleryData();
            break;
        case '/index.html':
            pageObject = getHeroData();
            break;
        default:
            pageObject = {};
    }
    return {
        ...contextObject,
        ...pageObject
    }
}