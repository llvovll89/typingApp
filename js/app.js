const titleClick = document.querySelector('.title');
const hidetemp = document.querySelector('.hide-temp');

titleClick.addEventListener('click', (e)=> {
    e.preventDefault();
    hidetemp.style.display = "none";
})