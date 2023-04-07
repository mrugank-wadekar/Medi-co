const navItems=document.querySelector('#nav__items');
const openNavBtn=document.querySelector('#open__nav-btn');
const closeNavBtn=document.querySelector('#close__nav-btn');

openNavBtn.addEventListener("click",()=>{
    navItems.style.display='flex';
    openNavBtn.style.display='none';
    closeNavBtn.style.display='inline-block';
})

const closeNav = () => {
    navItems.style.display='none';
    openNavBtn.style.display='inline-block';
    closeNavBtn.style.display='none';
}

closeNavBtn.addEventListener("click",closeNav);

//close nav menu on smaller screens when a section is clicked
if(window.innerWidth<1024){
    const navButtons=document.querySelectorAll('#nav__items li a');
    navButtons.forEach(item=>{
        item.addEventListener("click",()=>{
            closeNav();
        })
    }
    )
}

//change navbar color on scroll

window.addEventListener("scroll",()=>{
document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>50)
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    //Responsive Breakpoints
    breakpoints :{
        //when window width is >= 600px (For Tablets)
        100:{
            slidesPerView:1
        },
        
        600:{
            slidesPerView:2
        },

        //when window width is >= 1024px
        1024: {
            slidesPerView:3
        }
    }
  });

  //Clear form fields after it has been submitted once
// const form = document.querySelector('#appointment-form');

// form.addEventListener('submit', (event) => {
//   //event.preventDefault(); // prevent the form from submitting

//   // perform your form submission logic here

//   form.reset(); // reset the form fields
// });



