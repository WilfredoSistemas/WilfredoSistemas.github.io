/*añade un evento de clic a un elemento con la clase "barra". Cuando se hace clic,
busca un elemento con la clase "barra-menu" y alterna la clase "active", posiblemente 
para mostrar u ocultar una barra de menú.*/
barra=document.querySelector(".barra");

barra.onclick=function(){
    BarraNavegacion=document.querySelector(".barra-menu");
    BarraNavegacion.classList.toggle("active");
}