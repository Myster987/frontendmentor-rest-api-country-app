export const switchDarkMode = () => {
  const currentMode = document.querySelector("html");
  const iconOfDarkMode = document.querySelector("header > button > img");
  const arrowLeft = document.getElementById("arrowLeft");

  
  if (currentMode.classList.contains("dark")) {
    currentMode.classList.remove("dark");
    iconOfDarkMode.classList.remove("white-svg-fill");
    arrowLeft.classList.remove("white-svg-fill");
    document.body.style.backgroundColor = "#f2f2f2s";
  } else {
    currentMode.classList.add("dark");
    iconOfDarkMode.classList.add("white-svg-fill");
    arrowLeft.classList.add("white-svg-fill");
    document.body.style.backgroundColor = "#27363f";
    console.log(document.body)
  }
};
