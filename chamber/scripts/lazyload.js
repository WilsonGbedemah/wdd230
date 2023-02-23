//selecting all images with data-src attribute//
const imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

// Check to see if intersection Observer is supported //
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
//Loop through each img to check status and load if necessary//
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }
  
  //Amount of Time in days between user//
  const daysDifference = (startDate, endDate) => {
    const difference = endDate.getTime() - startDate.getTime();
    const days = Math.floor(difference / (1000 * 3600 * 24));
    return days;
  }
  
  document.addEventListener("DOMContentLoaded", ()=>{
    const lastVisit = localStorage.getItem('@last-visit');
    if(!lastVisit){
      localStorage.setItem('@last-visit', new Date().toDateString());
      document.getElementById('last-visit').innerHTML = `Welcome!`
    } else {
      const days = daysDifference(new Date(lastVisit), new Date());
      document.getElementById('last-visit').innerHTML = `Welcome Back! Last visited: ${days === 0 ? "Today.": `${days} days ago.`}`
      localStorage.setItem('@last-visit', new Date().toDateString());
    }
  });
