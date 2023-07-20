let dia = document.querySelectorAll(".left p")[0];
	let diaSemana = document.querySelectorAll(".left p")[1];
	let mes = document.querySelectorAll(".right p")[0];
	let ano = document.querySelectorAll(".right p")[1];

	const today = new Date();

	const weeksDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

	dia.innerHTML = (today.getDate() < 10 ? "0" : "") + today.getDate();
	diaSemana.innerHTML = weeksDays[today.getDay()];
	mes.innerHTML = allMonths[today.getMonth()];
	ano.innerHTML = today.getFullYear();
;	

console.log(today)