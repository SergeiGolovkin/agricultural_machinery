window.addEventListener("DOMContentLoaded", function(){
    const tabs = document.querySelectorAll(".button_controls button");

    tabs.forEach(function(tab){
        const parentTabbar = tab.closest(".tabbar");

        tab.addEventListener("click", function(event){

            parentTabbar.querySelectorAll(".button_controls button").forEach(function(otherTab){
                otherTab.classList.remove("button_main_color");
            });

            tab.classList.add("button_main_color");

            parentTabbar.querySelectorAll(".tabor_class").forEach(function(content){
                content.classList.remove("visible")
            });

            const activeTab = tab.getAttribute("data-tab");
            document.getElementById(activeTab).classList.add("visible");
        });
    });
});
window.addEventListener("DOMContentLoaded", function() {

    const navMenuButton = document.querySelector("#nav-menu-open");

    navMenuButton.addEventListener("click", function(){
        const menu = document.querySelector(".main_mobile");
        menu.classList.remove("vision");
    });


    window.addEventListener("click", function(event) {
        if(event.target.closest("#nav-menu-open")) {
            return;
        };
        const menu = document.querySelector(".main_mobile");
        menu.classList.add("vision");
    });

});
