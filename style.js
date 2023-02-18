let weather={
    "apikey": "5e477acf52991103ee93387f52e722c4",
    fetchweather:function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city 
        +"&units=metric&appid="
         + this.apikey
         )
        .then((Response) => Response.json())
        .then((data) => this.displayweather(data));

    },
    displayweather : function(data){
           const{name}= "data";
           const{icon,description}= data.weather[0];
           const{temp,humidity}= data.main;
           const{speed}= data.wind;
           console.log(name,icon,description,temp,humidity,speed);

           document.querySelector(".city").innerText= name;
           document.querySelector(".temp").innerText= temp + "°C";
           document.querySelector(".icon").src="http://openweathermap.org/img/wn/10d@2x.png";
           document.querySelector(".description").innerText= description;
           document.querySelector(".humidity").innerText= "Humidity: " + humidity + "%";
           document.querySelector(".wind").innerText= "Wind speed: " + speed + "kmph";
           

            }


            search:function(){
              this.fetchweather(  document.querySelector("sbar").value);
            }
};
 
document.
querySelector(".sbr")
.addEventListener("click",function(){
    weather.search();


});