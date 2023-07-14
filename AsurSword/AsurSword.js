/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class AsurSword extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Asur Sword", "./AsurSword/costumes/Asur Sword.png", {
        x: 249,
        y: 94
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start Fight1" },
        this.whenIReceiveStartFight1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "End Fight 1" },
        this.whenIReceiveEndFight1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start Fight1" },
        this.whenIReceiveStartFight2
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStartFight1() {
    this.direction = 90;
    while (true) {
      this.move(2);
      /* TODO: Implement motion_ifonedgebounce */ null;
      yield;
    }
  }

  *whenIReceiveEndFight1() {
    this.visible = false;
  }

  *whenIReceiveStartFight2() {
    this.visible = true;
    this.goto(174, -99);
  }
}
