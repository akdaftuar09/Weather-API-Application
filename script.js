const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");
       function checkWeather(city) {
            fetch("https://api.weatherapi.com/v1/current.json?key=9fc2e5b3947f4f46b5a94210241007&q=" + city)
            .then(res=> res.json())
            .then(data => {

            document.querySelector(".city").innerHTML = data.location.name + "," + " " +  data.location.country;
            document.querySelector(".forecast").innerHTML = data.current.condition.text;
            document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°C";
            document.querySelector(".date").innerHTML = data.location.localtime;
            document.querySelector(".feels").innerHTML = data.current.feelslike_c + "°C";
            document.querySelector(".humidity").innerHTML = data.current.humidity + "%" ;
            document.querySelector(".wind").innerHTML = data.current.wind_kph + " kph ";

            let condition = data.current.condition.text.toLowerCase();
            
            if(condition.includes("mist")){
                weatherIcon.src = "images/mist.png";
            }
            else if(condition.includes("drizzle")){
                weatherIcon.src = "images/drizzle.png";
            }
            else if(condition.includes("rain") || condition.includes("shower")){
                weatherIcon.src = "images/rain.png";
            }
            else if(condition.includes("thunder") || condition.includes("lightning")){
                weatherIcon.src = "images/thunderstrom.png";
            }
           
            else if(condition.includes("cloudy") || condition.includes("overcast")){
                weatherIcon.src = "images/cloudy.png";
            }
            else if(condition.includes("sunny") || condition.includes("clear")){
                weatherIcon.src = "images/sun.png";
            }
            else if(condition.includes("snow")){
                weatherIcon.src = "images/snowy.png";
            }
            else if(condition.includes("windy")){
                weatherIcon.src = "images/wind.png";
            }
            else if(condition.includes("fog")){
                weatherIcon.src = "images/fog.png";
            }
            else {
                weatherIcon.src = "images/cloudy.png"
            }
            document.querySelector(".weather").style.display = "block";

        

        });


    }
   
       searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value);
       })
       