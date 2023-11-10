// for displaying card body details for each country ///

const Country1 = "Afghanistan";
fetch(`https://restcountries.com/v3.1/name/${Country1}`)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("header-1").innerText = data[0].name.common;
    document.getElementById(
      "card-details-1"
    ).innerText = `Capital:${data[0].capital[0]}
     Region: ${data[0].region} 
     Lat:${data[0].capitalInfo.latlng[0]}; 
     Lng :${data[0].capitalInfo.latlng[1]}  
     CountryCode:${data[0].idd.root}${data[0].idd.suffixes[0]}`;
    const Country1_Flag1 = data[0].flags.png;
    document.getElementById("img-1").setAttribute("src", Country1_Flag1);
  });

const country2 = "Åland Islands";
fetch(`https://restcountries.com/v3.1/name/${country2}`)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("header-2").textContent = data[0].name.common;
    document.getElementById(
      "card-details-2"
    ).textContent = `Capital :${data[0].capital[0]}
           Region:${data[0].region} 
           Lat:${data[0].capitalInfo.latlng[0]}; 
           Lng :${data[0].capitalInfo.latlng[1]}
           CountryCode:${data[0].idd.root}${data[0].idd.suffixes[0]}`;
    const Country2_Flag2 = data[0].flags.png;
    document.getElementById("img-2").setAttribute("src", Country2_Flag2);
  });

const country3 = "Albania";
fetch(`https://restcountries.com/v3.1/name/${country3}`)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("header-3").textContent = data[0].name.common;
    document.getElementById(
      "card-details-3"
    ).textContent = `capital:${data[0].capital[0]}
                    Region: ${data[0].region}
                    Lat:${data[0].capitalInfo.latlng[0]};Lng:${data[0].capitalInfo.latlng[1]} 
                    CountryCode:${data[0].idd.root}${data[0].idd.suffixes[0]}`;
    const Country3_Flag3 = data[0].flags.png;
    document.getElementById("img-3").setAttribute("src", Country3_Flag3);
  });

// for creating click event for displaying weather ////

document.getElementById("weatherInfo-1").addEventListener("click", () => {
  const country = "Afghanistan";
  const api = "db5815b12d6b4409269c47ffceac6ce4";

  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      const capital = data[0].capital[0];
      return fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api}`
      );
    })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(
        "details1"
      ).innerHTML = `Weather in: ${data.name} ${data.weather[0].main}, 
                       Temp: ${data.main.temp}`;
    })
    .catch((err) => {
      console.log("Error:", err);
    });
});

document.getElementById("weatherInfo-2").addEventListener("click", () => {
  const country = "Åland Islands";
  const api = "db5815b12d6b4409269c47ffceac6ce4";

  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      const capital = data[0].capital[0];
      return fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api}`
      );
    })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(
        "details2"
      ).innerHTML = `Weather in: ${data.name} ${data.weather[0].main}, 
                       Temp: ${data.main.temp}`;
    })
    .catch((err) => {
      console.log("Error:", err);
    });
});

document.getElementById("weatherInfo-3").addEventListener("click", () => {
  const country = "Albania";
  const api = "db5815b12d6b4409269c47ffceac6ce4";

  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      const capital = data[0].capital[0];
      return fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api}`
      );
    })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(
        "details3"
      ).innerHTML = `Weather in: ${data.name},${data.weather[0].main}, 
          Temp: ${data.main.temp}`;
    })
    .catch((err) => {
      console.log("Error:", err);
    });
});
