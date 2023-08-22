//// Scroll after click on contact me button
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}


///// Open TAbs 
function openTab(evt, tabName) {
    var i, tabcontent, tab;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the 'active' class from all tab buttons
    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
        tab[i].className = tab[i].className.replace(" active", "");
    }

    // Show the selected tab content and set the button as 'active'
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// By default, display the first tab
document.getElementById("Category1").style.display = "block";
document.getElementById("Category3").style.display = "block";
document.getElementById("Category1-internship").style.display = "block";
document.getElementById("Category1-activities-arkx").style.display = "block";



