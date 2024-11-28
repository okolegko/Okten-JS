const cartsDiv = document.getElementById('carts');

fetch('https://dummyjson.com/carts')
  .then(response => response.json())
  .then(cartsObject => {
    const { carts } = cartsObject;

    for (const cart of carts) {
      const cartContainer = document.createElement('div');
      cartContainer.classList.add('cart-container');

      const cartInfo = document.createElement('div');
      cartInfo.innerText = `
                    "total": ${cart.total},
                    "discountedTotal": ${cart.discountedTotal},
                    "userId": ${cart.userId},
                    "totalProducts": ${cart.totalProducts},
                    "totalQuantity": ${cart.totalQuantity}
                `;

      const productList = document.createElement('ol');
      for (const product of cart.products) {
        const productItem = document.createElement('li');

        const productInfo = document.createElement('p');
        productInfo.innerText = `
                      "id": ${product.id},
                      "title": ${product.title},
                      "price": ${product.price},
                      "quantity": ${product.quantity},
                      "total": ${product.total},
                      "discountPercentage": ${product.discountPercentage},
                      "discountedTotal": ${product.discountedTotal},
                    `;

        const productImage = document.createElement('img');
        productImage.src = product.thumbnail;

        productItem.append(productImage, productInfo);
        productList.appendChild(productItem);
      }

      cartContainer.append(cartInfo, productList);
      cartsDiv.appendChild(cartContainer);
    }
  });
