import { call, put } from 'redux-saga/effects';
import { serviceManager } from './serviceManager';

import AlohaB from "../../styles/assets/images/aloha-bottom.png";
import AlohaT from "../../styles/assets/images/aloha-top.png";
import LuauT from "../../styles/assets/images/luau-top.png";
import LuauB from "../../styles/assets/images/luau-bottom.png";
import MahaloT from "../../styles/assets/images/mahalo-top.png";
import MahaloB from "../../styles/assets/images/mahalo-bottom.png";
import HulaT from "../../styles/assets/images/hula-top.png";
import HulaB from "../../styles/assets/images/hula-bottom.png";
import OhanaT from "../../styles/assets/images/ohana-top.png";
import OhanaB from "../../styles/assets/images/ohana-bottom.png";
import HonuT from "../../styles/assets/images/honu-top.png";
import HonuB from "../../styles/assets/images/honu-bottom.png";
import AkahiT from "../../styles/assets/images/akahi-top.png";
import AkahiB from "../../styles/assets/images/akahi-bottom.png";
import MoanaT from "../../styles/assets/images/moana-top.png";
import MoanaB from "../../styles/assets/images/moana-bottom.png";
import ShakaT from "../../styles/assets/images/shaka-top.png";
import ShakaB from "../../styles/assets/images/shaka-bottom.png";
import PuaT from "../../styles/assets/images/pua-top.png";
import PuaB from "../../styles/assets/images/pua-bottom.png";
import MahinaT from "../../styles/assets/images/mahina-top.png";
import MahinaB from "../../styles/assets/images/mahina-bottom.png";
import LeiT from "../../styles/assets/images/lei-top.png";
import LeiB from "../../styles/assets/images/lei-bottom.png";

const images = {
  AlohaB,
  AlohaT,
  LuauT,
  LuauB,
  MahaloT,
  MahaloB,
  HulaT,
  HulaB,
  OhanaT,
  OhanaB,
  HonuT,
  HonuB,
  AkahiT,
  AkahiB,
  MoanaT,
  MoanaB,
  ShakaT,
  ShakaB,
  PuaT,
  PuaB,
  MahinaT,
  MahinaB,
  LeiT,
  LeiB
}

export function* rootSaga() {
    const response = yield call(serviceManager, { url: 'http://localhost:8000/items' });
    const items = response.items.map(item => ({ ...item, img: images[item.img] }));
    yield put({ type: 'LOAD_CART', data: items });    
}