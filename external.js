
let text = "Visit W3s W3S W3sSchools";
let pattern = /W3s/g;
let result = pattern.source;

let dmo = document.getElementById("demo")

dmo.style.background = 'yellow';

dmo.innerHTML = result;

