/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class FireBall extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "fireball-sprite-png-fireball-sprite-sheet-115629085534uubvjda52-removebg-preview",
        "./FireBall/costumes/fireball-sprite-png-fireball-sprite-sheet-115629085534uubvjda52-removebg-preview.png",
        { x: 6, y: 66 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "end boss fight" },
        this.whenIReceiveEndBossFight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start boss fight" },
        this.whenIReceiveStartBossFight
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveEndBossFight() {
    this.visible = false;
  }

  *whenIReceiveStartBossFight() {
    for (let i = 0; i < 10; i++) {
      this.createClone();
      yield* this.wait(2);
      yield;
    }
  }

  *startAsClone() {
    this.goto(6, -36);
    this.visible = true;
    while (!this.touching("edge")) {
      this.move(-3);
      yield;
    }
    this.deleteThisClone();
  }
}
