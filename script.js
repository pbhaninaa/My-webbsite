let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}
window.onscroll =()=>{

}
let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});
// ===============================================================
document.getElementById("card-title").innerHTML = "Philasande Bhani";
const d = new Date();
let year = d.getFullYear();
let age = year - 1998;
let experience_years = year - 2021;
document.getElementById("years").innerHTML = experience_years;
document.getElementById("age").innerHTML = age;
document.getElementById("Experience").innerHTML =
  year - 2021 + "+ years of Working Experience";
document.getElementById("prefAmount").innerHTML =
  "Prefered Salary R15 000+ monthly Or R150 000+ anually";
document.getElementById("idealJob").innerHTML =
  " I would like to assist the development team with all aspects of" +
  "software design and coding. I would like my primary role to be learning the codebase, attending" +
  "design meetings, writing basic code, fixing bugs, and assisting the Development Manager in all " +
  "design-related tasks. I am most proficient in using Java and Spring Boot as a framework, and I " +
  "would like to work with Microsoft Azure to manage my projects. I am looking for a company that " +
  "will aid in my development and supports my career growth. Please note that my notice period is " +
  "1 week.";
document.getElementById("education-description").innerHTML =
  "Walter Sisulu University, February 2017 – November 2020";
document.getElementById("education").innerHTML =
  "National Diploma (NDip) in Information Technology";
document.getElementById("education-description1").innerHTML =
  "Ntabezulu Senior Secondary School, January 2013 – November 2015";
document.getElementById("education1").innerHTML = "Matric";

document.getElementById("remote-item").innerHTML =
  "Based in anywhere in the globe";
document.getElementById("local").innerHTML = "Office Based";
document.getElementById("local-item").innerHTML =
  "Based in any province in South Africa";
document.getElementById("hybrid").innerHTML = "Hybrid";
document.getElementById("hybrid-item").innerHTML =
  "Based in any province in South Africa";
function project() {
  alert("Soon to be published");
}
function backHome() {
  window.location.href = "home.html";
}
function contact() {
  window.location.href = "contact.html";
  alert("Contact not yet published",navigator.geolocation.getCurrentPosition(showPosition,showError));
}
function locateMe(){
 alertgetCurrentPosition()
}


