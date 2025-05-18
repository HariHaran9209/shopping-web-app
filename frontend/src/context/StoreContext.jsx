import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const [ token, setToken ] = useState("")
    const url = 'http://localhost:4000'
    const [ cartItems, setCartItems ] = useState({})
    const [ food_list, setFoodList ] = useState([])

    const addToCart = async (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
        }));
        if (token) {
            await axios.post(url + '/api/cart/add/', { itemId }, { headers: { token } });
        }
    };


    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
        if (token) {
            await axios.post(`${url}/api/cart/remove`, {itemId}, { headers: {token} })
        }
    }

   const getTotalCartAmount = () => {
    if (!Array.isArray(food_list)) return 0;

    let totalAmount = 0;
    for (const item in cartItems) {
        if (cartItems[item] > 0) {
        const itemInfo = food_list.find((product) => product._id.toString() === item);
        if (itemInfo) {
            totalAmount += itemInfo.price * cartItems[item];
        }
        }
    }
    return totalAmount;
    };



    const fetchFoodList = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/food/list');
            setFoodList(response.data.data);
        } catch (error) {
            console.error('Failed to fetch food list:', error);
        }
    };


    const loadCartData = async (token) => {
		try {
			console.log("Token in loadCartData:", token); // 👈 Is this value what you expect?
			const response = await axios.post(url+'/api/cart/get', {}, { headers: { token } });
			setCartItems(response.data.cartData || {});
		} catch (error) {
			if (error.response) {
				console.error("Error response:", error.response.data);
			} else {
				console.error("Error:", error);
			}
		}
	};


    const logout = () => {
        setToken("")
        setCartItems({})
        localStorage.removeItem('token')
    }

    useEffect(() => {
		async function loadData() {
			await fetchFoodList();
			if (localStorage.getItem("token")) {
				setToken(localStorage.getItem("token"));
				await loadCartData(localStorage.getItem("token"))
			}
		}
		loadData();
	}, [])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
        logout
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider