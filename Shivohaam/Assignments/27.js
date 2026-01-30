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


document.getElementById("studentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let course = document.getElementById("course").value.trim();
  let age = document.getElementById("age").value.trim();

  let valid = true;

  if ((name === "") || (name.length < 3)){
      alert("Name is Required");
      valid = false;
  } 
  if ((email === "") || ((!email.includes("@") || !email.includes(".com"))) ){
    alert("Email is Not Valid");
    valid = false;
  }

  if (course === "") {
    alert("Course is Not Valid");
    valid = false;
  }

  if ((age === "") || (parseInt(age)<18)){
    alert("Age is Not Valid");
    valid = false;
  }

  if (valid) {
    let studentList = document.getElementById("studentList");
    let entry = document.createElement("div");
    entry.classList.add("entry");
    entry.textContent = `Name: ${name} | Email: ${email} | Course: ${course} |  Age: ${age}`;
    studentList.appendChild(entry);

    document.getElementById("studentForm").reset();
  }
});





