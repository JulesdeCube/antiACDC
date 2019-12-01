WhiteList.pull(() => {
    browser.storage.onChanged.addListener((changes, area) => {
        if (area === "local" &&typeof changes.whiteList !== "undefined") {
            WhiteList.pull();
        }
    });
    

    browser.webRequest.onBeforeRequest.addListener(function(details) {
        
        if (isMalicious(details.url)) {
            
            if (WhiteList.isWhiteListed(details.url)) {
                console.log(`file whiteList: ${details.url}`);
            } else {
                console.log(`file block: ${details.url}`);
                return { cancel : true };    
            }
        }    
    }, {
        urls: ['*://acdc.epita.fr/*']
    }, ['blocking']);    
})

