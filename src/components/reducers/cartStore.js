import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import ItemsData from "./ItemsData.js";

const productReducer = (
  state = {
    ItemsData: ItemsData,
    categoryToFilter: "all",
    cartItems: [],
    isCartOpened: false
  },
  action
) => {
  switch (action.type) {
    case "CONFIRM_ORDER":
      state = {
        ...state,
        cartItems: []
      };
      break;
    case "TOGGLE_CART_STATUS":
      state = {
        ...state,
        isCartOpened: !state.isCartOpened
      };
      break;
    case "FILTER_PRODUCTS_BY_CATEGORY":
      state = {
        ...state,
        categoryToFilter: action.category
      };
      break;
    case "ADD_PRODUCT_TO_CART":
      state = {
        ...state,
        cartItems: [...state.cartItems, action.productToAdd]
      };
      break;
    case "REMOVE_PRODUCT_FROM_CART":
      state = {
        ...state,
        cartItems: state.cartItems.filter((singleProduct, index) => {
          return index !== action.productId;
        }),
        ItemsData: state.ItemsData.map(singleProduct => {
          if (singleProduct.name === action.productName) {
            return {
              ...singleProduct,
              stock: singleProduct.stock + +action.productQuantity
            };
          } else return singleProduct;
        })
      };
      break;
    case "REMOVE_PRODUCT_QUANTITY":
      state = {
        ...state,
        ItemsData: state.ItemsData.map(singleProduct => {
          if (singleProduct.name === action.productDetails.name)
            return {
              ...singleProduct,
              stock: singleProduct.stock - +action.productDetails.quantity
            };
          else return singleProduct;
        })
      };
      break;
  }
  return state;
};

const cartStore = createStore(productReducer, applyMiddleware(logger));

export default cartStore;
