rules = Array.from(document.querySelectorAll("input"));

WhiteList.pull(() => {
  console.log(WhiteList.urls);
  
})

document.getElementById("diableAll").addEventListener("click",() => {
  rules.forEach(rule => {
    rule.checked = false;
  });
});

document.getElementById("save").addEventListener("click", () => {
  WhiteList.clear(() => {
    rules.forEach(rule => {
      if (rule.checked) {
        WhiteList.add(rule.name);
      }
    });
    WhiteList.push(() => {
      console.log(browser.tabs.reload());
      
    });
  })
})

WhiteList.pull(() => {
  WhiteList.urls.forEach(url => {
    document.getElementById(url).checked = true;
  });
})