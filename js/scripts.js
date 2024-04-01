// Inject current year in footer
const newDate = new Date();
document.querySelector('#year').textContent = newDate.getFullYear()

function toggleMenu () {
    document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");

x.onclick = toggleMenu;



// grab the reviews data from the file
import { reviews } from '../data/reviews.js';
console.log(reviews);

// create an empty card
const myTarget = document.querySelector("#parent")

for (let x = 0; x < reviews.length; x++) {
    console.log(reviews[x].name);

    //create a section
    const mySection = document.createElement('section')
    const myName = document.createElement('h3')
    myName.textContent = reviews[x].name
    const myReview = document.createElement('p')
    myReview.textContent = reviews[x].text

    const myRating = document.createElement('div')

    

    

    for(let step = 0; step<reviews[x].stars; step++) {
        const myStars = document.createElement('img')
        myStars.src = "./images/star-outline.svg"
        myRating.appendChild(myStars)
    }

    

    

    // build the figure with child elements 
    mySection.appendChild(myName);
    mySection.appendChild(myRating);

    mySection.appendChild(myReview);
    

    //add a new card to a page
    myTarget.appendChild(mySection);
 
} // end for loop