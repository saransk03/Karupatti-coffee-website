// nav items event

const navItems = document.querySelectorAll(".nav-items");
const gradientItems = document.querySelectorAll(".gradient");
const cardItems = document.querySelectorAll(".card")



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
