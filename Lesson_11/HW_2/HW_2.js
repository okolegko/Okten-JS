const url = 'https://dummyjson.com/recipes';

const target = document.getElementsByClassName('target')[0];

fetch(url)
  .then(response => response.json())
  .then(recipesObject => {
    const { recipes } = recipesObject;

    for (const recipe of recipes) {
      const recipeDiv = document.createElement('div');
      recipeDiv.classList.add('recipe-container');

      for (const recipeKey in recipe) {
        if (Array.isArray(recipe[recipeKey])) {
          // Обробка масиву (наприклад, інгредієнти)
          const arrayAndTitleDiv = document.createElement('div');

          const title = document.createElement('div');
          title.innerText = `${recipeKey}:`;

          const ol = document.createElement('ol');
          const array = recipe[recipeKey];
          for (const item of array) {
            const li = document.createElement('li');
            li.innerText = item;
            ol.appendChild(li);
          }

          arrayAndTitleDiv.append(title, ol);
          recipeDiv.appendChild(arrayAndTitleDiv);
        } else {
          if (recipeKey !== 'image') {
            // Обробка текстових полів
            const keyDiv = document.createElement('div');
            keyDiv.innerText = `${recipeKey} : ${recipe[recipeKey]}`;
            recipeDiv.appendChild(keyDiv);
          }
        }
      }

      const img = document.createElement('img');
      img.src = recipe.image;
      recipeDiv.appendChild(img);

      // Додавання рецепту в цільовий блок
      target.appendChild(recipeDiv);
    }
  });
