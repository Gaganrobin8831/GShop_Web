import { createContext, useEffect, useState } from "react";
import { products } from '../assets/frontend_assets/assets';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const shopContext = createContext();

export const ShopContextProvider = (props) => {
  const currency = '$';
  const delivery_fee = 10;

  const [search, setSearch] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [cartItems, setCartItems] = useState({})

  const navigate = useNavigate()

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error('Select Product Size')
      return
    }

    let cartData = structuredClone(cartItems)
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1
      }
      else {
        cartData[itemId][size] = 1
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1
    }
    setCartItems(cartData)
  }

  // const getCardCount = () => {
  //   let totalCount = 0
  //   for (let item in cartItems) {
  //     for (item in cartItems[item]) {
  //       try {
  //         if (cartItems[item][item] > 0) {
  //           totalCount += cartItems[item][item]
  //         }
  //       } catch (error) {
  //         // Handle error
  //       }
  //     }
  //   }
  //   return totalCount
  // }

  const getCardCount = () => {
    let totalCount = 0;
    // Loop through cart items to count the total quantity of items in the cart
    for (let item in cartItems) {
      for (let size in cartItems[item]) {
        totalCount += cartItems[item][size]; // Add the count for each size of the item
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemID,size, quantity) => {
    
    let cartData = structuredClone(cartItems)

    cartData[itemID][size] = quantity
    
    setCartItems(cartData)

  }
  
  const getCartAmount = () => {
    let totalAmount = 0;
    for (let items in cartItems) {
     let itemInfo = products.find((product)=> product._id === items)
     
     for (const item in cartItems[items]) {
      try {
          if (cartItems[items][item]) {
            totalAmount += itemInfo.price * cartItems[items][item]
            
          }
      } catch (error) {
        
      }
     }
    }
    return totalAmount
  }

  const value = {
    products,
    currency,
    delivery_fee,
    search, setSearch, showSearch, setShowSearch,
    cartItems, setCartItems, addToCart,
    getCardCount,
    updateQuantity,
    getCartAmount,
    navigate
  };

  return (
    <shopContext.Provider value={value}>
      {props.children}
    </shopContext.Provider>
  );
};

// Correct placement of the export default statement
export default ShopContextProvider;
