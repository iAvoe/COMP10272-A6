/*jshint esversion: 6 */
/*jslint devel: true */
/*eslint no-extend-native: ["error", { "exceptions": ["Object"] }]*/
/**
 * Jia-Cheng Gong (JC) - 000758631, 2024
 */
var document; // Rectifying 'document not defined'
var window; // Rectifying 'window not defined'
if (document !== "undefined") {
    // Code that relies on the document object
    document.cookie = 'CookieName=NULL; SameSite=Strict';
}
/**
 * Toggle the display of the description row of experiences table
 * @param {string} id The ID of the element to toggle
 */
function toggleDescription(id) {
    var element = document.getElementById(id);
    if (element) { // Check if the element exists
        if (element.classList.contains('show')) {
            removeClass(element, 'show');
            addClass(element, 'hide');
        }
        else {
            removeClass(element, 'hide');
            addClass(element, 'show');
        }
    }
    else { console.log(`Missing element with ID "${id}". This is normal as these elements are split among multiple htmls`); }
}
/** 
 * Show and hide cards (Credit: https://www.w3schools.com/howto/howto_js_filter_elements.asp)
 * @param {string} cardClass Type of cards to show
 */
function showCards(cardClass) {
    var elements, i;
    elements = document.getElementsByClassName("toFilter"); // console.log(x); PASS
    if (cardClass==="all") { cardClass = ""; }
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i=0; i<elements.length; i++) {
        removeClass(elements[i], "show");
        addClass(elements[i], "hide");
        if (elements[i].className.indexOf(cardClass) > -1) { // Detect if card exists
            removeClass(elements[i], "hide");
            addClass(elements[i], "show");
        }
    }
}
/**
 * Hide all cards
 */
function hideAll() {
    var elements, i;
    elements = document.getElementsByClassName("toFilter"); // console.log(x); PASS
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i=0; i<elements.length; i++) {
        removeClass(elements[i], "show");
        addClass(elements[i], "hide");
    }
}

/**
 * Show and hide cards (Credit: https://www.w3schools.com/howto/howto_js_filter_elements.asp)
 * @param {element} element HTML element to append a class name
 * @param {string} name The class name to append
 */
function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}
/**
 * Show and hide cards (Credit: https://www.w3schools.com/howto/howto_js_filter_elements.asp)
 * @param {element} element HTML element to remove a class name
 * @param {string} name The class name to remove
 */
function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

/* Accordion collapse support */
var collapseBtns = document.getElementsByClassName('collapsible');
/* Register collapse event to all buttons */
for (let i = 0; i < collapseBtns.length; i++) {
    collapseBtns[i].addEventListener("click", function() {
        this.classList.toggle("active"); // Change button text from "-" to "+"
        var collContent = this.nextElementSibling;
        if (collContent.style.display === "block") { collContent.style.display = "none"; }
        else { collContent.style.display = "block"; }
    });
}
// Pre-run functions to toggle display properties and other presets
showCards("all");
// Call the function only for elements that might exist
const descriptions = ['desc1', 'desc2', 'desc3', 'desc4'];
descriptions.forEach(id => toggleDescription(id));