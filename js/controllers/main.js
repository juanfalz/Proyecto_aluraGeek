import { servicesProducts } from "../services/product-services.js";

const productContainer=document.querySelector("[product-form]");
const form= document.querySelector("[product-form]");

function  createCard(name, price, image, id) {
    const card = document.createElement("div");
    card.classList.add("card")

    card.innerHTML=`
                    <img src="${image}" alt="${name}">
                <div class="card-container--info">
                    <p>${name}</p>
                    <div class="card-container--value">
                        <p>${price}</p>
                        <button class"delete-button" data-id="${id}">
                        <img src="imagenes/eliminar.png" alt="Eliminar">
                        </button>
                    </div>
                </div>
    `;

    productContainer.appendChild(card);
    return card;
}

const render = async()=>{
    try {
        const listProduct=await servicesProducts.productList();
        listProduct.array.forEach(product => {
            productContainer.appendChild(
                createCard(product.name, 
                    product.price, 
                    product.image, 
                    product.id)
            )
        });
    } catch (error) {
        console.log(error)
    }

}

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const name=document.querySelector("[product-name']").value;
    const price=document.querySelector("[product-price]").value;
    const image=document.querySelector("[product-image]").value;

    servicesProducts.createProducts(name,price,image).then((res)=>console.log(res)).catch((err)=>console.log(err))
})

render()