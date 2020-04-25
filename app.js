var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://covid-19-data.p.rapidapi.com/totals?format=json",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "585fff8aa9msh403ca60151d5a64p1861f0jsne5f3b44b8490"
	}
}

$.ajax(settings).done(function (response) {
    let cases = response[0].confirmed
    document.getElementById('cases').innerText = cases
    //console.log(cases)
});

window.onload = function() {
Particles.init({
selector: '.background',
color: "#00FFFF",
maxParticles: '450'
  });
};