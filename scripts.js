const btnChangeTheme = document.getElementById("change-theme");
let isLight = getThemeFromStorage();

if (isLight) {
  toggleTheme();
}

function getThemeFromStorage() {
  const isLightTheme = parseInt(localStorage.getItem('isLightTheme'));
  
  return isLightTheme === 1 ? true : false;
}


function changeTheme() {
  isLight = !isLight;
  localStorage.setItem('isLightTheme', String(isLight ? 1 : 0));
  
  toggleTheme();
}

function toggleTheme() {
  btnChangeTheme.innerHTML = isLight ? '🌑' : '☀️';

  document.body.classList.toggle('light');
  document.getElementById("name").classList.toggle('light');
  document.getElementById('title').classList.toggle('light');
  const links = document.getElementsByClassName('link');

  for (let i = 0; i < links.length; i++) {
    links[i].classList.toggle('light');  
  }
}

btnChangeTheme.addEventListener('click', changeTheme);
