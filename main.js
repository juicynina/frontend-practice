const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburguesa = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const menuShoppingCart = document.querySelector('.navbar-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamburguesa.addEventListener('click', toggleMenuHamburguesa)
menuShoppingCart.addEventListener('click', toggleShoppingCart)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    mobileMenu.classList.add('inactive')
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.add('inactive')
} 

function toggleMenuHamburguesa() {
    mobileMenu.classList.toggle('inactive');
    desktopMenu.classList.add('inactive')
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.add('inactive')
} 

function toggleShoppingCart() {
    shoppingCartContainer.classList.toggle('inactive');
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    productDetailContainer.classList.add('inactive')
}

function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive')
    desktopMenu.classList.add('inactive')
    shoppingCartContainer.classList.add('inactive')
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive')
}

const productList = []
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/1595483/pexels-photo-1595483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
});
productList.push({
    name: 'Screen',
    price: 300,
    image: 'https://images.pexels.com/photos/159394/pc-computer-android-android-pc-159394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
});
productList.push({
    name: 'Headphones',
    price: 90,
    image: 'https://images.pexels.com/photos/610945/pexels-photo-610945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
});

/* <div class="product-card">
    <img src="https://images.pexels.com/photos/1595483/pexels-photo-1595483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" class="product-img">
    <div class="product-info">
        <div>
            <p>$120.00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="../icons/bt_add_to_cart.svg" alt="/">
        </figure>
    </div>
</div>  */
// product = {name, price, image} -> product.image (en vez de colocar el 
        // link a la imagen que coloca como se buscaría en el array/objeto)

function renderProducts(arr) {
    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // product = {name, price, image} -> product.image (en vez de colocar el 
        // link a la imagen que coloca como se buscaría en el array/objeto)
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside)

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
renderProducts(productList);
renderProducts(productList);