window.onscroll=function(){fn_sticky_nav()};var navbar_container=document.getElementById("nav_container"),sticky=navbar_container.offsetTop;function fn_sticky_nav(){window.pageYOffset>sticky?navbar_container.classList.add("sticky"):navbar_container.classList.remove("sticky")}

