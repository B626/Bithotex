const body = document.querySelector("body");

const langLinks = document.querySelectorAll("#langLink");
const langSwitchesEN = document.querySelectorAll("#langSwitchLinkEn");
const langSwitchesRU = document.querySelectorAll("#langSwitchLinkRu");
const langPopups = document.querySelectorAll("#langPopup");
const langTextDisplays = document.querySelectorAll("#langTextDisplay");
const langImgDisplays = document.querySelectorAll("#langImgDisplay");

const burgerBtn = document.querySelector(".header__burger");

// Lang switch

const data = {
  english: {
    "nav-home": "Home",
    "nav-why": "Why us",
    "nav-services": "Services",
    "nav-contact": "Contact",
    "intro-title-1": "We provide our",
    "intro-title-2": "world class",
    "intro-title-3": "IT services",
    "intro-subtitle":
      "Our IT services are not just about technology; they're a form of art. Our specialists are like IT artists: they create, optimize, and transform tasks into masterpieces. And if any questions arise, rest assured, we have a backup plan and a touch of IT magic!",
    "intro-btn": "LEARN MORE",
    "hire-title": "Why hire us?",
    "hire-card-title-1": "Pro team with 10+ years experience",
    "hire-card-title-2": "100+ positive ratings",
    "hire-card-title-3": "Individual approach to every client",
    "hire-card-subtitle-1":
      "At Bithotex, our team is a mix of seasoned professionals, each with over a decade of experience. We've seen a lot, and we're here to help you navigate the ever-changing technological landscape with ease.",
    "hire-card-subtitle-2":
      "Our clients choose us not just for our tech skills, but because we understand their business. It’s this perfect blend of expertise and insight that keeps them coming back and sharing their positive experiences!",
    "hire-card-subtitle-3":
      "At our IT company, we believe in the power of personalized service. That's why we take the time to understand each client individually, tailoring our solutions to meet their unique needs.",
    "services-title": "Services we provide",
    "services-subtitle":
      "At our company, we pride ourselves on delivering exceptional services through a team of dedicated professionals who genuinely care about our clients’ needs",
    "services-card-title-1": "Home & Office network",
    "services-card-title-2": "Operating Systems",
    "services-card-title-3": "Servers",
    "services-card-title-4": "Cloud Systems",
    "services-card-title-5": "Camera Security",
    "services-card-title-6": "IT Audit",
    "services-card-title-7": "IT Security",
    "services-card-title-8": "Virtualization",
    "services-card-title-9": "Backup & Restore",
    "services-card-title-10": "Computer Hardware",
    "footer-title": "Explore",
    "footer-made-by": "Made by",
    "footer-home": "Home",
    "footer-why": "Why us",
    "footer-services": "Services",
    "footer-contact": "Contact",
    "footer-follow": "Follow us",
    "footer-rights": "@2024 Bithotex. All rights reserved.",
  },
  russian: {
    "nav-home": "Главная",
    "nav-why": "Почему мы",
    "nav-services": "Услуги",
    "nav-contact": "Контакты",
    "intro-title-1": "",
    "intro-title-2": "IT услуги",
    "intro-title-3": "Мирового уровня",
    "intro-subtitle":
      "Наши IT-услуги — это не только технологии, это форма искусства. Наши специалисты — как IT-художники: они создают, оптимизируют и превращают задачи в шедевры. А если возникнут вопросы — будьте уверены, у нас есть запасной план и немного IT-магии!",
    "intro-btn": "УЗНАТЬ БОЛЬШЕ",
    "hire-title": "Почему мы?",
    "hire-card-title-1": "10+ лет опыта у сотрудников",
    "hire-card-title-2": "100+ позитивных отзывов",
    "hire-card-title-3": "Индивидуальный подход к клиентам",
    "hire-card-subtitle-1":
      "В Bithotex наша команда — это смесь опытных профессионалов, каждый из которых имеет более чем десятилетний опыт. Мы видели многое, и мы здесь, чтобы помочь вам с легкостью ориентироваться в постоянно меняющемся технологическом ландшафте.",
    "hire-card-subtitle-2":
      "Наши клиенты выбирают нас не только за технические навыки, но и потому, что мы понимаем их бизнес. Это идеальное сочетание экспертизы и понимания их нужд заставляет их возвращаться и делиться положительными впечатлениями!",
    "hire-card-subtitle-3":
      "В нашей IT-компании мы верим в силу персонализированного обслуживания. Вот почему мы уделяем время индивидуальному пониманию каждого клиента, адаптируя наши решения для удовлетворения его уникальных потребностей.",
    "services-title": "Услуги которые мы предоставляем",
    "services-subtitle":
      "В нашей компании мы гордимся тем, что предоставляем исключительные услуги благодаря команде преданных своему делу профессионалов, которые искренне заботятся о потребностях наших клиентов.",
    "services-card-title-1": "Домашние и офисные сети",
    "services-card-title-2": "Операционные системы",
    "services-card-title-3": "Серверы",
    "services-card-title-4": "Облачные системы",
    "services-card-title-5": "Камерная безопасность",
    "services-card-title-6": "IT Аудит",
    "services-card-title-7": "IT Безопасность",
    "services-card-title-8": "Виртуализация",
    "services-card-title-9": "Бэкап и Ресторинг",
    "services-card-title-10": "Компьютерное обеспечение",
    "footer-title": "Навигация",
    "footer-made-by": "Разработано",
    "footer-home": "Главная",
    "footer-why": "Почему мы",
    "footer-services": "Услуги",
    "footer-contact": "Контакты",
    "footer-follow": "Следить за нами",
    "footer-rights": "@2024 Bithotex. Все права защищены.",
  },
};




const navHome = document.querySelector(".nav-home");
const navWhyUs = document.querySelector(".nav-why");
const navServices = document.querySelector(".nav-services");
const navContact = document.querySelector(".nav-contact");

const navHomeBurger = document.querySelector(".nav-home-burger");
const navWhyUsBurger = document.querySelector(".nav-why-burger");
const navServicesBurger = document.querySelector(".nav-services-burger");
const navContactBurger = document.querySelector(".nav-contact-burger");

const introTitle1 = document.querySelector("#intro-title-1");
const introTitle2 = document.querySelector("#intro-title-2");
const introTitle3 = document.querySelector("#intro-title-3");
const introSubtitle = document.querySelector(".intro__subtitle");
const introBtn = document.querySelector(".intro__btn");

const hireTitle = document.querySelector(".hire__title");
const hireCardTitle1 = document.querySelector("#hire-card-title-1");
const hireCardTitle2 = document.querySelector("#hire-card-title-2");
const hireCardTitle3 = document.querySelector("#hire-card-title-3");
const hireCardSubtitle1 = document.querySelector("#hire-card-subtitle-1");
const hireCardSubtitle2 = document.querySelector("#hire-card-subtitle-2");
const hireCardSubtitle3 = document.querySelector("#hire-card-subtitle-3");

const servicesTitle = document.querySelector(".services__title");
const servicesSubtitle = document.querySelector(".services__subtitle");
const servicesCardTitle1 = document.querySelector("#services-card-title-1");
const servicesCardTitle2 = document.querySelector("#services-card-title-2");
const servicesCardTitle3 = document.querySelector("#services-card-title-3");
const servicesCardTitle4 = document.querySelector("#services-card-title-4");
const servicesCardTitle5 = document.querySelector("#services-card-title-5");
const servicesCardTitle6 = document.querySelector("#services-card-title-6");
const servicesCardTitle7 = document.querySelector("#services-card-title-7");
const servicesCardTitle8 = document.querySelector("#services-card-title-8");
const servicesCardTitle9 = document.querySelector("#services-card-title-9");
const servicesCardTitle10 = document.querySelector("#services-card-title-10");

const footerTitle = document.querySelector("#footer-title");
const footerMadeBy = document.querySelector("#footer-made-by");
const footerHome = document.querySelector("#footer-home");
const footerWhy = document.querySelector("#footer-why");
const footerServices = document.querySelector("#footer-services");
const footerContact = document.querySelector("#footer-contact");
const footerFollow = document.querySelector("#footer-follow");
const footerRights = document.querySelector("#footer-rights");

const translateEN = () => {
navHome.textContent = data.english["nav-home"];
navWhyUs.textContent = data.english["nav-why"];
navServices.textContent = data.english["nav-services"];
navContact.textContent = data.english["nav-contact"];
navHomeBurger.textContent = data.english["nav-home"];
navWhyUsBurger.textContent = data.english["nav-why"];
navServicesBurger.textContent = data.english["nav-services"];
navContactBurger.textContent = data.english["nav-contact"];
introTitle1.textContent = data.english["intro-title-1"];
introTitle2.textContent = data.english["intro-title-2"];
introTitle3.textContent = data.english["intro-title-3"];
introSubtitle.textContent = data.english["intro-subtitle"];
introBtn.innerHTML = `${data.english["intro-btn"]} <div><img src="./assets/img/arrow-right.svg" alt="->" /></div>`;
introBtn.style.lineHeight = "10%";
hireTitle.textContent = data.english["hire-title"];
hireCardTitle1.textContent = data.english["hire-card-title-1"];
hireCardTitle2.textContent = data.english["hire-card-title-2"];
hireCardTitle3.textContent = data.english["hire-card-title-3"];
hireCardSubtitle1.textContent = data.english["hire-card-subtitle-1"];
hireCardSubtitle2.textContent = data.english["hire-card-subtitle-2"];
hireCardSubtitle3.textContent = data.english["hire-card-subtitle-3"];
servicesTitle.textContent = data.english["services-title"];
servicesSubtitle.textContent = data.english["services-subtitle"];
servicesCardTitle1.textContent = data.english["services-card-title-1"];
servicesCardTitle2.textContent = data.english["services-card-title-2"];
servicesCardTitle3.textContent = data.english["services-card-title-3"];
servicesCardTitle4.textContent = data.english["services-card-title-4"];
servicesCardTitle5.textContent = data.english["services-card-title-5"];
servicesCardTitle6.textContent = data.english["services-card-title-6"];
servicesCardTitle7.textContent = data.english["services-card-title-7"];
servicesCardTitle8.textContent = data.english["services-card-title-8"];
servicesCardTitle9.textContent = data.english["services-card-title-9"];
servicesCardTitle10.textContent = data.english["services-card-title-10"];
footerTitle.textContent = data.english["footer-title"];
footerMadeBy.textContent = data.english["footer-made-by"];
footerHome.textContent = data.english["footer-home"];
footerWhy.textContent = data.english["footer-why"];
footerServices.textContent = data.english["footer-services"];
footerContact.textContent = data.english["footer-contact"];
footerFollow.textContent = data.english["footer-follow"];
footerRights.textContent = data.english["footer-rights"];
}

const translateRU = () => {
  navHome.textContent = data.russian["nav-home"];
  navWhyUs.textContent = data.russian["nav-why"];
  navServices.textContent = data.russian["nav-services"];
  navContact.textContent = data.russian["nav-contact"];
  navHomeBurger.textContent = data.russian["nav-home"];
  navWhyUsBurger.textContent = data.russian["nav-why"];
  navServicesBurger.textContent = data.russian["nav-services"];
  navContactBurger.textContent = data.russian["nav-contact"];
  introTitle1.textContent = data.russian["intro-title-1"];
  introTitle2.textContent = data.russian["intro-title-2"];
  introTitle3.textContent = data.russian["intro-title-3"];
  introSubtitle.textContent = data.russian["intro-subtitle"];
  introBtn.innerHTML = `${data.russian["intro-btn"]} <div><img src="./assets/img/arrow-right.svg" alt="->" /></div>`;
  introBtn.style.lineHeight = "10%";
  hireTitle.textContent = data.russian["hire-title"];
  hireCardTitle1.textContent = data.russian["hire-card-title-1"];
  hireCardTitle2.textContent = data.russian["hire-card-title-2"];
  hireCardTitle3.textContent = data.russian["hire-card-title-3"];
  hireCardSubtitle1.textContent = data.russian["hire-card-subtitle-1"];
  hireCardSubtitle2.textContent = data.russian["hire-card-subtitle-2"];
  hireCardSubtitle3.textContent = data.russian["hire-card-subtitle-3"];
  servicesTitle.textContent = data.russian["services-title"];
  servicesSubtitle.textContent = data.russian["services-subtitle"];
  servicesCardTitle1.textContent = data.russian["services-card-title-1"];
  servicesCardTitle2.textContent = data.russian["services-card-title-2"];
  servicesCardTitle3.textContent = data.russian["services-card-title-3"];
  servicesCardTitle4.textContent = data.russian["services-card-title-4"];
  servicesCardTitle5.textContent = data.russian["services-card-title-5"];
  servicesCardTitle6.textContent = data.russian["services-card-title-6"];
  servicesCardTitle7.textContent = data.russian["services-card-title-7"];
  servicesCardTitle8.textContent = data.russian["services-card-title-8"];
  servicesCardTitle9.textContent = data.russian["services-card-title-9"];
  servicesCardTitle10.textContent = data.russian["services-card-title-10"];
  footerTitle.textContent = data.russian["footer-title"];
  footerMadeBy.textContent = data.russian["footer-made-by"];
  footerHome.textContent = data.russian["footer-home"];
  footerWhy.textContent = data.russian["footer-why"];
  footerServices.textContent = data.russian["footer-services"];
  footerContact.textContent = data.russian["footer-contact"];
  footerFollow.textContent = data.russian["footer-follow"];
  footerRights.textContent = data.russian["footer-rights"];
}

langLinks.forEach((e) => {
  e.addEventListener("click", (e) => {
    e.preventDefault();
    langPopups.forEach((el) => {
      el.classList.toggle("display-block");
    });
  });
});

langSwitchesEN.forEach((e) => {
  e.addEventListener("click", (e) => {
    e.preventDefault();
    const burgerMenu = document.querySelector(".burger-menu");
    langPopups.forEach((el) => {
      el.classList.toggle("display-block");
    });
    langTextDisplays.forEach((e) => {
      e.textContent = "English";
    })
    langImgDisplays.forEach((e)=> {
      e.src = "./assets/img/british.png";
      e.alt = "English";
    })
    translateEN()
    burgerMenu.classList.remove("right-0");
    burgerMenu.classList.add("right-120");
    body.classList.remove("overflow-hidden");
  });
});

langSwitchesRU.forEach((e) => {
e.addEventListener("click", (e) => {
  e.preventDefault();
  const burgerMenu = document.querySelector(".burger-menu");
  langPopups.forEach((el) => {
    el.classList.toggle("display-block");
  });
  langTextDisplays.forEach((e) => {
    e.textContent = "Русский";
  });
  langImgDisplays.forEach((e) => {
    e.src = "./assets/img/russian2.jpg";
    e.alt = "Russian"
  });
  translateRU()
  burgerMenu.classList.remove("right-0");
  burgerMenu.classList.add("right-120");
  body.classList.remove("overflow-hidden");
});
})

let browserChecker = () => {
  let userLang = navigator.language || navigator.userLanguage;
  if (userLang === "ru-RU") {
    translateRU();
    langTextDisplays.forEach((e) => {
      e.textContent = "Русский";
    });
    langImgDisplays.forEach((e) => {
      e.src = "./assets/img/russian2.jpg";
      e.alt = "Russian";
    });
  } else {
    translateEN();
    langTextDisplays.forEach((e) => {
      e.textContent = "English";
    });
    langImgDisplays.forEach((e) => {
      e.src = "./assets/img/british.png";
      e.alt = "English";
    });
  }
};

window.onload = browserChecker();


// Burger menu

burgerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const burgerClose = document.querySelector("#burger-close");
  const burgerMenu = document.querySelector(".burger-menu");
  const burgerNavLinks = document.querySelectorAll(".nav-list__link");
  burgerMenu.classList.remove("right-120");
  body.classList.toggle("overflow-hidden");
  burgerMenu.classList.add("right-0");
  burgerNavLinks.forEach((e) => {
    e.addEventListener("click", (el) => {
      el.preventDefault();
      burgerMenu.classList.remove("right-0");
      burgerMenu.classList.add("right-120");
      body.classList.remove("overflow-hidden");
      window.location.href = el.target.href;
    });
  });
  burgerClose.addEventListener("click", (e) => {
    e.preventDefault()
    burgerMenu.classList.remove("right-0");
    burgerMenu.classList.add("right-120");
    body.classList.remove("overflow-hidden");
  });
});

