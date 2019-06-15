const cartReducer = (state = { items: [], addedItems: [], total: 0 }, action) => {
  //INSIDE HOME COMPONENT
  if (action.type === "LOAD_CART") {
    return {
      ...state,
      items: action.data
    }
  }
  if (action.type === "ADD_TO_CART") {
    console.log("state1", state);
    alert("Added to bag successfully! 👙 ");
    let addedItem = state.items.find(item => item.id === action.id);
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find(item => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      console.log("state2", state);
      return {
        ...state,
        total: state.total + addedItem.price
      };
    } else {
      console.log("state3", state);

      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price;
      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      };
    }
  }
  if (action.type === "REMOVE_ITEM") {
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id);

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === "ADD_QUANTITY") {
    let addedItem = state.items.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal
    };
  }
  if (action.type === "SUB_QUANTITY") {
    let addedItem = state.items.find(item => item.id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal
      };
    }
  }

  if (action.type === "ADD_SHIPPING") {
    return {
      ...state,
      total: state.total + 6
    };
  }

  if (action.type === "SUB_SHIPPING") {
    if ((state.total = 0)) {
      return { ...state, total: 0 };
    } else {
      return {
        ...state,
        total: state.total - 6
      };
    }
  }
  if (action.type === "CLEAR_CART") {
    //calculating the total

    return {
      ...state,
      addedItems: [],
      total: 0
    };
  }

  return state;
};

export default cartReducer;
