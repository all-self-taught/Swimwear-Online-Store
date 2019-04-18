import AlohaB from "../../images/aloha-bottom.png";
import AlohaT from "../../images/aloha-top.png";
import LuauT from "../../images/luau-top.png";
import LuauB from "../../images/luau-bottom.png";
import MahaloT from "../../images/mahalo-top.png";
import MahaloB from "../../images/mahalo-bottom.png";
import HulaT from "../../images/hula-top.png";
import HulaB from "../../images/hula-bottom.png";
import OhanaT from "../../images/ohana-top.png";
import OhanaB from "../../images/ohana-bottom.png";
import HonuT from "../../images/honu-top.png";
import HonuB from "../../images/honu-bottom.png";
import AkahiT from "../../images/akahi-top.png";
import AkahiB from "../../images/akahi-bottom.png";
import MoanaT from "../../images/moana-top.png";
import MoanaB from "../../images/moana-bottom.png";
import ShakaT from "../../images/shaka-top.png";
import ShakaB from "../../images/shaka-bottom.png";
import PuaT from "../../images/pua-top.png";
import PuaB from "../../images/pua-bottom.png";
import MahinaT from "../../images/mahina-top.png";
import MahinaB from "../../images/mahina-bottom.png";
import LeiT from "../../images/lei-top.png";
import LeiB from "../../images/lei-bottom.png";
const initState = {
  items: [
    {
      id: 1,
      title: "aloha top",
      category: "top",
      desc:
        "This braided beauty features peek-a-boo cutouts in the center and sides with a tie back for a custom fit.",
      img: AlohaT,
      price: 90,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 2,
      title: "aloha bottom",
      category: "bottom",
      desc:
        "Our aloha bottom is the perfect tanning style with skimpy coverage through the back and minimal side straps. The low-rise briefs have a seamless finish with a soft elasticated waistband to flatter your hips.",
      img: AlohaB,
      price: 80,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 3,
      title: "mahalo top",
      category: "top",
      desc:
        "She's sugar and spice and everything we've ever dreamed of. The mahalo top includes adjustable and removable straps, with a unique knot feature in the front for a custom fit. We already know you'll fall in love with this supportive beaut.",
      img: MahaloT,
      price: 90,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 4,
      title: "mahalo bottom",
      category: "bottom",

      desc:
        "The high-leg style we've been waiting for. The mahalo bottom has no competition - with an alluring V-shape she's in a league of her own.",
      img: MahaloB,
      price: 80,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 5,
      title: "luau top",
      category: "top",
      desc:
        "Meet the luau top. This romantic bikini top features a sultry front cut-out, girly ruffle edge, and adjustable back straps for a fit that's certain to flaunt it all.",
      img: LuauT,
      price: 80,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 6,
      title: "luau bottom",
      category: "bottom",
      desc:
        "Featuring a high cut leg and adjustable tie sides, the luau skimpy bottom will accentuate what you've got. Pair her back with any of our luxe stretch top and let's just say, you'll thank us later.",
      img: LuauB,
      price: 80,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 7,
      title: "honu top",
      category: "top",
      desc:
        "Casual-cool cropped raglan style top with ultra-feminine knotted front in our signature luxe nylon swim fabric. Finished with a collar neck and flattering cap sleeves.",
      img: HonuT,
      price: 100,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 8,
      title: "honu bottom",
      category: "bottom",
      desc:
        "The next big trend in swimwear, the high cut bottom. Our honu bottom is simple yet stunning with a high cut fit and cheeky coverage in back with center seam that hugs your curves in all the right places.",
      img: HonuB,
      price: 85,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 9,
      title: "ohana top",
      category: "top",
      desc:
        "This top is a major crowd-pleaser, and rightfully so. The ohana top features our luxe ribbed fabric with thin, adjustable straps that will definitely highlight the shoulders and give the girls a much desired boost.",
      img: OhanaT,
      price: 80,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 10,
      title: "ohana bottom",
      category: "bottom",
      desc:
        "This skimpy, high leg fit is everything. It'll hug your curves in all the right places and perfectly accentuate the booty. You're welcome.",
      img: OhanaB,
      price: 80,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 11,
      title: "hula top",
      category: "top",
      desc:
        "What's knot to love about the hula top? The ultra flattering low scoop neck is finished with a sexy knotted front detail and adjustable straps for a custom fit.",
      img: HulaT,
      price: 90,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 12,
      title: "hula bottom",
      category: "bottom",
      desc:
        "We're obsessed with the figure hugging fit of the hula bottom that gives your backside major bragging rights. This ribbed bottom features a seam down the middle back and cheeky coverage.",
      img: HulaB,
      price: 80,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 13,
      title: "akahi top",
      category: "top",
      desc:
        "We're totally obsessing over this bandeau style top. Ultra thin, adjustable straps add a delicate, feminine finishing touch. Pair with our intricate little akahi bottoms for your favorite teeny bikini.",
      img: AkahiT,
      price: 80,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 14,
      title: "akahi bottom",
      category: "bottom",
      desc:
        "Our itsiest bitsiest bikini bottom to date with added rose gold rings for some dainty detailing on both the front and back. The versatile soft elasticated skinny strap waistband is designed to sit low on the hips, or adjust a little higher for an on-trend, high-cut silhouette.",
      img: AkahiB,
      price: 80,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 15,
      title: "moana top",
      category: "top",
      desc:
        "We're totally obsessing over this bandeau style top. Ultra thin, adjustable straps add a delicate, feminine finishing touch. Pair with our intricate little moana bottoms for your favorite teeny bikini.",
      img: MoanaT,
      price: 80,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 16,
      title: "moana bottom",
      category: "bottom",
      desc:
        "Our itsiest bitsiest bikini bottom to date with added rose gold rings for some dainty detailing on both the front and back. The versatile soft elasticated skinny strap waistband is designed to sit low on the hips, or adjust a little higher for an on-trend, high-cut silhouette.",
      img: MoanaB,
      price: 80,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 17,
      title: "shaka top",
      category: "top",
      desc:
        "Feelin' flirty? We know the feeling, so let us introduce you to the shaka top. Featuring a plunging v-cut neckline, flirty ruffle detail, and adjustable front tie - we guarantee shaka will bring out the best of you (and your girls).",
      img: ShakaT,
      price: 80,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 18,
      title: "shaka bottom",
      category: "bottom",
      desc:
        "Perfect for the beach or poolside, this charming bottom features a low front rise, side ruffles, and skimpy back coverage. Pair her back with our shaka top for an ultra femme finishing touch.",
      img: ShakaB,
      price: 80,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 19,
      title: "pua top",
      category: "top",
      desc:
        "Feelin' flirty? We know the feeling, so let us introduce you to the shaka top. Featuring a plunging v-cut neckline, flirty ruffle detail, and adjustable front tie - we guarantee shaka will bring out the best of you (and your girls).",
      img: PuaT,
      price: 80,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 20,
      title: "pua bottom",
      category: "bottom",
      desc:
        "Perfect for the beach or poolside, this charming bottom features a low front rise, side ruffles, and skimpy back coverage. Pair her back with our shaka top for an ultra femme finishing touch.",
      img: PuaB,
      price: 80,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 21,
      title: "mahina top",
      category: "top",
      desc:
        "This modern crop features a scoop neck front with sexy notched neckline and peek-a-boo cutout. The design is engineered to provide a supportive and flattering fit with uplifting underband and pull on design with thicker straps. This fully lined crop is feminine and sporty all in one and a perfect layering piece.",
      img: MahinaT,
      price: 90,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 22,
      title: "mahina bottom",
      category: "bottom",
      desc:
        "A low rise, cheeky coverage bottom with elastic binding surrounding you in all the right places? Yes please. Made from our luxe rib fabric the soft elasticated waistband is designed to sit low on the hips, or adjust a little higher for an on-trend, high-cut silhouette",
      img: MahinaB,
      price: 80,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 23,
      title: "lei top",
      category: "top",
      desc:
        "This braided beauty features peek-a-boo cutouts in the center and sides with a tie back for a custom fit.",
      img: LeiT,
      price: 90,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 24,
      title: "lei bottom",
      category: "bottom",
      desc:
        "Our lei bottom is the perfect tanning style with skimpy coverage through the back and minimal side straps. The low-rise briefs have a seamless finish with a soft elasticated waistband to flatter your hips.",
      img: LeiB,
      price: 80,
      size: "[ XS,  S,  M,  L ]"
    }
  ],
  addedItems: [],
  total: 0,
  searchTerm: "",
  filterArray: [
    {
      id: 1,
      title: "aloha top",
      category: "top",
      desc:
        "This braided beauty features peek-a-boo cutouts in the center and sides with a tie back for a custom fit.",
      img: AlohaT,
      price: 90,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 2,
      title: "aloha bottom",
      category: "bottom",
      desc:
        "Our aloha bottom is the perfect tanning style with skimpy coverage through the back and minimal side straps. The low-rise briefs have a seamless finish with a soft elasticated waistband to flatter your hips.",
      img: AlohaB,
      price: 80,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 3,
      title: "mahalo top",
      category: "top",
      desc:
        "She's sugar and spice and everything we've ever dreamed of. The mahalo top includes adjustable and removable straps, with a unique knot feature in the front for a custom fit. We already know you'll fall in love with this supportive beaut.",
      img: MahaloT,
      price: 90,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 4,
      title: "mahalo bottom",
      category: "bottom",

      desc:
        "The high-leg style we've been waiting for. The mahalo bottom has no competition - with an alluring V-shape she's in a league of her own.",
      img: MahaloB,
      price: 80,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 5,
      title: "luau top",
      category: "top",
      desc:
        "Meet the luau top. This romantic bikini top features a sultry front cut-out, girly ruffle edge, and adjustable back straps for a fit that's certain to flaunt it all.",
      img: LuauT,
      price: 80,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 6,
      title: "luau bottom",
      category: "bottom",
      desc:
        "Featuring a high cut leg and adjustable tie sides, the luau skimpy bottom will accentuate what you've got. Pair her back with any of our luxe stretch top and let's just say, you'll thank us later.",
      img: LuauB,
      price: 80,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 7,
      title: "honu top",
      category: "top",
      desc:
        "Casual-cool cropped raglan style top with ultra-feminine knotted front in our signature luxe nylon swim fabric. Finished with a collar neck and flattering cap sleeves.",
      img: HonuT,
      price: 100,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 8,
      title: "honu bottom",
      category: "bottom",
      desc:
        "The next big trend in swimwear, the high cut bottom. Our honu bottom is simple yet stunning with a high cut fit and cheeky coverage in back with center seam that hugs your curves in all the right places.",
      img: HonuB,
      price: 85,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 9,
      title: "ohana top",
      category: "top",
      desc:
        "This top is a major crowd-pleaser, and rightfully so. The ohana top features our luxe ribbed fabric with thin, adjustable straps that will definitely highlight the shoulders and give the girls a much desired boost.",
      img: OhanaT,
      price: 80,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 10,
      title: "ohana bottom",
      category: "bottom",
      desc:
        "This skimpy, high leg fit is everything. It'll hug your curves in all the right places and perfectly accentuate the booty. You're welcome.",
      img: OhanaB,
      price: 80,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 11,
      title: "hula top",
      category: "top",
      desc:
        "What's knot to love about the hula top? The ultra flattering low scoop neck is finished with a sexy knotted front detail and adjustable straps for a custom fit.",
      img: HulaT,
      price: 90,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 12,
      title: "hula bottom",
      category: "bottom",
      desc:
        "We're obsessed with the figure hugging fit of the hula bottom that gives your backside major bragging rights. This ribbed bottom features a seam down the middle back and cheeky coverage.",
      img: HulaB,
      price: 80,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 13,
      title: "akahi top",
      category: "top",
      desc:
        "We're totally obsessing over this bandeau style top. Ultra thin, adjustable straps add a delicate, feminine finishing touch. Pair with our intricate little akahi bottoms for your favorite teeny bikini.",
      img: AkahiT,
      price: 80,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 14,
      title: "akahi bottom",
      category: "bottom",
      desc:
        "Our itsiest bitsiest bikini bottom to date with added rose gold rings for some dainty detailing on both the front and back. The versatile soft elasticated skinny strap waistband is designed to sit low on the hips, or adjust a little higher for an on-trend, high-cut silhouette.",
      img: AkahiB,
      price: 80,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 15,
      title: "moana top",
      category: "top",
      desc:
        "We're totally obsessing over this bandeau style top. Ultra thin, adjustable straps add a delicate, feminine finishing touch. Pair with our intricate little moana bottoms for your favorite teeny bikini.",
      img: MoanaT,
      price: 80,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 16,
      title: "moana bottom",
      category: "bottom",
      desc:
        "Our itsiest bitsiest bikini bottom to date with added rose gold rings for some dainty detailing on both the front and back. The versatile soft elasticated skinny strap waistband is designed to sit low on the hips, or adjust a little higher for an on-trend, high-cut silhouette.",
      img: MoanaB,
      price: 80,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 17,
      title: "shaka top",
      category: "top",
      desc:
        "Feelin' flirty? We know the feeling, so let us introduce you to the shaka top. Featuring a plunging v-cut neckline, flirty ruffle detail, and adjustable front tie - we guarantee shaka will bring out the best of you (and your girls).",
      img: ShakaT,
      price: 80,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 18,
      title: "shaka bottom",
      category: "bottom",
      desc:
        "Perfect for the beach or poolside, this charming bottom features a low front rise, side ruffles, and skimpy back coverage. Pair her back with our shaka top for an ultra femme finishing touch.",
      img: ShakaB,
      price: 80,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 19,
      title: "pua top",
      category: "top",
      desc:
        "Feelin' flirty? We know the feeling, so let us introduce you to the shaka top. Featuring a plunging v-cut neckline, flirty ruffle detail, and adjustable front tie - we guarantee shaka will bring out the best of you (and your girls).",
      img: PuaT,
      price: 80,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 20,
      title: "pua bottom",
      category: "bottom",
      desc:
        "Perfect for the beach or poolside, this charming bottom features a low front rise, side ruffles, and skimpy back coverage. Pair her back with our shaka top for an ultra femme finishing touch.",
      img: PuaB,
      price: 80,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 21,
      title: "mahina top",
      category: "top",
      desc:
        "This modern crop features a scoop neck front with sexy notched neckline and peek-a-boo cutout. The design is engineered to provide a supportive and flattering fit with uplifting underband and pull on design with thicker straps. This fully lined crop is feminine and sporty all in one and a perfect layering piece.",
      img: MahinaT,
      price: 90,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 22,
      title: "mahina bottom",
      category: "bottom",
      desc:
        "A low rise, cheeky coverage bottom with elastic binding surrounding you in all the right places? Yes please. Made from our luxe rib fabric the soft elasticated waistband is designed to sit low on the hips, or adjust a little higher for an on-trend, high-cut silhouette",
      img: MahinaB,
      price: 80,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 23,
      title: "lei top",
      category: "top",
      desc:
        "This braided beauty features peek-a-boo cutouts in the center and sides with a tie back for a custom fit.",
      img: LeiT,
      price: 90,
      size: "[ XS,  S,  M,  L ]"
    },
    {
      id: 24,
      title: "lei bottom",
      category: "bottom",
      desc:
        "Our lei bottom is the perfect tanning style with skimpy coverage through the back and minimal side straps. The low-rise briefs have a seamless finish with a soft elasticated waistband to flatter your hips.",
      img: LeiB,
      price: 80,
      size: "[ XS,  S,  M,  L ]"
    }
  ]
};

const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT
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
