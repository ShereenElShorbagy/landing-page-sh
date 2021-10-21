/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navigation = document.getElementById('navbar__list');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

//function navBarCreation that creates the navbar elements and put them ento list element and displays the section name by javascript not by HTML
//Then function goToSection is called for each section item when it is clicked on it to scroll directly to the section clicked.
function navBarCreation(){
    sections.forEach(section => {
        const sectionName = section.getAttribute('data-nav');
        const item = document.createElement('li');
        
        item.classList.add('menu__link');
        item.innerHTML = `${sectionName}`;
        navigation.appendChild(item);

        item.addEventListener('click', function goToSection(){
            section.scrollIntoView({behavior: "smooth"});
        });
    });
}

//calling the navBarCreation function to create the nav bar.
navBarCreation();



// Add class 'active' to section when near top of viewport

//Function setActive that is responsible for checking if our section is in ythe frame viewable to us then it will add class 'your-active-class'
//but if we are not viewing the section then it will remove class 'your-active-class'
function setActive(){
    sections.forEach(section => {
        const frame = section.getBoundingClientRect();
        if(frame.top >= 0 && frame.left >= 0 && frame.bottom <= (window.innerHeight || document.documentElement.clientHeight) && frame.right <= (window.innerWidth || document.documentElement.clientWidth)){
                if(!section.classList.contains('your-active-class')){
                    section.classList.add('your-active-class')
                }
            }
            else{
                section.classList.remove('your-active-class');
            }
    })
}

// Calling the setActive function on each scroll that happens in the document
document.addEventListener('scroll', setActive);


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
