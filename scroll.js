// Import knappen
const goUpBtn = document.getElementById("goUpBtn");


// Når man trykker på knappen vil den gå helt opp til 0 på siden.
goUpBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
};