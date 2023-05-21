//Javascript for Drop-down Menu
//Select div with "class=dropdown" from the document and store in constant dropdowns
const dropdowns = document.querySelectorAll('.dropdown');
//Loop for each dropdown element
dropdowns.forEach(dropdown => {
    //Select and store inner elements from each dropdown (div) according to their classes
    const select = dropdown.querySelector('.select');
    const selected = dropdown.querySelector('.selected');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    //Create a click event to the select elements (when the "Regions" or "Destinations" spans are clicked)
    select.addEventListener('click', () => {
        //Add the clicked select styles (select-clicked) to the select element
        select.classList.toggle('select-clicked');
        //Add the rotate styles (caret-rotate) to rotate the caret element
        caret.classList.toggle('caret-rotate');
        //Add the open styles (menu-open) to display the menu element (unordered list)
        menu.classList.toggle('menu-open');
    });
    //Loop through all option elements under the dropdowns
    options.forEach(option => {
        //Create a click event for each options element
        option.addEventListener('click', () => {
            //Change selected inner text to clicked option inner text (E.g. 'Regions' changes to 'Hoikaido' when clicked)
            selected.innerText = option.innerText;
            //Remove the clicked select styles (select-clicked) to the select element 
            select.classList.remove('select-clicked');
            //Remove the rotate styles (caret-rotate) to rotate the caret element back
            caret.classList.remove('caret-rotate');
            //Remove the open styles (menu-open) to stop displaying the menu element (unordered list)
            menu.classList.remove('menu-open');
            //Remove active class from all option elements
            options.forEach(option => {
                option.classList.remove('active');
            });
            //Add active class to clicked option element
            option.classList.add('active');
        });
    });
});

//Javascript for the Parallax Scrolling Effect at Homepage
//Get all the elements in the main section of the document (h1 & img) using their assigned IDs
let text = document.getElementById("text");
let background = document.getElementById("background");
let cloud1 = document.getElementById("cloud1");
let cloud2 = document.getElementById("cloud2");
let birds = document.getElementById("birds");
let tree = document.getElementById("tree");
let hill1 = document.getElementById("hill1");
let hill2 = document.getElementById("hill2");
let temples = document.getElementById("temples");
//Create a scroll event to the section elements
window.addEventListener('scroll', () => {
    //Get and store the no. of pixels that the document is currently scrolled vertically as value
    let value = window.scrollY; 
    //Change the left, marginTop and top values of the elements according to the changes in value during vertical scrolling
    //Negative marginTop value render the effect of h1 moving upwards when homepage is scrolled down 
    text.style.marginTop = value * -10 + "px";
    //Positive left value render the movement of img to the left whereas negative left value is to the right when homepage is scrolled down 
    tree.style.left = value * 2 + "px";
    hill1.style.left = value * 1 + "px";
    cloud2.style.left = value * 1 + "px";
    hill2.style.left = value * -1 + "px";
    cloud1.style.left = value * -1 + "px";
    temples.style.left = value * -0.2 + "px";
    birds.style.left = value * 1 + "px";
    birds.style.top = value * -1 + "px";
    //Negative top value render the movement of birds img downwards when homepage is scrolled down
});


//Javascript for Slide Shows in Secondary Pages 
//Show the first picture
var slideIndex = 1;
showslide(slideIndex);

//Function that accepts input n from previous or next buttons in html
function Slideshow(n) {
    showslide(slideIndex += n);
}
//Function that directs users to the picture they want directly
function currentDiv(n) {
    showslide(slideIndex = n);
}
//Function that hides all other pictures and show one picture only
function showslide(n) {
    var i;
    var x = document.getElementsByClassName("slideshow");
    var dots = document.getElementsByClassName("bullet");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    //Block all the other pictures
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    //Make the bullet representing current image show colour
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" showing", "");
    }
    //Show the bullet color
    dots[slideIndex-1].className += " showing";
    //Show the previous/next pictures based on current pictures
    x[slideIndex-1].style.display = "block";
}


