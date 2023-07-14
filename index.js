import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Karson from "./Karson/Karson.js";
import OldMonk from "./OldMonk/OldMonk.js";
import Asur from "./Asur/Asur.js";
import Karson1 from "./Karson1/Karson1.js";
import AsurSword from "./AsurSword/AsurSword.js";
import CartoonMonsterPixelDesign618787081RemovebgPreview from "./CartoonMonsterPixelDesign618787081RemovebgPreview/CartoonMonsterPixelDesign618787081RemovebgPreview.js";
import Spit from "./Spit/Spit.js";
import Dragon from "./Dragon/Dragon.js";
import FireBall from "./FireBall/FireBall.js";

const stage = new Stage({ costumeNumber: 6 });

const sprites = {
  Karson: new Karson({
    x: -123,
    y: -117,
    direction: 90,
    costumeNumber: 1,
    size: 65,
    visible: false,
    layerOrder: 8
  }),
  OldMonk: new OldMonk({
    x: 114,
    y: -94,
    direction: 90,
    costumeNumber: 1,
    size: 60,
    visible: false,
    layerOrder: 9
  }),
  Asur: new Asur({
    x: 181,
    y: -90,
    direction: -90,
    costumeNumber: 1,
    size: 60,
    visible: false,
    layerOrder: 1
  }),
  Karson1: new Karson1({
    x: -240,
    y: 142,
    direction: 90,
    costumeNumber: 1,
    size: 65,
    visible: false,
    layerOrder: 6
  }),
  AsurSword: new AsurSword({
    x: -124,
    y: -99,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 2
  }),
  CartoonMonsterPixelDesign618787081RemovebgPreview: new CartoonMonsterPixelDesign618787081RemovebgPreview(
    {
      x: 131,
      y: -81,
      direction: 90,
      costumeNumber: 1,
      size: 60,
      visible: false,
      layerOrder: 3
    }
  ),
  Spit: new Spit({
    x: 37,
    y: -87,
    direction: 90,
    costumeNumber: 1,
    size: 60,
    visible: false,
    layerOrder: 4
  }),
  Dragon: new Dragon({
    x: 91,
    y: -39,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 5
  }),
  FireBall: new FireBall({
    x: 176,
    y: -36,
    direction: 90,
    costumeNumber: 1,
    size: 60,
    visible: false,
    layerOrder: 7
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
