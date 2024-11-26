let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];

sessionsList.push(new Date().toLocaleString());

localStorage.setItem('sessionsList', JSON.stringify(sessionsList));


