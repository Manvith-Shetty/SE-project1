/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class CartoonMonsterPixelDesign618787081RemovebgPreview extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "cartoon-monster-pixel-design_61878-708__1_-removebg-preview",
        "./CartoonMonsterPixelDesign618787081RemovebgPreview/costumes/cartoon-monster-pixel-design_61878-708__1_-removebg-preview.png",
        { x: 278, y: 224.5 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "End_Phase-2" },
        this.whenIReceiveEndPhase2
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveEndPhase2() {
    this.visible = true;
    this.effects.clear();
    yield* this.sayAndWait("argh! argh! ", 4);
    yield* this.wait(4);
    yield* this.sayAndWait("argh! grumph! (Monster roars)", 4);
    while (true) {
      if (this.touching(this.sprites["Karson1"].andClones())) {
        for (let i = 0; i < 10; i++) {
          this.effects.color += 25;
          yield;
        }
        yield* this.wait(1);
        this.visible = false;
        this.broadcast("end fight 2");
      }
      yield;
    }
  }
}
