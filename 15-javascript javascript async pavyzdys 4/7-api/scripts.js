async function getProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products', {
            // method: 'GET',
            headers: {
                Accept: 'application/json',
                // Authorization: 'Bearer {token}'
            }
        });
        // console.log(response);
        const products = await response.json();
        // console.log(products);
        return products;
    } catch (error) {
        throw error;
    }
}

getProducts().then(produktai => {
    // console.log(produktai);

    let blokas = document.querySelector('.products');
    // console.log(blokas);

    let html = '';

    for (const produktas of produktai) {
        // console.log(produktas);
        html += `<div class="product">
                    <h3>${produktas.title}</h3>
                    <p>${produktas.description}</p>
                    <img src="${produktas.image}" alt="${produktas.title}">
                    <p><strong>Kaina:</strong> ${produktas.price} €</p>
                </div>`;
    }

    blokas.innerHTML = html;

}).catch(klaida => {
    console.log(klaida);
});
