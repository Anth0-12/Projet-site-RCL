var checkbox = document.getElementById('stats');
var checkbox2 = document.getElementById('match');
var elementCible = document.getElementById('rencontre');
var elementCible2 = document.getElementById('stats_rencontre');

checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
      elementCible.style.display = "none";
      elementCible2.style.display = "block";
} else  {
    elementCible.style.display = "block"; // ou "" pour afficher en respectant le style existant
    elementCible2.style.display = "none";
    } 
 }
);
checkbox2.addEventListener('change', function() {
  if (checkbox2.checked) {
      elementCible.style.display = "block"; // ou "" pour afficher en respectant le style existant
      elementCible2.style.display = "none";
} else  {
    elementCible.style.display = "none";
    elementCible2.style.display = "block";
    } 
 }
);