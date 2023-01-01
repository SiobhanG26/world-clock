function updateTime() {
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("Do MMMM YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("Do MMMM YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("Do MMMM YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let moscowElement = document.querySelector("#moscow");
  if (moscowElement) {
    let moscowDateElement = moscowElement.querySelector(".date");
    let moscowTimeElement = moscowElement.querySelector(".time");
    let moscowTime = moment().tz("Europe/moscow");

    moscowDateElement.innerHTML = moscowTime.format("Do MMMM YYYY");
    moscowTimeElement.innerHTML = moscowTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = newYorkTime.format("Do MMMM YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
  <div>
            <h2> ${cityName}</h2>
            <div class="date">${cityTime.format("Do MMMM YYYY")}</div>
          </div>
            <div class="time">${cityTime.format(
              "h:mm:ss"
            )}<small>${cityTime.format("A")}</small></div>
        </div>
        <a href="/">Go back</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#selected-city");
citiesSelectElement.addEventListener("change", updateCity);
