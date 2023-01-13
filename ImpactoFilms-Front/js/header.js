const variables = document.querySelectorAll('[data-barra]');
const barra_lateral_header =document.getElementById('barra_lateral_header');
const contenedor_barra_lateral_header =document.getElementById('contenedor_barra_lateral_header');
for(let respuesta of variables){
    respuesta.addEventListener('click',(e)=>{
        const atributo = respuesta.getAttribute('data-barra');
        if(atributo === 'AbrirNoUsuario'){
            barra_lateral_header.classList.add('AbrirBarra');
            contenedor_barra_lateral_header.classList.add('AnimacionOpenBar');
            barra_lateral_header.classList.remove('CerrarBarra');
            contenedor_barra_lateral_header.classList.remove('AnimacionCloseBar');
        }else if(atributo === 'CerrarNoUsuario'){
            barra_lateral_header.classList.add('CerrarBarra');
            contenedor_barra_lateral_header.classList.add('AnimacionCloseBar');
            barra_lateral_header.classList.remove('AbrirBarra');
            contenedor_barra_lateral_header.classList.remove('AnimacionOpenBar');
        }                                                
    })
}
barra_lateral_header.addEventListener('click',(e)=>{
    if (e.target === barra_lateral_header) {
        barra_lateral_header.classList.remove('AbrirBarra');
      }
})