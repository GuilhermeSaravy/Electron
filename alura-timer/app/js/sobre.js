const { ipcRenderer, shell } = require('electron');
let linkFechar = document.querySelector('#link-fechar');

linkFechar.addEventListener('click', function () {
    ipcRenderer.send('fechar-sobre')
})

let linkTwitter = document.querySelector('#link-twitter');
linkTwitter.addEventListener('click', function () {
    shell.openExternal("https://www.twitter.com");
})