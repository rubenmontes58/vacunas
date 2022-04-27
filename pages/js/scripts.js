/*!
* Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});
function calculaEdad(nombre, diaNacimiento, mesNacimiento, anioNacimiento) 
{
  var nombre=document.getElementById("nombre").value;
  var diaNacimiento=document.getElementById("dia").value;
  var mesNacimiento=document.getElementById("mes").value;
  var anioNacimiento =document.getElementById("anio").value;
  var salida=document.getElementById("salida");
  
        this.nombre=nombre;
        this.diaNacimiento=diaNacimiento;
        this.mesNacimiento=mesNacimiento;
        this.anioNacimiento=anioNacimiento;
    
        this.edad=function edad()
        {
           var calcula=0;
           var objeto=new Date();
           var dia=objeto.getDate();
           var mes= objeto.getMonth()+1;
           var hoy=objeto.getFullYear();

                if(mes<this.mesNacimiento||(mes==this.mesNacimiento&&dia<this.dia))
                {
                  return calcula=parseInt(hoy-this.anioNacimiento)-1; 
                }
                else
                {
                   return calcula=parseInt(hoy-this.anioNacimiento);  
                }
          };
    salida.innerHTML= "La edad actual de "+nombre+" es  "+this.edad()+".";
}
