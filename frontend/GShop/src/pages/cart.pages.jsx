import React, { useContext, useEffect, useState } from 'react';
import { shopContext } from '../context/shop.context';
import Title from '../components/Title/title.Title';
import { assets } from '../assets/frontend_assets/assets';
import CartTotal from '../components/cart/cartTotal.cart'

function Cart() {
  const { products, currency, cartItems, updateQuantity ,navigate} = useContext(shopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    let tempData = [];
    for (const itemId in cartItems) {
      const sizes = cartItems[itemId]; // This is an object with sizes as keys
      for (const size in sizes) {
        if (sizes[size]) {
          tempData.push({
            id: itemId,
            size: size,
            quantity: sizes[size],
          });
        }
      }
    }
    setCartData(tempData); // Update the state with the new cart data
  }, [cartItems]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1="YOUR" text2="CART" />
      </div>

      <div>
        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item.id);
          if (!productData) {
            console.warn(`Product not found for item ID: ${item.id}`);
            return null; // Skip rendering if product data is missing
          }

          // Use the correct field name for the image
          const imageUrl = productData.image && productData.image[0] ? productData.image[0] : '';

          return (
            <div
              key={index}
              className="py-4 border-t text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img src={imageUrl} alt={productData.name || 'Product Image'} className="w-16 sm:w-20" />

                <div>
                  <p className="text-sm sm:text-lg font-medium">{productData.name}</p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-2 sm:px3 sm:py-1 border bg-slate-50">{item.size}</p>
                  </div>
                </div>
              </div>
              <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item.id, item.size, Number(e.target.value))} type="number" min={1} defaultValue={item.quantity} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' />
              <img onClick={() => updateQuantity(item.id, item.size, 0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" />
            </div>
          );
        })}
      </div>
      <div className=' flex justify-end my-20'>

        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          <div className=' w-full text-end'>
            <button onClick={()=>navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Cart;
