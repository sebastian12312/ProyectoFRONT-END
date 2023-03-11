
/*tipo de thema*/
const  cambio_theme = document.getElementById('cambio-theme');
const $header = document.getElementById('header');


cambio_theme.addEventListener('click',()=>{
  if(sessionStorage.getItem('buttonClicked' === 'true')){
    cambio_theme.classList.toggle('desactive');
    $header.classList.toggle('ThemeLight');

  } else {
    cambio_theme.classList.toggle('active');
    $header.classList.toggle('Themedark');
    sessionStorage.setItem('buttonClicked', 'true');

  }
});

if(sessionStorage.getItem('buttonClicked') === 'true' ){
  cambio_theme.classList.toggle('active');
  $header.classList.toggle('Themedark');

} 