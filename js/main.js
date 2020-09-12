let hour   = document.querySelector(".hour"),
	minute = document.querySelector(".minute"),
	second = document.querySelector(".second");


let	time = setInterval(function(){

		let date = new Date(),
			hours = date.getHours(),
			minutes = date.getMinutes(),
			seconds = date.getSeconds();

			secDegree  = (seconds / 60 * 360) + 90,	
			minDegree  = (minutes / 60 * 360) + 90,
			hourDegree = (hours / 12 * 360 )  + 90;
			
			second.style.transform = `rotate(${secDegree}deg)`;
			minute.style.transform = `rotate(${minDegree}deg)`;
			hour.style.transform = `rotate(${hourDegree}deg)`;

},10);