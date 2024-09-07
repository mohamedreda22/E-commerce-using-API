fetch('https://dummyjson.com/products')
.then(response => response.json())
.then(data => {
    const productsDiv = document.getElementById('products');
    data.products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImage = document.createElement('img');
        productImage.src = product.thumbnail;
        productImage.alt = product.title;

        const productName = document.createElement('h3');
        productName.textContent = product.title;

        const productPrice = document.createElement('p');
        productPrice.textContent = 'Price: $' + product.price;
        productPrice.classList.add('price');


        const showMoreButton = document.createElement('a');
        showMoreButton.href = `productDetails.html?id=${product.id}`;
        showMoreButton.classList.add('show-more-button');
        showMoreButton.textContent = 'Show More';

        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productCard.appendChild(showMoreButton);

        productsDiv.appendChild(productCard);
    });
})
.catch(error => {
    console.error('Error:', error);
});
        // Function to get URL parameters
        function getQueryParam(param) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(param);
        }

        const productId = getQueryParam('id');

        fetch(`https://dummyjson.com/products/${productId}`)
            .then(response => response.json())
            .then(product => {
                const productDetailsDiv = document.getElementById('product-details');

                const productCard = document.createElement('div');
                productCard.classList.add('product-card');

                const productImage = document.createElement('img');
                productImage.src = product.thumbnail; 
                productImage.alt = product.title;

                const productName = document.createElement('h3');
                productName.textContent = product.title;

                const productPrice = document.createElement('p');
                productPrice.textContent = 'Price: $' + product.price;
                productPrice.classList.add('price');

                const productDescription = document.createElement('p');
                productDescription.textContent = product.description;
                productDescription.classList.add('description')

                const additionalDetails = document.createElement('div');
                additionalDetails.classList.add('additional-details');
                additionalDetails.innerHTML = `
                    <p><strong>Brand:</strong> ${product.brand}</p>
                    <p><strong>SKU:</strong> ${product.sku}</p>
                    <p><strong>Stock:</strong> ${product.stock}</p>
                    <p><strong>Rating:</strong> ${product.rating}</p>
                    <p><strong>Warranty:</strong> ${product.warrantyInformation}</p>
                    <p><strong>Shipping:</strong> ${product.shippingInformation}</p>
                    <p><strong>Return Policy:</strong> ${product.returnPolicy}</p>
                `;

                const productBuy = document.createElement('button');
                productBuy.textContent = 'Buy Now';
                productBuy.classList.add('buy-button');
                productBuy.addEventListener('click', () => {
                    alert('Thank you for your purchase!');
                    window.location.href = '/';
                });


                productCard.appendChild(productImage);
                productCard.appendChild(productName);
                productCard.appendChild(productPrice);
                productCard.appendChild(productDescription);
                productCard.appendChild(additionalDetails);
                productCard.appendChild(productBuy);
                

                productDetailsDiv.appendChild(productCard);
            })
            .catch(error => {
                console.error('Error:', error);
            });