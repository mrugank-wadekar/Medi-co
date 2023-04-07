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
if (window.innerWidth < 1024) {
    const navButtons = document.querySelectorAll('#nav__items li a');
    navButtons.forEach(item => {
      item.addEventListener("click", () => {
        closeNav();
      });
    });
  }
  

//Adding text on mobile devices for hover effects on specialists
if (window.innerWidth < 1030 || 'ontouchstart' in window) {
  const tapMessage =document.querySelector("#tap-message");
  let temp=tapMessage.innerText;
  let temp2="Tap on the profiles below to connect with them";
  tapMessage.innerText = temp +"\n" + temp2;
  console.log(temp,temp2);
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

    autoplay: {
        delay: 2100,
        disableOnInteraction: false,
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


  