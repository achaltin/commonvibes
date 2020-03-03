function switchTab(selection,tab){
    // change menu bar selection
    var curSelection = document.getElementsByClassName("active-selection");

    for(var i = 0; i< curSelection.length; i++){
        curSelection[i].classList.add("inactive-selection");
        curSelection[i].classList.remove("active-selection");
    }

    var newSelection = document.getElementById(selection);
    newSelection.classList.add("active-selection");
    newSelection.classList.remove("inactive-selection");
    

    // change displayed section
    var curTab = document.getElementsByClassName("active-tab");

    for(var i = 0; i< curTab.length; i++){
        curTab[i].classList.add("inactive-tab");
        curTab[i].classList.remove("active-tab");
    }

    var newTab = document.getElementById(tab);
    newTab.classList.add("active-tab");
    newTab.classList.remove("inacrive-tab");
}