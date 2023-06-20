window.onload = function() {
const btn = document.querySelector("#theme");
if(localStorage.getItem('theme')=='dark'){
  btn.checked = true;
  document.body.classList.remove("light-theme");
  document.body.classList.add("dark-theme");
}else{
  btn.checked = false;
  document.body.classList.remove("dark-theme");
  document.body.classList.add("light-theme");
}
btn.addEventListener("change", () => {
  if (btn.checked == true) {
    localStorage.setItem('theme', 'dark');
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    localStorage.setItem('theme', 'light');
  }
});
}