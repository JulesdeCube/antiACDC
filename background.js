browser.webRequest.onBeforeRequest.addListener(function(details) {
    if (details.url.includes("conflooses")) {
        console.log(`file block: ${details.url}`);
        return { cancel : true };    
    }    
}, {
    urls: ['*://acdc.epita.fr/*']
}, ['blocking']);
