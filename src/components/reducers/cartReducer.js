import WillaB from "../../images/willa-bottom.png";
import WillaT from "../../images/willa-top.png";
import MackT from "../../images/mack-top.png";
import MackB from "../../images/mack-bottom.png";
import KenzaT from "../../images/kenza-top.png";
import KenzaB from "../../images/kenza-bottom.png";
import GreerT from "../../images/greer-top.png";
import GreerB from "../../images/greer-bottom.png";
import BootsT from "../../images/boots-top.png";
import BootsB from "../../images/boots-bottom.png";
import MaxT from "../../images/max-top.png";
import MaxB from "../../images/max-bottom.png";
import SadieT from "../../images/sadie-top.png";
import SadieB from "../../images/sadie-bottom.png";
import SaraT from "../../images/sara-top.png";
import SaraB from "../../images/sara-bottom.png";
const initState = {
  items: [
    {
      id: 1,
      title: "willa bottom",
      category: "bottom",
      desc:
        "Our Willa bottom is the perfect tanning style with skimpy coverage through the back and minimal side straps. The low-rise briefs have a seamless finish with a soft elasticated waistband to flatter your hips.",

      img: WillaB,
      price: 80,
      size: "XS  S  M  L"
    },
    {
      id: 2,
      title: "willa top",
      category: "top",
      desc:
        "This braided beauty features peek-a-boo cutouts in the center and sides with a tie back for a custom fit.",

      img: WillaT,
      price: 80,
      size: "XS  S  M  L"
    },
    {
      id: 3,
      title: "kenza top",
      category: "top",
      desc:
        "She's sugar and spice and everything we've ever dreamed of. The Kenza top includes adjustable and removable straps, with a unique knot feature in the front for a custom fit. We already know you'll fall in love with this supportive beaut.",
      img: KenzaT,
      price: 90,
      size: "XS  S  M  L"
    },
    {
      id: 4,
      title: "kenza bottom",
      category: "bottom",

      desc:
        "The high-leg style we've been waiting for. The Enzo bottom has no competition - with an alluring V-shape she's in a league of her own.",
      img: KenzaB,
      price: 80,
      size: "XS  S  M  L"
    },
    {
      id: 5,
      title: "mackenzie top",
      category: "top",
      desc:
        "Meet the Mackenzie top. This romantic bikini top features a sultry front cut-out, girly ruffle edge, and adjustable back straps for a fit that's certain to flaunt it all.",
      img: MackT,
      price: 80,
      size: "XS  S  M  L"
    },
    {
      id: 6,
      title: "mackenzie bottom",
      category: "bottom",
      desc:
        "Featuring a high cut leg and adjustable tie sides, the Mackenzie skimpy bottom will accentuate what you've got. Pair her back with any of our luxe stretch top and let's just say, you'll thank us later.",
      img: MackB,
      price: 80,
      size: "XS  S  M  L"
    },
    {
      id: 7,
      title: "max top",
      category: "top",
      desc:
        "Casual-cool cropped raglan style top with ultra-feminine knotted front in our signature luxe nylon swim fabric. Finished with a collar neck and flattering cap sleeves.",
      img: MaxT,
      price: 100,
      size: "XS  S  M  L"
    },
    {
      id: 8,
      title: "max bottom",
      category: "bottom",
      desc:
        "The next big trend in swimwear, the high cut bottom. Our Max bottom is simple yet stunning with a high cut fit and cheeky coverage in back with center seam that hugs your curves in all the right places.",
      img: MaxB,
      price: 85,
      size: "XS  S  M  L"
    },
    {
      id: 9,
      title: "boots top",
      category: "top",
      desc:
        "This top is a major crowd-pleaser, and rightfully so. The Boots top features our luxe ribbed fabric with thin, adjustable straps that will definitely highlight the shoulders and give the girls a much desired boost.",
      img: BootsT,
      price: 80,
      size: "XS  S  M  L"
    },
    {
      id: 10,
      title: "boots bottom",
      category: "bottom",
      desc:
        "This skimpy, high leg fit is everything. It'll hug your curves in all the right places and perfectly accentuate the booty. You're welcome.",
      img: BootsB,
      price: 80,
      size: "XS  S  M  L"
    },
    {
      id: 11,
      title: "greer top",
      category: "top",
      desc:
        "What's knot to love about the Greer top? The ultra flattering low scoop neck is finished with a sexy knotted front detail and adjustable straps for a custom fit.",
      img: GreerT,
      price: 90,
      size: "XS  S  M  L"
    },
    {
      id: 12,
      title: "greer bottom",
      category: "bottom",
      desc:
        "We're obsessed with the figure hugging fit of the Greer bottom that gives your backside major bragging rights. This ribbed bottom features a seam down the middle back and cheeky coverage.",
      img: GreerB,
      price: 80,
      size: "XS  S  M  L"
    },
    {
      id: 13,
      title: "sadie top",
      category: "top",
      desc:
        "We're totally obsessing over this bandeau style top. Ultra thin, adjustable straps add a delicate, feminine finishing touch. Pair with our intricate little Sadie bottoms for your favorite teeny bikini.",
      img: SadieT,
      price: 80,
      size: "XS  S  M  L"
    },
    {
      id: 14,
      title: "sadie bottom",
      category: "bottom",
      desc:
        "Our itsiest bitsiest bikini bottom to date with added rose gold rings for some dainty detailing on both the front and back. The versatile soft elasticated skinny strap waistband is designed to sit low on the hips, or adjust a little higher for an on-trend, high-cut silhouette.",
      img: SadieB,
      price: 80,
      size: "XS  S  M  L"
    },
    {
      id: 15,
      title: "sara top",
      category: "top",
      desc:
        "We're totally obsessing over this bandeau style top. Ultra thin, adjustable straps add a delicate, feminine finishing touch. Pair with our intricate little Sadie bottoms for your favorite teeny bikini.",
      img: SaraT,
      price: 80,
      size: "XS  S  M  L"
    },
    {
      id: 16,
      title: "sara bottom",
      category: "bottom",
      desc:
        "Our itsiest bitsiest bikini bottom to date with added rose gold rings for some dainty detailing on both the front and back. The versatile soft elasticated skinny strap waistband is designed to sit low on the hips, or adjust a little higher for an on-trend, high-cut silhouette.",
      img: SaraB,
      price: 80,
      size: "XS  S  M  L"
    }
  ],
  addedItems: [],
  total: 0,
  searchTerm: "",
  filterArray: [
    {
      id: 1,
      title: "willa bottom",
      category: "bottom",
      desc:
        "Our Willa bottom is the perfect tanning style with skimpy coverage through the back and minimal side straps. The low-rise briefs have a seamless finish with a soft elasticated waistband to flatter your hips.",

      img: WillaB,
      price: 80,
      size: "XS  S  M  L"
    },
    {
      id: 2,
      title: "willa top",
      category: "top",
      desc:
        "This braided beauty features peek-a-boo cutouts in the center and sides with a tie back for a custom fit.",

      img: WillaT,
      price: 80,
      size: "XS  S  M  L"
    },
    {
      id: 3,
      title: "kenza top",
      category: "top",
      desc:
        "She's sugar and spice and everything we've ever dreamed of. The Kenza top includes adjustable and removable straps, with a unique knot feature in the front for a custom fit. We already know you'll fall in love with this supportive beaut.",
      img: KenzaT,
      price: 90,
      size: "XS  S  M  L"
    },
    {
      id: 4,
      title: "kenza bottom",
      category: "bottom",

      desc:
        "The high-leg style we've been waiting for. The Enzo bottom has no competition - with an alluring V-shape she's in a league of her own.",
      img: KenzaB,
      price: 80,
      size: "XS  S  M  L"
    },
    {
      id: 5,
      title: "mackenzie top",
      category: "top",
      desc:
        "Meet the Mackenzie top. This romantic bikini top features a sultry front cut-out, girly ruffle edge, and adjustable back straps for a fit that's certain to flaunt it all.",
      img: MackT,
      price: 80,
      size: "XS  S  M  L"
    },
    {
      id: 6,
      title: "mackenzie bottom",
      category: "bottom",
      desc:
        "Featuring a high cut leg and adjustable tie sides, the Mackenzie skimpy bottom will accentuate what you've got. Pair her back with any of our luxe stretch top and let's just say, you'll thank us later.",
      img: MackB,
      price: 80,
      size: "XS  S  M  L"
    },
    {
      id: 7,
      title: "max top",
      category: "top",
      desc:
        "Casual-cool cropped raglan style top with ultra-feminine knotted front in our signature luxe nylon swim fabric. Finished with a collar neck and flattering cap sleeves.",
      img: MaxT,
      price: 100,
      size: "XS  S  M  L"
    },
    {
      id: 8,
      title: "max bottom",
      category: "bottom",
      desc:
        "The next big trend in swimwear, the high cut bottom. Our Max bottom is simple yet stunning with a high cut fit and cheeky coverage in back with center seam that hugs your curves in all the right places.",
      img: MaxB,
      price: 85,
      size: "XS  S  M  L"
    },
    {
      id: 9,
      title: "boots top",
      category: "top",
      desc:
        "This top is a major crowd-pleaser, and rightfully so. The Boots top features our luxe ribbed fabric with thin, adjustable straps that will definitely highlight the shoulders and give the girls a much desired boost.",
      img: BootsT,
      price: 80,
      size: "XS  S  M  L"
    },
    {
      id: 10,
      title: "boots bottom",
      category: "bottom",
      desc:
        "This skimpy, high leg fit is everything. It'll hug your curves in all the right places and perfectly accentuate the booty. You're welcome.",
      img: BootsB,
      price: 80,
      size: "XS  S  M  L"
    },
    {
      id: 11,
      title: "greer top",
      category: "top",
      desc:
        "What's knot to love about the Greer top? The ultra flattering low scoop neck is finished with a sexy knotted front detail and adjustable straps for a custom fit.",
      img: GreerT,
      price: 90,
      size: "XS  S  M  L"
    },
    {
      id: 12,
      title: "greer bottom",
      category: "bottom",
      desc:
        "We're obsessed with the figure hugging fit of the Greer bottom that gives your backside major bragging rights. This ribbed bottom features a seam down the middle back and cheeky coverage.",
      img: GreerB,
      price: 80,
      size: "XS  S  M  L"
    },
    {
      id: 13,
      title: "sadie top",
      category: "top",
      desc:
        "We're totally obsessing over this bandeau style top. Ultra thin, adjustable straps add a delicate, feminine finishing touch. Pair with our intricate little Sadie bottoms for your favorite teeny bikini.",
      img: SadieT,
      price: 80,
      size: "XS  S  M  L"
    },
    {
      id: 14,
      title: "sadie bottom",
      category: "bottom",
      desc:
        "Our itsiest bitsiest bikini bottom to date with added rose gold rings for some dainty detailing on both the front and back. The versatile soft elasticated skinny strap waistband is designed to sit low on the hips, or adjust a little higher for an on-trend, high-cut silhouette.",
      img: SadieB,
      price: 80,
      size: "XS  S  M  L"
    },
    {
      id: 15,
      title: "sara top",
      category: "top",
      desc:
        "We're totally obsessing over this bandeau style top. Ultra thin, adjustable straps add a delicate, feminine finishing touch. Pair with our intricate little Sadie bottoms for your favorite teeny bikini.",
      img: SaraT,
      price: 80,
      size: "XS  S  M  L"
    },
    {
      id: 16,
      title: "sara bottom",
      category: "bottom",
      desc:
        "Our itsiest bitsiest bikini bottom to date with added rose gold rings for some dainty detailing on both the front and back. The versatile soft elasticated skinny strap waistband is designed to sit low on the hips, or adjust a little higher for an on-trend, high-cut silhouette.",
      img: SaraB,
      price: 80,
      size: "XS  S  M  L"
    }
  ]
};

const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT
  if (action.type === "ADD_TO_CART") {
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
