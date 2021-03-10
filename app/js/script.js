// const btnHamburger = document.querySelector('#btnHamburger');
// // const body = document.querySelector('body');
// const header = document.querySelector('.header');
// const fadeElems = document.querySelectorAll('.has-fade');

// btnHamburger.addEventListener('click', function() {
//     console.log('click hamburger');

//     if (header.classList.contains('open')) {
//         // body.classList.remove('no-scroll');
//         header.classList.remove('open');
//         fadeElems.forEach(function(element) {
//             element.classList.remove('fade-in');
//             element.classList.add('fade-out');
//         });

//     } else {
//         // body.classList.add('no-scroll');
//         header.classList.add('open');
//         fadeElems.forEach(function(element) {
//             element.classList.remove('fade-out');
//             element.classList.add('fade-in');
//         });
//     }
// });


const btn = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const fadeElm = document.querySelectorAll('.has-fade');

btn.addEventListener('click', function() {
    console.log('open hamburger');

    if (header.classList.contains('open')) {
        header.classList.remove('open');
        fadeElm.forEach(element => {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    } else {
        header.classList.add('open');
        fadeElm.forEach(element => {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        })
    }
});