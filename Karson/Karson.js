/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Karson extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "png-transparent-pixel-dodgers-pixel-art-sprite-text-cartoon-fictional-character-removebg-preview",
        "./Karson/costumes/png-transparent-pixel-dodgers-pixel-art-sprite-text-cartoon-fictional-character-removebg-preview.png",
        { x: 97, y: 154 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start Dialouge" },
        this.whenIReceiveStartDialouge
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "End phase1" },
        this.whenIReceiveEndPhase1
      ),
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
        { name: "End_Phase-2" },
        this.whenIReceiveEndPhase2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start fight 2" },
        this.whenIReceiveStartFight2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "end fight 2" },
        this.whenIReceiveEndFight2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "end phase 3" },
        this.whenIReceiveEndPhase3
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
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "carson after boss fight" },
        this.whenIReceiveCarsonAfterBossFight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start Javaria" },
        this.whenIReceiveStartJavaria
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "end game" },
        this.whenIReceiveEndGame
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-191, -118);
    for (let i = 0; i < 7; i++) {
      yield* this.wait(0.5);
      this.move(25);
      yield;
    }
    this.broadcast("Start Dialouge");
  }

  *whenIReceiveStartDialouge() {
    yield* this.wait(5);
    yield* this.sayAndWait(
      "I am here in search of Kingdom named as Javaria",
      4
    );
    yield* this.wait(5);
    yield* this.sayAndWait("But I have to get there by any means.", 4);
    yield* this.wait(10);
    yield* this.sayAndWait(
      "I have got no choice, so I'll help you uncover those mysteries.",
      4
    );
    yield* this.wait(1);
    yield* this.sayAndWait(
      "In return, help me to get to the Kingdom of Javaria.",
      4
    );
    yield* this.wait(5);
    yield* this.sayAndWait("I'm Karson Liebert.", 4);
  }

  *whenIReceiveEndPhase1() {
    this.goto(-53, -115);
    yield* this.wait(17);
    yield* this.sayAndWait("Alright then, watch me.", 4);
    this.broadcast("Start Fight1");
  }

  *whenIReceiveStartFight1() {
    this.visible = false;
  }

  *whenIReceiveEndFight1() {
    this.visible = true;
    this.goto(-158, -82);
    this.direction = 90;
    yield* this.wait(15);
    yield* this.sayAndWait("Yes, I'll try my best to solve the mystery!", 3);
  }

  *whenIReceiveEndPhase2() {
    this.goto(-84, -88);
    yield* this.wait(10);
    yield* this.sayAndWait(
      "First the skeleton guy and now this monster....I'll finish him in an instant.",
      4
    );
    this.broadcast("Start fight 2");
  }

  *whenIReceiveStartFight2() {
    this.visible = false;
  }

  *whenIReceiveEndFight2() {
    this.visible = true;
    this.goto(-161, -54);
  }

  *whenIReceiveEndPhase3() {
    this.goto(-159, -106);
    this.direction = 90;
    yield* this.wait(5);
    yield* this.sayAndWait(
      "Yes, I can't wait to get there. Let's search for the boss.",
      4
    );
    this.broadcast("start boss fight");
  }

  *whenIReceiveStartBossFight() {
    this.visible = false;
  }

  *whenIReceiveEndBossFight() {
    this.visible = true;
    this.goto(-166, -118);
  }

  *whenIReceiveCarsonAfterBossFight() {
    yield* this.sayAndWait(
      "Yes! The moment has come for me to get to the Kingdom of Javaria...",
      5
    );
    this.broadcast("start Javaria");
  }

  *whenIReceiveStartJavaria() {
    this.goto(-123, -117);
    yield* this.sayAndWait(
      "It would have been very difficult to get here without your help! Thanks a lot Old Monk.",
      5
    );
    yield* this.wait(13);
    yield* this.sayAndWait("But wait, How do you know THAAT??", 4);
  }

  *whenIReceiveEndGame() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    this.visible = true;
  }
}
