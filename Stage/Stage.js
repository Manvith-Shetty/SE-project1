/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("bsckdrop1", "./Stage/costumes/bsckdrop1.png", {
        x: 480,
        y: 359
      }),
      new Costume("Backdrop-2", "./Stage/costumes/Backdrop-2.png", {
        x: 480,
        y: 360
      }),
      new Costume("Backdrop-3", "./Stage/costumes/Backdrop-3.png", {
        x: 480,
        y: 359
      }),
      new Costume("backdrop-4", "./Stage/costumes/backdrop-4.png", {
        x: 480,
        y: 360
      }),
      new Costume("Javaria", "./Stage/costumes/Javaria.png", {
        x: 480,
        y: 360
      }),
      new Costume(
        "to-be-continued-one-piece12",
        "./Stage/costumes/to-be-continued-one-piece12.png",
        { x: 480, y: 360 }
      )
    ];

    this.sounds = [
      new Sound(
        "one-piece-to-be-continued-made-with-Voicemod-technology",
        "./Stage/sounds/one-piece-to-be-continued-made-with-Voicemod-technology.mp3"
      )
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "End phase1" },
        this.whenIReceiveEndPhase1
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "End_Phase-2" },
        this.whenIReceiveEndPhase2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "end phase 3" },
        this.whenIReceiveEndPhase3
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
      )
    ];
  }

  *whenIReceiveEndPhase1() {
    this.effects.pixelate = 28;
    this.costume = "Backdrop-2";
  }

  *whenGreenFlagClicked() {
    this.effects.pixelate = 28;
    this.costume = "bsckdrop1";
  }

  *whenIReceiveEndPhase2() {
    this.effects.pixelate = 30;
    /* TODO: Implement looks_switchbackdroptoandwait */ null;
  }

  *whenIReceiveEndPhase3() {
    this.effects.pixelate = 30;
    /* TODO: Implement looks_switchbackdroptoandwait */ null;
  }

  *whenIReceiveStartJavaria() {
    this.effects.pixelate = 10;
    /* TODO: Implement looks_switchbackdroptoandwait */ null;
  }

  *whenIReceiveEndGame() {
    yield* this.playSoundUntilDone(
      "one-piece-to-be-continued-made-with-Voicemod-technology"
    );
    /* TODO: Implement looks_switchbackdroptoandwait */ null;
  }
}
