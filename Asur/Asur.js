/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Asur extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "depositphotos_415881122-stock-illustration-brave-knight-ready-to-fight-removebg-preview",
        "./Asur/costumes/depositphotos_415881122-stock-illustration-brave-knight-ready-to-fight-removebg-preview.png",
        { x: 248, y: 251.5 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "End phase1" },
        this.whenIReceiveEndPhase1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start Fight1" },
        this.whenIReceiveStartFight1
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveEndPhase1() {
    this.visible = true;
    this.goto(152, -83);
    yield* this.sayAndWait(
      "Iam the gatekeeper of this realm. I'll not let you pass. ",
      4
    );
    yield* this.wait(9);
    yield* this.sayAndWait("Haha! You can't defeat me.", 4);
  }

  *whenIReceiveStartFight1() {
    this.goto(181, -90);
    this.effects.clear();
    this.direction = -90;
    while (true) {
      if (this.touching(this.sprites["Karson1"].andClones())) {
        for (let i = 0; i < 10; i++) {
          this.effects.color += 25;
          yield;
        }
        yield* this.wait(1);
        this.visible = false;
        this.broadcast("End Fight 1");
      }
      yield;
    }
  }
}
