/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Karson1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Karson1-removebg-preview",
        "./Karson1/costumes/Karson1-removebg-preview.png",
        { x: 94, y: 155 }
      )
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
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start fight 2" },
        this.whenIReceiveStartFight3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "end fight 2" },
        this.whenIReceiveEndFight2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start boss fight" },
        this.whenIReceiveStartBossFight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "end boss fight" },
        this.whenIReceiveEndBossFight
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStartFight1() {
    this.goto(-193, -114);
    this.direction = 90;
    yield* this.wait(1);
    this.goto(-185, 95);
    yield* this.wait(1);
    while (true) {
      this.goto(this.mouse.x, this.mouse.y);
      yield;
    }
  }

  *whenIReceiveEndFight1() {
    this.visible = false;
  }

  *whenIReceiveStartFight2() {
    this.visible = true;
  }

  *whenIReceiveStartFight3() {
    this.visible = true;
    this.goto(-186, -101);
    yield* this.wait(1);
    while (true) {
      this.goto(this.mouse.x, this.mouse.y);
      yield;
    }
  }

  *whenIReceiveEndFight2() {
    this.visible = false;
  }

  *whenIReceiveStartBossFight() {
    this.visible = true;
    this.goto(-190, -99);
    yield* this.wait(1);
    while (true) {
      this.goto(this.mouse.x, this.mouse.y);
      yield;
    }
  }

  *whenIReceiveEndBossFight() {
    this.visible = false;
  }
}
