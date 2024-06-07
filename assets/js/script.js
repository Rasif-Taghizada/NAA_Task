function getProductData() {
    fetch('https://fakestoreapi.com/products').then(response => response.json()).then(data => {
        let products = data;
        let output = '';
        products.forEach((product, index) => {
            if (index < 3) {
                output += `
            <div class="category__card">
                <div class="category__card-image">
                    <img src="${product.image}" alt="${product.title}" />
                </div>

                <div class="category__card-content">
                    <p class="category__card-title">${product.title}</p>
                    <p class="category__card-price">$${product.price}</p>
                </div>

                <p class="category">${product.category}</p>
            </div>
            `
            }
        });

        document.querySelector('.category__cards-container').innerHTML = output;
    });
}
getProductData();