const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM<br>Is<br>Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let headerImg = document.getElementById("cta-img");
headerImg.src = "img/header-img.png";

let middleImg = document.getElementById("middle-img");
middleImg.src = "img/mid-page-accent.jpg";

let navAnchors = document.querySelectorAll('a');
let navArray = Object.values(siteContent.nav);

navAnchors.forEach((item, i) =>{
  item.textContent = navArray[i];
})

// for(let i = 0; i < navAnchors; i++){
//   navAnchors[i].textContent = navArray[i];
// }

// navAnchors[0].textContent = siteContent['nav']['nav-item-1'];
// navAnchors[1].textContent = siteContent['nav']['nav-item-2'];
// navAnchors[2].textContent = siteContent['nav']['nav-item-3'];
// navAnchors[3].textContent = siteContent['nav']['nav-item-4'];
// navAnchors[4].textContent = siteContent['nav']['nav-item-5'];
// navAnchors[5].textContent = siteContent['nav']['nav-item-6'];

let ctaHeader = document.querySelector('.cta-text h1');
ctaHeader.innerHTML = siteContent['cta']['h1'];

let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent['cta']['button'];

let topHeaders = document.querySelectorAll('.top-content h4');
topHeaders[0].textContent = siteContent['main-content']['features-h4'];
topHeaders[1].textContent = siteContent['main-content']['about-h4'];

let topText = document.querySelectorAll('.top-content p');
topText[0].textContent = siteContent['main-content']['features-content'];
topText[1].textContent = siteContent['main-content']['about-content'];

let bottomHeaders = document.querySelectorAll('.bottom-content h4');
bottomHeaders[0].textContent = siteContent['main-content']['services-h4'];
bottomHeaders[1].textContent = siteContent['main-content']['product-h4'];

let bottomText = document.querySelectorAll('.bottom-content p');
bottomText[0].textContent = siteContent['main-content']['services-content'];
bottomText[1].textContent = siteContent['main-content']['product-content'];

let contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];

let contactLines = document.querySelectorAll('.contact p');
contactLines[0].textContent = siteContent['contact']['address'];
contactLines[1].textContent = siteContent['contact']['phone'];
contactLines[2].textContent = siteContent['contact']['email'];

let footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];

navAnchors.forEach((item) =>{
  item.style.color = 'green';
})

let navigation = document.querySelector('nav');

let appendAnchor = document.createElement('a');
appendAnchor.textContent = `Appended`;
navigation.appendChild(appendAnchor);
appendAnchor.style.color = 'green';

let prependAnchor = document.createElement('a');
prependAnchor.textContent = `Prepended`;
navigation.prepend(prependAnchor);
prependAnchor.style.color = 'green';








