const main = document.querySelector('#main');
const header = document.querySelector('#header');
const footer = document.querySelector('#footer');

function fixPage() {
    main.style.height = (window.innerHeight - header.offsetHeight) - footer.offsetHeight + 'px';
};

document.addEventListener('DOMContentLoaded', fixPage);
