// nav items event

const navItems = document.querySelectorAll(".nav-items");
const gradientItems = document.querySelectorAll(".gradient");
const cardItems = document.querySelectorAll(".card")

const menuElement = document.getElementById("burger");
const crossElement = document.getElementById("cross")
const navElement = document.getElementById("nav-mob");

const upBtn = document.getElementById("upbtn");

upBtn.addEventListener("click",() =>{
    window.scrollTo(top = 0, behaviour = 'smooth')
})

window.addEventListener("scroll",() =>{
    if(window.pageYOffset > 200){
        upBtn.classList.remove("hidden");
    }else{
        upBtn.classList.add("hidden");
    }
})


menuElement.addEventListener("click",() =>{
    menuElement.classList.add("hidden");
    crossElement.classList.remove("hidden");
    navElement.classList.remove("hidden");
})

crossElement.addEventListener("click",() =>{
    menuElement.classList.remove("hidden");
    crossElement.classList.add("hidden");
    navElement.classList.add("hidden");
})
navElement.addEventListener("click",() =>{
    menuElement.classList.remove("hidden");
    crossElement.classList.add("hidden");
    navElement.classList.add("hidden");
})




navItems.forEach(items =>{
    items.addEventListener("mouseover",() =>{
        items.style.borderBottom = "3px solid #530400";
        items.style.borderRadius = "10px"
    });
    items.addEventListener("mouseout",() =>{
        items.style.borderBottom = "";
    });
})


cardItems.forEach(car =>{

    const gradientItems = car.querySelectorAll(".gradient");

    car.addEventListener("mouseover",() =>{
        gradientItems.forEach(item =>{
        item.style.opacity ="1"
        }) 
        car.style.transform = "scale(1.07)";
        car.style.transition = "all 0.3s ease";
        car.style.boxShadow = "0px 0px 20px rgba(254, 195, 0, 0.9)";
})
    car.addEventListener("mouseout",() =>{
        gradientItems.forEach(item =>{
            item.style.opacity ="0"
        }) 
        car.style.transform = "scale(1)";
        car.style.transition = "all 0.3s ease";
        car.style.boxShadow = "0px 0px 0px rgba(254, 195, 0, 0.0)";



})
})
