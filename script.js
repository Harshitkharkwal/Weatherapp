let search=document.getElementById("search");
let submit=document.getElementById("submit");
let temp=document.getElementById("temp");
let cityN=document.getElementById("name");
let feels=document.getElementById("feels");
let Humid=document.getElementById("humidity");
let max=document.getElementById("max");
let min=document.getElementById("min");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fde371ab2amsh75798e2195bd68fp14aa5ejsnd67a69d3a7fc',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getweather=(city)=>{
	cityN.innerHTML=city;
	
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) => { 
		console.log(response)
		console.log(temp)
		temp.textContent=response.temp+"℃";
		feels.textContent=response.feels_like+"℃";
		Humid.textContent=response.humidity+"%";
		max.textContent=response.max_temp+"℃";
		min.textContent=response.min_temp+"℃";
		
		})
	.catch(err => console.error(err));
	
}
submit.addEventListener("click",(e)=>{
	e.preventDefault();
	getweather(search.value);
})
