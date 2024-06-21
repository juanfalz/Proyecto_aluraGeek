const productList = () => {
    return fetch("http://localhost:3000/products")
        .then(response => response.json())
        .catch((err) => console.log(err));
}

const createProducts = (name, price, image) => {
    return fetch("http://localhost:3000/products", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            price,
            image,
        })
    })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

const deleteProduct = (id) => {
    return fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE',
    })
    .then((res) => {
        if (!res.ok) {
            throw new Error('Error al eliminar el producto');
        }
        return res.json();
    })
    .catch((err) => console.log(err));
}

export const servicesProducts = {
    productList,
    createProducts,
    deleteProduct,
};
