// nav items event

const navItems = document.querySelectorAll(".nav-items");



navItems.forEach(items =>{
    items.addEventListener("mouseover",() =>{
        items.style.borderBottom = "3px solid #530400";
        items.style.borderRadius = "10px"
    });
    items.addEventListener("mouseout",() =>{
        items.style.borderBottom = "";
    });
})