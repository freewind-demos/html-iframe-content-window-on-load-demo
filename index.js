const mainIFrame = document.getElementById('main');
let button = document.getElementById('button');

button.addEventListener('click', () => {
    mainIFrame.src = './inner3.html';
})

mainIFrame.addEventListener('load', (event) => {
    console.log("### iframe.load", event.target);
})

mainIFrame.contentWindow.addEventListener('load', (event) => {
    console.log("### contentWindow.load", event.target.body.innerHTML);
})


setTimeout(() => {

    mainIFrame.src = './inner2.html'
}, 3000)

// console.log("### mainIFrame?.contentWindow", mainIFrame?.contentWindow.document);
//
// setTimeout(() => {
//     // mainIFrame?.contentWindow.document.addEventListener('DOMContentLoaded', (event) => {
//     //     console.log('DOM fully loaded and parsed');
//     // });
//     mainIFrame.contentWindow.document.onreadystatechange = function(e)
//     {
//         console.log('### document.readyState', document.readyState)
//         // if (document.readyState === 'loading')
//         // {
//         //     //dom is ready, window.onload fires later
//         // }
//     };
// }, 0)
//
//
