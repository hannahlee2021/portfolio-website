// //const assignImage = ["/Users/hanalee/portfolio website/welcome.svg", "/Users/hanalee/portfolio website/2.svg"];
// let welcome = getElementById('welcome');
// let two = getElementById('two');
// let my = getElementById('my');
// let playground = getElementById('playground');

// const assignOpening = [welcome, two, my, playground];


// function cycle(index=0) {
//     document.querySelector('.title').src=assignOpening[index];

//     let nextIndex = index == assignOpening.length - 1 ? 0 : ++index;

//     setTimeout(cycle, 2000, nextIndex);
// }

// cycle();

let elements = document.querySelectorAll('#welcome, #two, #my, #playground');
let index = 0;
const scrollBox = document.getElementById('content-box');
const annyeong = document.getElementById('annyeong');
const engVer = document.getElementById('engVer');
const bio = document.getElementById('bio');
const trail = document.getElementById('trail');
const rocket = document.getElementById('rocket');

// const contents = document.querySelectorAll('.title');

let prevScrollPos = scrollBox.scrollTop;

// contents.forEach(element => {
//     element.style.display("block");
// })
annyeong.style.display="none";
engVer.style.display="none";
bio.style.display="none";
trail.style.display = "none";
rocket.style.display = "none";



// window.addEventListener('scroll', function() {
//     if (window.pageYOffset > 200) { // adjust the offset as needed
//       reveal.style.opacity = '1';
//       reveal.style.visibility = 'visible';
//     }
//   });

scrollBox.addEventListener("scroll", function() {
    // const text1 = document.getElementById("annyeong");

    if (scrollBox.scrollTop + scrollBox.offsetHeight === scrollBox.scrollHeight) {
        
        annyeong.style.display = "block";
        engVer.style.display = "block";
        bio.style.display = "block";
        trail.style.display = "block";
        rocket.style.display = "block";

    } else if (scrollBox.scrollTop < prevScrollPos) {
        annyeong.style.display = "none";
        engVer.style.display = "none";
        bio.style.display = "none";
        trail.style.display = "none";
        rocket.style.display = "none";
        
      
        
    }

    prevScrollPos = scrollBox.scrollTop;

    });

function showElements() {
  if (index < elements.length) {
    elements[index].style.display = 'block';
    index++;

    if (index === elements.length) {
        let button = document.getElementById('show-elements');
        button.style.pointerEvents = 'none';
        button.style.opacity = 0;
        // document.body.style.overflow = 'scroll';
      }

  } else {
    index = 0;
    elements.forEach(element => {
      element.style.display = 'none';
    });
  }
}

function showHoverDetails() {
  // Show the hover details
  document.getElementById("hover-details").style.display = "block";
}

function hideHoverDetails() {
  // Hide the hover details
  document.getElementById("hover-details").style.display = "none";
}