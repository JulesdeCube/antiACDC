function validateStorage() {
  console.log("storage complite");
}

function gotKitten(item) {
  console.log(`${item.whiteList.name} has ${item.whiteList.eyeCount} eyes`);
}


function onError(error) {
  console.error(error)
}


let WhiteList = {
  urls: [],
  pull : calback => {
    get("whiteList", whiteList => {
      if (Array.isArray(whiteList)) {
        WhiteList.urls = whiteList;
      }
      if (typeof calback === "function")calback();
    });
  },
  push : calback => {
    set("whiteList",WhiteList.urls, calback);
  },
  add : (url) => {
    if (!WhiteList.urls.includes(url)) WhiteList.urls.push(url);
  },
  remove : (url) => {
    for (let i = 0; i < WhiteList.urls.length; i++) {
      if (WhiteList.urls[i] === url) {
        WhiteList.urls.splice(i, 1);
        i--;
      }
    }
  },
  clear : calback => {
    WhiteList.urls = [];
    WhiteList.push(calback);
  },
  isWhiteListed : url => {
    for (let i = 0; i < WhiteList.urls.length; i++) {
      const urlI = WhiteList.urls[i];
      if (url.includes(urlI)) return true; 
    }
    return false;
  }
}



function set (prop ,value, calback) {
  let obj = {};
  obj[prop] = value;
  browser.storage.local.set(obj)
  .then(calback, onError);
}


function get(prop, calback) {
  browser.storage.local.get(prop)
  .then(value => {
    calback(value[prop])
  }, onError);
}

function clear(calback) {
  browser.storage.local.clear()
  .then(calback, onError);
}