//This object stores background images for use in the dynamic background
var backgrounds={
  rain:'https://static.pexels.com/photos/39811/pexels-photo-39811.jpeg',
  clear:'https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg',
  snow:'https://images.pexels.com/photos/60561/winter-snow-nature-60561.jpeg',
  mist:'https://images.pexels.com/photos/4827/nature-forest-trees-fog.jpeg',
  thunder:'https://images.pexels.com/photos/53459/lightning-storm-weather-sky-53459.jpeg',
  clouds: 'https://images.pexels.com/photos/414659/pexels-photo-414659.jpeg'
};

$(window).on("load", function() {
  if (navigator.geolocation) {
    //checks for geolocation support
    navigator.geolocation.getCurrentPosition(function(position) {
   //locates user position
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;

      let url =
        "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=" +
        latitude +
        "&lon=" +
        longitude +
        "&units=metric&appid=88b17e9cb957fd1a007c4f39712ceaa4";
//Makes API GET request for JSON using location info
      $.getJSON(url, function(data) {
        console.log(data);
        let temp = data.main.temp;
        let json=data;
        let cond=[];
        let body=$("body");

        //can be more than one weather condition, weatherCond loops through the possibilities
        function weatherCond(json){
          for (let i=0;i<json.weather.length;i++){
            cond.push(json.weather[i].main);
            return;
          }
        }
        //appends received data to page
        $("#location").append(
          "<h3>Your location: " +
            json.name +
            ", " +
            json.sys.country +
            "</h3>" +
            "<h4>" +
            json.weather[0].main +
            " , " +
            json.weather[0].description +
            "</h4>"+"<h4>"+temp+" °C</h4>"
        );
        $("#weather-data").append(

            "<h4>Wind speed: " +
            json.wind.speed +
            "</h4>"

        );
        weatherCond(json);
        console.log(cond);

//loops through all the values stored in the cond array
     for (var v=0;v<cond.length;v++){
       switch(cond[v]){
         case 'Rain':
           console.log('It is raining');
           body.addClass("background");
           if (body.hasClass("background")){
             body.css({
               backgroundImage:"url("+backgrounds.rain+")",
               backgroundSize:"cover",
               backgroundRepeat:"no-repeat",
               backgroundPosition:"center",
               backgroundAttachment:"fixed",
               height:"100%"



             });
           }
           break;

        case 'Thunderstorm':
           console.log('It is thundery');
           body.addClass("background");
           if (body.hasClass("background")){
             body.css({
             backgroundImage: "url("+backgrounds.thunder+")",
             backgroundSize:"cover",
             backgroundRepeat:"no-repeat",
             backgroundPosition:"center",
             backgroundAttachment:"fixed",
             height:"100%"
           });
           }
           break;

        case 'Clouds':
          console.log('It is cloudy');
          body.addClass("background");
          if (body.hasClass("background")){
            body.css({
            backgroundImage:"url("+backgrounds.clouds+")",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat",
            backgroundPosition:"center",
            backgroundAttachment:"fixed",
            height:"100%"
          });
          }
           break;
        case 'Drizzle':
           console.log('It is drizzly');
           body.addClass("background");
           if (body.hasClass("background")){
             body.css({
             backgroundImage:"url(" + backgrounds.rain + ")",
             backgroundSize:"cover",
             backgroundRepeat:"no-repeat",
             backgroundPosition:"center",
             backgroundAttachment:"fixed",
             height:"100%"
           });
           }
           break;
        case 'Clear':
           console.log('It is clear');
           body.addClass("background");
           if (body.hasClass("background")){
             body.css({
             backgroundImage: "url("+backgrounds.clear+")",
             backgroundSize:"cover",
             backgroundRepeat:"no-repeat",
             backgroundPosition:"center",
             backgroundAttachment:"fixed",
             height:"100%"
           });
           }
           break;
        case 'Mist':
        case 'Fog':
           console.log('It is very atmospheric');
           body.addClass("background");
           if (body.hasClass("background")){
             body.css({
             backgroundImage:"url("+backgrounds.mist+")",
             backgroundSize:"cover",
             backgroundRepeat:"no-repeat",
             backgroundPosition:"center",
             backgroundAttachment:"fixed",
             height:"100%"
           });

           }
           break;
        case 'Snow':
           console.log('It is snowing');
           body.addClass("background");
           if (body.hasClass("background")){
             body.css({
             backgroundImage:"url("+backgrounds.snow+")",
             backgroundSize:"cover",
             backgroundRepeat:"no-repeat",
             backgroundPosition:"center",
             backgroundAttachment:"fixed",
             height:"100%"
           });
           }
           break;

       }
     }

      });
    });
  }
});
