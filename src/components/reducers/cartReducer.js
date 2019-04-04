import WillaB from "../../images/willa-bottom.png";
import WillaT from "../../images/willa-top.png";
import MackT from "../../images/mack-top.png";
import MackB from "../../images/mack-bottom.png";
import KenzaT from "../../images/kenza-top.png";
import KenzaB from "../../images/kenza-bottom.png";
import GreerT from "../../images/greer-top.png";
import GreerB from "../../images/greer-bottom.png";
import BrittT from "../../images/britt-top.png";
import BrittB from "../../images/britt-bottom.png";

import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING
} from "../actions/action-types/cart-actions";

const initState = {
  items: [
    {
      id: 1,
      title: "willa bottom",
      desc:
        "Our Willa bottom is the perfect tanning style with skimpy coverage through the back and minimal side straps. The low-rise briefs have a seamless finish with a soft elasticated waistband to flatter your hips.",

      img: WillaB,
      price: 80,
      size: "XS  S  M  L"
    },
    {
      id: 2,
      title: "willa top",
      desc:
        "This braided beauty features peek-a-boo cutouts in the center and sides with a tie back for a custom fit.",

      img: WillaT,
      price: 90,
      size: "XS  S  M  L"
    },
    {
      id: 3,
      title: "kenza top",
      desc:
        "She's sugar and spice and everything we've ever dreamed of. The Kenza top includes adjustable and removable straps, with a unique knot feature in the front for a custom fit. We already know you'll fall in love with this supportive beaut.",
      img: KenzaT,
      price: 90,
      size: ""
    },
    {
      id: 4,
      title: "kenza bottom",
      desc:
        "The high-leg style we've been waiting for. The Enzo bottom has no competition - with an alluring V-shape she's in a league of her own.",
      img: KenzaB,
      price: 80,
      size: ""
    },
    {
      id: 5,
      title: "mackenzie top",
      desc:
        "Meet the Mackenzie top. This romantic bikini top features a sultry front cut-out, girly ruffle edge, and adjustable back straps for a fit that's certain to flaunt it all.",
      img: MackT,
      price: 80,
      size: ""
    },
    {
      id: 6,
      title: "mackenzie bottom",
      desc:
        "Featuring a high cut leg and adjustable tie sides, the Mackenzie skimpy bottom will accentuate what you've got. Pair her back with any of our luxe stretch top and let's just say, you'll thank us later.",
      img: MackB,
      price: 80,
      size: ""
    },
    {
      id: 7,
      title: "britt top",
      desc:
        "The Britt Top features flattering adjustable string style straps that tie at the neck and an ultra-soft wide elastic under bust that is as comfortable as it is flattering. The style is made from buttery-soft fabric and has super flattering seamless edges. Perfect for long days at the beach or under sheer or oversized tops and dresses for every day wear.",
      img: BrittT,
      price: 90,
      size: ""
    },
    {
      id: 8,
      title: "britt bottom",
      desc:
        "Made with seamless edges and thick soft elastic waist band this skimpy cut has been strategically designed to flatter. The soft elasticated waistband is designed to sit low on the hips, or adjust a little higher for an on-trend, high-cut silhouette. With its minimal coverage this bottom is sure to be a cult favorite and the ultimate tanning style.",
      img: BrittB,
      price: 80,
      size: ""
    },
    // {
    //   id: 9,
    //   title: "mackenzie bottom",
    //   desc:
    //     "Featuring a high cut leg and adjustable tie sides, the Mackenzie skimpy bottom will accentuate what you've got. Pair her back with any of our luxe stretch top and let's just say, you'll thank us later.",
    //   img: MackB,
    //   price: 80,
    //   size: ""
    // },
    // {
    //   id: 10,
    //   title: "mackenzie bottom",
    //   desc:
    //     "Featuring a high cut leg and adjustable tie sides, the Mackenzie skimpy bottom will accentuate what you've got. Pair her back with any of our luxe stretch top and let's just say, you'll thank us later.",
    //   img: MackB,
    //   price: 80,
    //   size: ""
    // },
    {
      id: 11,
      title: "greer top",
      desc:
        "What's knot to love about the Greer top? The ultra flattering low scoop neck is finished with a sexy knotted front detail and adjustable straps for a custom fit.",
      img: GreerT,
      price: 90,
      size: ""
    },
    {
      id: 12,
      title: "greer bottom",
      desc:
        "We're obsessed with the figure hugging fit of the Greer bottom that gives your backside major bragging rights. This ribbed bottom features a seam down the middle back and cheeky coverage.",
      img: GreerB,
      price: 80,
      size: ""
    }
  ],
  addedItems: [],
  total: 0
};
const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT
  if (action.type === ADD_TO_CART) {
    alert("Added to bag successfully! 👙 ");
    let addedItem = state.items.find(item => item.id === action.id);
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find(item => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price
      };
    } else {
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
  if (action.type === REMOVE_ITEM) {
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
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal
    };
  }
  if (action.type === SUB_QUANTITY) {
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

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total + 6
    };
  }

  if (action.type === "SUB_SHIPPING") {
    return {
      ...state,
      total: state.total - 6
    };
  }

  return state;
};

export default cartReducer;
