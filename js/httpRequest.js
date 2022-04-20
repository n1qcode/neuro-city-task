'use strict'

const btnGet = document.querySelector('.btn-get');

const url = "https://reqres.in/api/users";

btnGet.addEventListener('click', () => {
    (async () => await axios(url).then(console.log).catch(console.log))();
})


