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
  

//Typewriter effect for header
  const typed = new Typed('#type-effect', {
    strings: ['You','Your Family','Your Employees',' Everyone !^4500'],
    typeSpeed: 50,
    backSpeed: 42,
    startDelay: 950,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 380,
    loop:true,
    loopCount: Infinity,


  });

//Tab hover effects for services section
const ser1 = document.getElementById('ser-1');
const ser2 = document.getElementById('ser-2');
const ser3 = document.getElementById('ser-3');
const ser4 = document.getElementById('ser-4');
const ser5 = document.getElementById('ser-5');
const ser6 = document.getElementById('ser-6');

let ogser1=ser1.style.transform;
let ogser2=ser2.style.transform;
let ogser3=ser3.style.transform;
let ogser4=ser4.style.transform;
let ogser5=ser5.style.transform;
let ogser6=ser6.style.transform;
if(window.innerWidth <1034 && window.innerWidth >=610){
  
  ser3.addEventListener('mouseover',()=>{
    ser1.style.transform='translateY(-1rem)';
  })

  ser3.addEventListener('mouseout',()=>{
    ser1.style.transform=ogser1;
  })

  ser3.addEventListener('mouseover',()=>{
    ser5.style.transform='translateY(0.6rem)';
  })

  ser3.addEventListener('mouseout',()=>{
    ser5.style.transform=ogser5;
  })

  // 4th article
  ser4.addEventListener('mouseover',()=>{
    ser2.style.transform='translateY(-1rem)';
  })

  ser4.addEventListener('mouseout',()=>{
    ser2.style.transform=ogser2;
  })

  ser4.addEventListener('mouseover',()=>{
    ser6.style.transform='translateY(0.6rem)';
  })

  ser4.addEventListener('mouseout',()=>{
    ser6.style.transform=ogser6;
  })

}

//Mobile hover effects for services section

if(window.innerWidth<610){

  ser2.addEventListener("mouseover",()=>{
    ser1.style.transform='translateY(-1.4rem)';
    ser3.style.transform='translateY(1rem)';
    ser4.style.transform='translateY(1rem)';
    ser5.style.transform='translateY(1rem)';
    ser6.style.transform='translateY(1rem)';
  })

  ser2.addEventListener("mouseout",()=>{
    ser1.style.transform=ogser1;
    ser3.style.transform=ogser3;
    ser4.style.transform=ogser4;
    ser5.style.transform=ogser5;
    ser6.style.transform=ogser6;
  })

  ser3.addEventListener("mouseover",()=>{
    ser1.style.transform='translateY(-1.4rem)';
    ser2.style.transform='translateY(-1.4rem)';
    ser4.style.transform='translateY(1rem)';
    ser5.style.transform='translateY(1rem)';
    ser6.style.transform='translateY(1rem)';
  })

  ser3.addEventListener("mouseout",()=>{
    ser1.style.transform=ogser1;
    ser2.style.transform=ogser2;
    ser4.style.transform=ogser4;
    ser5.style.transform=ogser5;
    ser6.style.transform=ogser6;
  })

  ser4.addEventListener("mouseover",()=>{
    ser1.style.transform='translateY(-1.4rem)';
    ser2.style.transform='translateY(-1.4rem)';
    ser3.style.transform='translateY(-1.4rem)';
    ser5.style.transform='translateY(1rem)';
    ser6.style.transform='translateY(1rem)';
  })

  ser4.addEventListener("mouseout",()=>{
    ser1.style.transform=ogser1;
    ser2.style.transform=ogser2;
    ser3.style.transform=ogser3;
    ser5.style.transform=ogser5;
    ser6.style.transform=ogser6;
  })

  ser5.addEventListener("mouseover",()=>{
    ser1.style.transform='translateY(-1.4rem)';
    ser2.style.transform='translateY(-1.4rem)';
    ser3.style.transform='translateY(-1.4rem)';
    ser4.style.transform='translateY(-1.4rem)';
    ser6.style.transform='translateY(1rem)';
  })

  ser5.addEventListener("mouseout",()=>{
    ser1.style.transform=ogser1;
    ser2.style.transform=ogser2;
    ser3.style.transform=ogser3;
    ser4.style.transform=ogser4;
    ser6.style.transform=ogser6;
  })

  
}

//Adding text on mobile devices for hover effects on specialists
if (window.innerWidth < 1030 || 'ontouchstart' in window) {
  const tapMessage =document.querySelector("#tap-message");
  let temp=tapMessage.innerText;
  let temp2="Tap on the profiles below to connect with them";
  tapMessage.innerText = temp +"\n" + temp2;
  console.log(temp,temp2);
}
const mob2 = document.getElementById('mob-2');
const mob1 = document.getElementById('mob-1');
const mob3 = document.getElementById('mob-3');
const mob4 = document.getElementById('mob-4');

let ogmob1= mob1.style.transform;
let ogmob2= mob2.style.transform;
let ogmob3= mob3.style.transform;
let ogmob4= mob4.style.transform;

  //Mobile hover effects for specialist section
  if(window.innerWidth <610){

  mob2.addEventListener('mouseover', () => {
    mob1.style.transform = 'translateY(-1.5rem)';
  });
  
  mob2.addEventListener('mouseout', () => {
    mob1.style.transform = ogmob1;
  });

  mob2.addEventListener('mouseover', () => {
    mob3.style.transform = 'translateY(1.5rem)';
  });
  
  mob2.addEventListener('mouseout', () => {
    mob3.style.transform = ogmob3;
  });

  mob3.addEventListener('mouseover', () => {
    mob4.style.transform = 'translateY(1.5rem)';
  });
  
  mob3.addEventListener('mouseout', () => {
    mob4.style.transform = ogmob4;
  });

  mob3.addEventListener('mouseover', () => {
    mob2.style.transform = 'translateY(-1.5rem)';
  });
  
  mob3.addEventListener('mouseout', () => {
    mob2.style.transform = ogmob2;
  });
}
 
//change navbar color on scroll

window.addEventListener("scroll",()=>{
document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>50)
})

//change navbar color on scroll on that specific section
const navbar = document.querySelector('nav');
const servicesSection = document.querySelector('#services');
const specialistsSection = document.querySelector('#specialists');
const appointmentSection = document.querySelector('#appointment');

//services section
window.addEventListener('scroll', ()=> {
  if (window.scrollY >= servicesSection.offsetTop - parseInt(getComputedStyle(servicesSection).marginTop) -65)  {
    navbar.classList.add('nav-scroll-services');
  } else {
    navbar.classList.remove('nav-scroll-services');
  }
});

//specialists section

window.addEventListener('scroll', ()=> {
  if (window.scrollY >= specialistsSection.offsetTop - parseInt(getComputedStyle(specialistsSection).marginTop) -60)  {
    navbar.classList.add('nav-scroll-specialists');
  } else {
    navbar.classList.remove('nav-scroll-specialists');
  }
});

//appointment section

window.addEventListener('scroll', ()=> {
  if (window.scrollY >= appointmentSection.offsetTop - parseInt(getComputedStyle(appointmentSection).marginTop) -8)  {
    navbar.classList.add('nav-scroll-appointment');
  } else {
    navbar.classList.remove('nav-scroll-appointment');
  }
});

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




  