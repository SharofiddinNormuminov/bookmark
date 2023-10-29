const accordionItems = document.querySelectorAll(".accordion__item");
const featuresTab1 = document.querySelector(".tab-1");
const featuresTab2 = document.querySelector(".tab-2");
const featuresTab3 = document.querySelector(".tab-3");
const featuresslide1 = document.querySelector("#slide1");
const featuresslide2 = document.querySelector("#slide2");
const featuresslide3 = document.querySelector("#slide3");

featuresTab1.addEventListener("click", () => {
    featuresslide1.classList.remove("hidden")
    featuresslide2.classList.add("hidden")
    featuresslide3.classList.add("hidden")

})
featuresTab2.addEventListener("click", () => {
    featuresslide2.classList.remove("hidden")
    featuresslide1.classList.add("hidden")
    featuresslide3.classList.add("hidden")

})
featuresTab3.addEventListener("click", () => {
    featuresslide3.classList.remove("hidden")
    featuresslide1.classList.add("hidden")
    featuresslide2.classList.add("hidden")

})



accordionItems.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordionItems.forEach((item) =>
      item.classList.contains("open") && item !== accordion
        ? item.classList.remove("open")
        : null
    );
    accordion.classList.toggle("open");
  });
});
