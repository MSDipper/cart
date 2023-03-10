
const cartList = document.querySelector('.shopping_bag');


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
    }

})
