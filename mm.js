let navebar = document.querySelectorAll(".navebar li");
let navebarArray=Array.from(navebar);

navebar.forEach((ele)=>{

    ele.addEventListener("click",function (e) {
        
        navebarArray.forEach((ele)=>{
            ele.classlist.remove("active")
        });

        e.currentTarget.classlist.add("active")

    });

});









const images = document.querySelectorAll('.slider img');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
let current = 0;
if(prevBtn){
prevBtn.addEventListener('click', function() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
  }
  

  current = (current - 1 + images.length) % images.length;
  images[current].classList.add('active');
});
}

if(nextBtn){
nextBtn.addEventListener('click', function() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
  }

  current = (current + 1) % images.length;
  images[current].classList.add('active');
});
}



const image = document.querySelectorAll('.slider2 img');
const prevBtn2 = document.querySelector('#prevBtn2');
const nextBtn2 = document.querySelector('#nextBtn2');
let current2 = 0;

if(prevBtn2){

prevBtn2.addEventListener('click', function() {
  for (let i = 0; i < image.length; i++) {
    image[i].classList.remove('active2');
  }

  current2 = (current2 - 1 + image.length) % image.length;
  image[current2].classList.add('active2');
});
}

if(nextBtn2){
nextBtn2.addEventListener('click', function() {
  for (let i = 0; i < image.length; i++) {
    image[i].classList.remove('active2');
  }

  current2 = (current2 + 1) % image.length;
  image[current2].classList.add('active2');
});
}





const imag = document.querySelectorAll('.slider3 img');
const prevBtn3 = document.querySelector('#prevBtn3');
const nextBtn3 = document.querySelector('#nextBtn3');
let current3 = 0;
if(prevBtn3){

prevBtn3.addEventListener('click', function() {
  for (let i = 0; i < imag.length; i++) {
    imag[i].classList.remove('active3');
  }

  current3 = (current3 - 1 + imag.length) % imag.length;
  imag[current3].classList.add('active3');
});
}

if(nextBtn3){

nextBtn3.addEventListener('click', function() {
  for (let i = 0; i < imag.length; i++) {
    imag[i].classList.remove('active3');
  }

  current3 = (current3 + 1) % imag.length;
  imag[current3].classList.add('active3');
});
}











var scrollUpButton = document.getElementById("scroll-up-button");

window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop >300) {
    scrollUpButton.style.display = "block";
  } else {
    scrollUpButton.style.display = "none";
  }
};

scrollUpButton.onclick = function() {
  // Get the current scroll position
  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  
  // Calculate the amount to scroll by
  var scrollStep = -Math.floor(currentScroll / 20);
  
  // Define the animation function
  function scrollToTop() {
    var newScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (newScroll > 0) {
      window.requestAnimationFrame(scrollToTop);
    }
    window.scrollTo(0, newScroll + scrollStep);
  }
  
  // Call the animation function
  scrollToTop();
};
