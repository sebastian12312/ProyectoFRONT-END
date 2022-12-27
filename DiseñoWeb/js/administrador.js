function openNav() {
    document.getElementById("barra_lateral_header_admin").style.width = "250px";
    document.getElementById("header_administrador").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.1)";
  }
  
  function closeNav() {
    document.getElementById("barra_lateral_header_admin").style.width = "0";
    document.getElementById("header_administrador").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }