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
/*Loop through each img to check status and load if necessary*/
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }

  /*Number of User Visits*/
let daysBetweenVisits = Number(window.localStorage.getItem("last-visit-ls"));

let timeStamp = Date.now();
let findDaysBetween = timeStamp;

if (daysBetweenVisits !== 0){
    findDaysBetween -= daysBetweenVisits;
    findDaysBetween = Math.round(findDaysBetween / (1000*60*60*24));
    if (findDaysBetween < 1){
        document.getElementById("daysBetweenVisits").innerHTML = `No days have passed since your last visit`;
    }
    else{
        document.getElementById("daysBetweenVisits").innerHTML = `It has been ${findDaysBetween} days since your last visit`;
    }
}
else {
    document.getElementById("daysBetweenVisits").innerHTML = "Join us again soon!";
}

localStorage.setItem("last-visit-ls", timeStamp)