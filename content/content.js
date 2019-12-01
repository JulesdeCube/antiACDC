scripts = Array.from(document.getElementsByTagName("script"));
srcs = []
scripts.forEach(script => {
  if (isMalicious(script.src)) {
    srcs.push(script.src);
  }
});

WhiteList.pull(() => {
  WhiteList.urls.forEach(cf => {
    if (!isLoad(cf)) addCf(cf)
  });
});

function isLoad(cf) {
  for (let i = 0; i < srcs.length; i++) {
    const src = srcs[i];
    if (src.includes(cf)) return true;
  }
  return false;
}

function addCf(cf) {
  let script = document.createElement("script");
  script.src = `: https://acdc.epita.fr/media/conflooses/js/${cf}.js`
  let stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.type ="text/css";
  stylesheet.href = `: https://acdc.epita.fr/media/conflooses/css/${cf}.css`
  document.head.appendChild(stylesheet);
  document.head.appendChild(script);
}