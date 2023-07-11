function startProgressBar1() {
    const progressBar1 = document.querySelector('.progress1');
    let width = 0;
    const interval = setInterval(frame, 10); // Appelle la fonction 'frame' toutes les 10 millisecondes
  
    function frame() {
      if (width >= 50) {
        clearInterval(interval); // Arrête l'animation lorsque la barre atteint 50%
      } else {
        width++;
        progressBar1.style.width = width + '%'; // Met à jour la largeur de la barre de progression
      }
    }
  }
  startProgressBar1();

function startProgressBar2() {
    const progressBar2 = document.querySelector('.progress2');
    let width = 0;
    const interval = setInterval(frame, 10); // Appelle la fonction 'frame' toutes les 10 millisecondes
  
    function frame() {
      if (width >= 50) {
        clearInterval(interval); // Arrête l'animation lorsque la barre atteint 50%
      } else {
        width++;
        progressBar2.style.width = width + '%'; // Met à jour la largeur de la barre de progression
      }
    }
  }
  startProgressBar2();

function startProgressBar3() {
    const progressBar3 = document.querySelector('.progress3');
    let width = 0;
    const interval = setInterval(frame, 10); // Appelle la fonction 'frame' toutes les 10 millisecondes
  
    function frame() {
      if (width >= 50) {
        clearInterval(interval); // Arrête l'animation lorsque la barre atteint 50%
      } else {
        width++;
        progressBar3.style.width = width + '%'; // Met à jour la largeur de la barre de progression
      }
    }
  }
  startProgressBar3();

function startProgressBar4() {
    const progressBar4 = document.querySelector('.progress4');
    let width = 0;
    const interval = setInterval(frame, 10); // Appelle la fonction 'frame' toutes les 10 millisecondes
  
    function frame() {
      if (width >= 50) {
        clearInterval(interval); // Arrête l'animation lorsque la barre atteint 50%
      } else {
        width++;
        progressBar4.style.width = width + '%'; // Met à jour la largeur de la barre de progression
      }
    }
  }
  startProgressBar4();

function startProgressBar5() {
    const progressBar5 = document.querySelector('.progress5');
    let width = 0;
    const interval = setInterval(frame, 10); // Appelle la fonction 'frame' toutes les 10 millisecondes
  
    function frame() {
      if (width >= 50) {
        clearInterval(interval); // Arrête l'animation lorsque la barre atteint 50%
      } else {
        width++;
        progressBar5.style.width = width + '%'; // Met à jour la largeur de la barre de progression
      }
    }
  }
  startProgressBar5();