/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Spit extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "WhatsApp_Image_2023-07-13_at_23",
        "./Spit/costumes/WhatsApp_Image_2023-07-13_at_23.png",
        { x: 158, y: 62 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start fight 2" },
        this.whenIReceiveStartFight2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "end fight 2" },
        this.whenIReceiveEndFight2
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStartFight2() {
    this.visible = true;
    this.goto(188, -87);
    while (true) {
      this.move(5);
      /* TODO: Implement motion_ifonedgebounce */ null;
      yield;
    }
  }

  *whenIReceiveEndFight2() {
    this.visible = false;
  }
}
