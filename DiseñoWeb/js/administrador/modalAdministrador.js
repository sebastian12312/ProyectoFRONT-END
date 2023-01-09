// const CloseModalAdministrador = document.getElementById('CloseModalAdministrador');
// const OpenModalAdministrador = document.getElementById('OpenModalAdministrador');
const barra_lateral_administrador = document.getElementById('barra_lateral_administrador');
// OpenModalAdministrador.addEventListener("click",()=>{
//     barra_lateral_administrador.classList.add('OpenBarra');
    
// });
// CloseModalAdministrador.addEventListener("click",()=>{
//     barra_lateral_administrador.classList.remove('OpenBarra');
    
    
// });

const Open = document.querySelector('.Open');
const close = document.querySelector('.close');
Open.addEventListener("click",()=>{
    barra_lateral_administrador.classList.add('OpenBarra');
    
});
close.addEventListener("click",()=>{
    barra_lateral_administrador.classList.remove('OpenBarra');        
});
