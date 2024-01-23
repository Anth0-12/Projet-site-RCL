// const ul = document.querySelector('ul');
// fetch("https://www.balldontlie.io/api/v1/games?seasons[]=2023&team_ids[]=2&per_page=100")
// .then(response => response.json())
// .then(data => { for (let i = 0; i < data.data.length; i++) {
//     const li = document.createElement('li');
//     li.innerText = data.data[i].date.slice(0, 10)
//     + " " + data.data[i].home_team.name + " " + data.data[i].home_team_score 
//     + " - " 
//     + " " + data.data[i].visitor_team_score + " " + data.data[i].visitor_team.name;
//     li.setAttribute("id", "calendrier");
//     ul.appendChild(li);
//     }
// });

const ul = document.querySelector('ul');

const url = "https://football536.p.rapidapi.com/squads?team_id=4";
const apiKey = "836bc2c2f5msh5b21ebbc27a63c3p1cee86jsn0d0f5dafa7e5";

fetch(url, {
  method: 'GET',
	headers: {
		'X-RapidAPI-Key': '836bc2c2f5msh5b21ebbc27a63c3p1cee86jsn0d0f5dafa7e5',
		'X-RapidAPI-Host': 'football536.p.rapidapi.com'
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error(`Erreur: ${response.status}`);
  }
  return response.json();
})
.then(data => {
  // Traitez les données renvoyées par l'API
  for (let i = 0; i < data.data.length; i++) {
    const li = document.createElement('li');
    li.innerText = data.data[i].players[i].full_name
    li.setAttribute("id", "calendrier");
    ul.appendChild(li);
    }
})
.catch(error => {
  // Gérez l'erreur en conséquence
  console.error(error);
});