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
      country_wrap.appendChild(option)
    }
  });
