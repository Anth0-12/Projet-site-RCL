const ul = document.querySelector('ul');
fetch("https://www.balldontlie.io/api/v1/games?seasons[]=2023&team_ids[]=2&per_page=100")
.then(response => response.json())
.then(data => { for (let i = 0; i < data.data.length; i++) {
    const li = document.createElement('li');
    li.innerText = data.data[i].date.slice(0, 10)
    + " " + data.data[i].home_team.name + " " + data.data[i].home_team_score 
    + " - " 
    + " " + data.data[i].visitor_team_score + " " + data.data[i].visitor_team.name;
    li.setAttribute("id", "calendrier");
    ul.appendChild(li);
    }
});