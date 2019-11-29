console.log("a")
var scripts = Array.prototype.slice.call( document.querySelectorAll('script'));
console.log(scripts);
function isMalicious(script) {
    let src = script.src;
    if (src.includes("conflooses")) {
        console.log(script)
        script.src = ""
    }
}

scripts.forEach(script => {

    isMalicious(script);
});
