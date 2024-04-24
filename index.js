console.log('Hello World');

let bntCreate = document.querySelector("#btnCreate")
bntCreate.onclick = function () {
    let floatingProductName = document.querySelector("#floatingProductName")
    let floatingPrice = document.querySelector("#floatingPrice")
    createProduct(floatingProductName.value,floatingPrice.value);
};

function createProduct(productName, productPrice){
    if(!productName) return alert("productName, productPrice");
    else if(!productName) return alert("Product mush have a price");

    let product = {
        name: productName,
        price: productPrice,
    };

    localStorage.setItem("product", JSON.stringify(product));
    console.log("Creating product...", productName, productPrice);
}