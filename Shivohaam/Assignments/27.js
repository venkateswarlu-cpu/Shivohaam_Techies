const ele = document.getElementById("4");
ele.addEventListener("click", () => {
    alert("Clicked!");
    const ele1 = document.getElementById("3");
    ele1.style.color = "blue";
    const ele2 = document.getElementById("list-ele");
    ele2.style.color = "#33cc33";
    ele2.style.backgroundColor="#e6eeff"
    const head = document.getElementById("shiva");
    head.textContent="devRathod Online Classes";
});
const element = document.createElement("h3");
element.textContent="Ambati Venkateswarlu";
const bod = document.getElementById("body").appendChild(element);


const subject = document.getElementById("sub");
subject.style.marginLeft="22px";
subject.style.fontFamily="Palatino Linotype";

const head = document.getElementById("ss");
head.style.marginLeft="22px";
head.style.fontFamily="Pacifico";
head.style.color="#8f00b3";

const form = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");


const name1 = document.getElementById("name");
const email = document.getElementById("email");
const course = document.getElementById("course");
const age = document.getElementById("age");


