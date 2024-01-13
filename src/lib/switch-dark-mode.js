export const switchDarkMode = () => {
  const currentMode = document.querySelector("html");
  const iconOfDarkMode = document.querySelector("header > button > img");
  const arrowLeft = document.getElementById("arrowLeft");

  if (currentMode.classList.contains("dark")) {
    currentMode.classList.remove("dark");
    iconOfDarkMode.classList.remove("white-svg-fill");
    arrowLeft.classList.remove("white-svg-fill");
    document.body.style.backgroundColor = "hsl(0, 0%, 95%)";
  } else {
    currentMode.classList.add("dark");
    iconOfDarkMode.classList.add("white-svg-fill");
    arrowLeft.classList.add("white-svg-fill");
    document.body.style.backgroundColor = "#27363f";
  }
};
