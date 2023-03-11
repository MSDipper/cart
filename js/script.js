
// Goods counter
window.addEventListener('click', (e) => {
    let counter;
    if (e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus') {
        const counterWrapper = e.target.closest('.counter-wrapper');
        counter = counterWrapper.querySelector('[data-counter]');
    };
    if (e.target.dataset.action === 'plus') {
		counter.innerText = ++counter.innerText;
	};
    if (e.target.dataset.action === 'minus') {
        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        } else if (e.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
            e.target.closest('.cart-item').remove();
            calcCartPriceAndDelivery();
        };
    };
	if (e.target.hasAttribute('data-action') && e.target.closest('.cart-wrapper')) {
        toggleCartStatus();
        calcCartPriceAndDelivery();
	};
});


// Add product to cart
const cartList = document.querySelector('.shopping_bag');
console.log(cartList);
window.addEventListener('click', (e) => {
    if (e.target.hasAttribute('data-cart')) {
		const card = e.target.closest('.div_list_product');
        const productData = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.img-responsive').getAttribute('src'),
			title: card.querySelector('.title-h3').innerText,
			price: card.querySelector('.price').innerText,
			quantity: card.querySelector('[data-counter]').innerText,
		};
        const productToCart = cartList.querySelector(`[data-id="${ productData.id }"]`);

        if (productToCart) {
			const counterElement = productToCart.querySelector('[data-counter]');
			counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productData.quantity);
		} else {
            const cartItemHTML = `
                        <div class="cart-item" data-id=${ productData.id }>
                            <div class="cart-item__top">
                                <div class="cart-item__img">
                                    <img src=${ productData.imgSrc } alt="">
                                </div>
                                <div class="cart-item__desc">
                                    <div class="cart-item__title">${ productData.title }</div>

                                    <!-- cart-item__details -->
                                    <div class="cart-item__details">

                                        <div class="items items--small counter-wrapper">
                                            <div class="items__control" data-action="minus">-</div>
                                            <div class="items__current" data-counter="">${ productData.quantity }</div>
                                            <div class="items__control" data-action="plus">+</div>
                                        </div>

                                        <div class="price">
                                            <div class="price__currency">${ productData.price } ₽</div>
                                        </div>

                                    </div></ul>
                                    <!-- // cart-item__details -->

                                </div>
                            </div>
                        </div>
                        `;
            cartList.insertAdjacentHTML('beforeend', cartItemHTML);
        };}
});
