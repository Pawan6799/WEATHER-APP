
let homePage = document.getElementById("homePage");
let weatherPage = document.getElementById("weatherPage");
let headerWeather = document.getElementById("headerWeather");
let weatherHome = document.getElementById("weatherHome");
let homeCheckBtn = document.getElementById("homeCheckBtn");
let weatherWeather = document.getElementById("weatherWeather");

let weathersubmitBtn = document.getElementById("submitBtn");
let weathercityName = document.getElementById("cityName");
let weathercityId = document.getElementById("cityId");

let currentDays = document.getElementById("currentDays");
let currentDates = document.getElementById("currentDates");

let headerLinkDiv = document.getElementById("headerLinkDiv");
let headerLinkDivs = document.getElementById("headerLinkDivs");
let weatherMain= document.getElementById("weatherMain");


//  <------   Home Page Code Start Here  ------>

headerWeather.addEventListener("click", (e) => {
    e.preventDefault();
    homePage.classList.add("hide");
    weatherPage.classList.remove("hide");
    hideMenu();
})


let weatherAbout = document.getElementById("weatherAbout");
let aboutPage = document.getElementById("aboutPage");
weatherAbout.addEventListener("click", (e) => {
    e.preventDefault();
    homePage.classList.add("hide");
    weatherPage.classList.add("hide");
    aboutPage.classList.remove("hide");
})

homeCheckBtn.addEventListener("click", (e) => {
    e.preventDefault();
    homePage.classList.add("hide");
    weatherPage.classList.remove("hide");
})

// <------ Menu Icon Code Here Start ------>


function showMenu() {
    headerLinkDiv.style.right = "0";
}
function hideMenu() {
    headerLinkDiv.style.right = "-20rem";
}

// <------ Menu Icon Code  End ------>

//  <------   Home Page Code End Here  ------>




//  <------   Weather Page Code Start Here  ------>

// //   <------   Updating Weather  ------>

function showMenus() {
    headerLinkDivs.style.right = "0";
}
function hideMenus() {
    headerLinkDivs.style.right = "-20rem";
}

weatherHome.addEventListener("click", () => {
    homePage.classList.remove("hide");
    weatherPage.classList.add("hide");
    hideMenus();

})

weathersubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (weathercityName.value == '') {
        weathercityId.innerText = "Please Enter Your City";
    }
    else {
        let temp = document.getElementById("temp");
        let middlelayer = document.getElementById("middlelayer");
        let tempStatus = document.getElementById("tempStatus");

        const weatherFunc = async () => {
            try {
                middlelayer.style.visibility = "inherit";
                weatherMain.style.visibility = "inherit";
                let weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${weathercityName.value}&units=metric&appid=8bd23fc9353c779b40367b940a1f2f87`
                let fetchWeather = fetch(weatherURL);
                let fetchData = await fetchWeather;
                let dataJson = await fetchData.json();
                console.log(dataJson);
                weathercityId.innerText = `${dataJson.name} , ${dataJson.sys.country}`;
                temp.innerText = dataJson.main.temp;
                weatherMain.innerText=dataJson.weather[0].main;

                const tempMood = dataJson.weather[0].main;

                if (tempMood == "Clear") {
                    tempStatus.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
                }
                else if (tempMood == "Clouds" || tempMood == "Cloud" || tempMood == "Fog" || tempMood == "Smoke") {
                    tempStatus.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
                }
                else if (tempMood == "Rain" || tempMood == "Rains") {
                    tempStatus.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
                }
                else {
                    tempStatus.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
                }

            } catch {
                middlelayer.style.visibility = "hidden";
                weatherMain.style.visibility = "hidden";
                weathercityId.innerText = "Please Enter The City Name Properly";
            }

        }
        weatherFunc();

    }
})
weatherWeather.addEventListener("click",(e)=>{
   e.preventDefault();
})
//   <------   Updating Days  ------>

const getCurrentDays = () => {
    let weekDays = new Array(7);
    weekDays[0] = "Sunday";
    weekDays[1] = "Monday";
    weekDays[2] = "Tuesday";
    weekDays[3] = "Wednesday";
    weekDays[4] = "Thursday";
    weekDays[5] = "Friday";
    weekDays[6] = "Saturday";
    let currentTime = new Date();
    let days = weekDays[currentTime.getDay()];
    currentDays.innerText = days;
}
getCurrentDays();

//   <------   Updating Months  ------>

const getCurrentDate = () => {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let currDates = new Date();
    currentDates.innerText = `${currDates.getDate()} ${months[currDates.getMonth()]} ${currDates.getFullYear()}`
}
getCurrentDate();


//  <------   Weather Page Code End Here  ------>



//  <------   About Page Code Start Here  ------>

let backToHomePage = document.getElementById("backToHomePage");
backToHomePage.addEventListener("click", (e) => {
    e.preventDefault();
    hideMenu();
    homePage.classList.remove("hide");
    aboutPage.classList.add("hide");
})

//  <------   About Page Code End Here  ------>