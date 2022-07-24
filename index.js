const mainIFrame = document.getElementById('main');
const button = document.getElementById('button');

mainIFrame.contentWindow.myValue = 111;

button.addEventListener('click', () => {
    mainIFrame.src = './inner2.html'
})

mainIFrame.addEventListener('load', (event) => {
    console.log("### iframe.load", event.target);
})

mainIFrame.contentWindow.addEventListener('load', (event) => {
    console.log("### contentWindow.load1", {html: event.target.body.outerHTML});
})

let www = null;
setInterval(() => {
    const newWin = mainIFrame.contentWindow
    console.log("### mainIFrame.contentWindow.myValue", mainIFrame.contentWindow.myValue)
    if (www === null) {
        www = newWin;
        return;
    }
    if (newWin !== www) {
        console.log("### contentWindow is changed");
    } else {
        console.log('### contentWindow is same');
    }

}, 1000)