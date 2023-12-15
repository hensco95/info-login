let id = (id) => {
  return document.getElementById(id);
};
let class_name = (class_name) => {
  return document.getElementsByClassName(class_name);
};

let submit_btn = document.getElementById("submit_btn");

submit_btn.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(e.target)

  validation(firstName, 0, errMsg);
  validation(lastName, 1, errMsg);
  validation(gender, 2, errMsg);
  validation(dateOfBirth, 3, errMsg);
  validation(email, 4, errMsg);
  validation(education, 5, errMsg);
  validation(country, 6, errMsg);
  validation(city, 7, errMsg);
  validation(employ, 8, errMsg);
  validation(pNumber, 9, errMsg);
  validation(school, 10, errMsg);
  validation(course, 11, errMsg);
  validation(info, 12, errMsg);

  
  
});

let firstName = id("f_name");
lastName = id("l_name");
gender = id("gender");
dateOfBirth = id("dob");
email = id("email");
education = id("education");
country = id("country");
city = id("city");
employ = id("employmentStatusInput");
pNumber = id("number");
school = id("school");
course = id("course");
info = id("info");
errMsg = class_name("err_txt");

let validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let validation = (id, serial, message) => {
  if (id === email) {
    if (!validRegex.test(id.value.trim())) {
      errMsg[serial].textContent = "Please enter a valid email address";
      errMsg[serial].style.display = "block";
      id.classList.add("err");
    } else {
      errMsg[serial].style.display = "none";
      id.classList.remove("err");
    }
  } else if (id.value.trim() === "") {
    errMsg[serial].style.display = "block";
    id.classList.add("err");
  } else {
    errMsg[serial].style.display = "none";
    id.classList.remove("err");
  }
};

function getCountries() {
  let country_wrap = document.getElementById("country");

  fetch("countries.json")
    .then((response) => {
      return response.json();
    })
    .then((countries) => {
      for (const country of countries) {
        const option = document.createElement("option");
        option.value = country;
        option.textContent = country;
        country_wrap.appendChild(option);
      }
    });
}

getCountries();
