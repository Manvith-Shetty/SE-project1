/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Dragon extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Dragon-1", "./Dragon/costumes/Dragon-1.png", {
        x: 225,
        y: 227
      }),
      new Costume("Dragon-2", "./Dragon/costumes/Dragon-2.png", {
        x: 203,
        y: 212
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start boss fight" },
        this.whenIReceiveStartBossFight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start boss fight" },
        this.whenIReceiveStartBossFight2
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStartBossFight() {
    this.visible = true;
    this.effects.clear();
    this.size = 100;
    this.goto(91, -39);
    while (true) {
      yield* this.wait(0.1);
      this.costumeNumber++;
      yield;
    }
  }

  *whenIReceiveStartBossFight2() {
    while (true) {
      if (this.touching(this.sprites["Karson1"].andClones())) {
        for (let i = 0; i < 10; i++) {
          this.effects.color += 25;
          yield;
        }
        yield* this.wait(1);
        this.visible = false;
        this.broadcast("end boss fight");
      }
      yield;
    }
  }
}
