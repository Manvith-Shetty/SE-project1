/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class OldMonk extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("", "./OldMonk/costumes/.png", { x: 240, y: 240 }),
      new Costume(
        "kryss-ikari-oldman-idle-d2",
        "./OldMonk/costumes/kryss-ikari-oldman-idle-d2.png",
        { x: 240, y: 240 }
      ),
      new Costume(
        "kryss-ikari-oldman-idle-d3",
        "./OldMonk/costumes/kryss-ikari-oldman-idle-d3.png",
        { x: 240, y: 240 }
      ),
      new Costume(
        "kryss-ikari-oldman-idle-d4",
        "./OldMonk/costumes/kryss-ikari-oldman-idle-d4.png",
        { x: 240, y: 240 }
      ),
      new Costume(
        "kryss-ikari-oldman-idle-d5",
        "./OldMonk/costumes/kryss-ikari-oldman-idle-d5.png",
        { x: 240, y: 240 }
      ),
      new Costume(
        "kryss-ikari-oldman-idle-d6",
        "./OldMonk/costumes/kryss-ikari-oldman-idle-d6.png",
        { x: 240, y: 240 }
      ),
      new Costume(
        "kryss-ikari-oldman-idle-d7",
        "./OldMonk/costumes/kryss-ikari-oldman-idle-d7.png",
        { x: 240, y: 240 }
      ),
      new Costume(
        "kryss-ikari-oldman-idle-d8",
        "./OldMonk/costumes/kryss-ikari-oldman-idle-d8.png",
        { x: 240, y: 240 }
      ),
      new Costume(
        "kryss-ikari-oldman-idle-d9",
        "./OldMonk/costumes/kryss-ikari-oldman-idle-d9.png",
        { x: 240, y: 240 }
      ),
      new Costume(
        "kryss-ikari-oldman-idle-d10",
        "./OldMonk/costumes/kryss-ikari-oldman-idle-d10.png",
        { x: 240, y: 240 }
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
        { name: "End Fight 1" },
        this.whenIReceiveEndFight1
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
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

  *whenGreenFlagClicked() {
    this.goto(172, -95);
  }

  *whenIReceiveStartDialouge() {
    yield* this.sayAndWait(
      "What brings a young lad like you to this place.",
      4
    );
    yield* this.wait(5);
    yield* this.sayAndWait(
      "It's impossible to get there as there are many threats on your way.",
      4
    );
    yield* this.wait(5);
    yield* this.sayAndWait(
      "I will guide you to the Kingdom, if you help me uncover the mysteries. ",
      4
    );
    yield* this.wait(1);
    yield* this.sayAndWait(
      "Lucky to you those mysteries lie on same path as that of your destiny.",
      4
    );
    yield* this.wait(9);
    yield* this.sayAndWait(
      "I will surely guide you but before we leave tell me your name.",
      4
    );
    yield* this.wait(5);
    yield* this.sayAndWait(
      "Ah! That name, may be it is destiny. Come, I'll lead the way",
      4
    );
    this.broadcast("End phase1");
  }

  *whenIReceiveEndPhase1() {
    this.goto(-188, -98);
    yield* this.wait(5);
    yield* this.sayAndWait("Karson, this is your first enemy on your path.", 4);
    yield* this.wait(1);
    yield* this.sayAndWait("Defeating him is our only way forward. ", 4);
    this.visible = false;
  }

  *whenIReceiveEndFight1() {
    this.visible = true;
    this.goto(174, -79);
    yield* this.sayAndWait(
      "Very well done in defeating the gatekeeper, but we are stuck in this dimension...",
      4
    );
    yield* this.wait(1);
    yield* this.sayAndWait(
      "I will explain you about the mystery of this dimension and you have to provide an answer ",
      4
    );
    yield* this.wait(1);
    yield* this.sayAndWait(
      " if it is a valid one we can get out of this dimension.",
      4
    );
    yield* this.wait(4);
    yield* this.sayAndWait("Okay!", 2);
    yield* this.wait(1);
    yield* this.sayAndWait(
      "Polymorphism is a feature that allows one interface to be used for a general class of actions. The concept of polymorphism is often expressed by the phrase “one interface, multiple methods.” ",
      15
    );
    yield* this.wait(1);
    yield* this.sayAndWait(
      "Method overloading – multiple methods with same name and different number of arguments or data types are written in the same class only. Similar is with constructor overloading. ",
      15
    );
    yield* this.wait(1);
    yield* this.sayAndWait(
      "Method overriding is the run time polymorphism as the methods call get resolved at run time. Compiler will not be able to decide which object’s method to call at compile time.",
      15
    );
    yield* this.wait(1);
    while (!(this.toNumber(this.answer) === 3)) {
      yield* this.askAndWait(
        "Which polymorphism feature is related to parent and child class relationship in java?  (Enter 1) Method overloading (Enter 2) Constructor overloading (Enter 3) Method overriding"
      );
      if (this.toNumber(this.answer) === 3) {
        yield* this.sayAndWait("Correct answer", 3);
      } else {
        yield* this.sayAndWait("Wrong answer", 3);
      }
      yield;
    }
    yield* this.sayAndWait("Yes! Now we can get out this dimension", 4);
    this.broadcast("End_Phase-2");
  }

  *whenGreenFlagClicked2() {
    this.visible = true;
  }

  *whenIReceiveEndPhase2() {
    this.goto(-182, -84);
    yield* this.wait(5);
    yield* this.sayAndWait(
      "This creature might be the gatekeeper of this dimension! Defeat him and will continue on with our quest.",
      5
    );
  }

  *whenIReceiveStartFight2() {
    this.visible = false;
  }

  *whenIReceiveEndFight2() {
    this.visible = true;
    this.goto(123, -45);
    yield* this.sayAndWait(
      "Nice one defeating the gatekeeper, now for the mystery",
      4
    );
    yield* this.wait(1);
    yield* this.sayAndWait(
      "Encapsulation is the mechanism that binds together code and the data it manipulates, and keeps both safe from outside interference and misuse. Encapsulation means, hiding the complexities in java programs.",
      15
    );
    yield* this.wait(1);
    yield* this.sayAndWait(
      "The power of encapsulated code is that everyone knows how to access it and thus can use it regardless of the implementation details—and without fear of unexpected side effects.!",
      15
    );
    yield* this.wait(1);
    while (!(this.toNumber(this.answer) === 4)) {
      yield* this.askAndWait(
        "Q) Which of the following concept can be used for encapsulation in java programs? (enter 1) Wrapping data fields with methods. (enter 2) Using Interfaces (enter 3) Hiding data and internal methods using access modifiers in a class (enter 4) All of the above "
      );
      if (this.toNumber(this.answer) === 4) {
        yield* this.sayAndWait("Correct answer", 3);
      } else {
        yield* this.sayAndWait("Wrong answer", 3);
      }
      yield;
    }
    yield* this.sayAndWait(
      "That was not easy to decipher. You did a great job! Now we can move onto our next quest.",
      4
    );
    this.broadcast("end phase 3");
  }

  *whenIReceiveEndPhase3() {
    this.goto(144, -87);
    yield* this.sayAndWait(
      "This is the final dimension clearing which will lead to the Kingdom, your destiny",
      4
    );
    yield* this.wait(1);
  }

  *whenIReceiveStartBossFight() {
    this.visible = false;
  }

  *whenIReceiveEndBossFight() {
    this.visible = true;
    this.goto(152, -83);
    yield* this.sayAndWait(
      "Time for your next and final mystery to get out of this dimension.",
      5
    );
    yield* this.wait(1);
    yield* this.sayAndWait(
      "Inheritance is the process by which one object acquires the properties of another object. This is important because it supports the concept of hierarchical classification.",
      15
    );
    yield* this.wait(1);
    yield* this.sayAndWait(
      " Java does not support multiple inheritance of classes but it supports multiple inheritance for interfaces. Means, a class cannot inherit more than one class but it can inherit and implement multiple interfaces.",
      15
    );
    while (!(this.toNumber(this.answer) === 1)) {
      yield* this.askAndWait(
        "Q) Which inheritance in java programming is not supported? (press 1) Multiple inheritance using classes. (press 2) Multiple inheritance using interfaces. (press 3) Multilevel inheritance. (press 4) Single inheritance"
      );
      if (this.toNumber(this.answer) === 1) {
        yield* this.sayAndWait("correct answer", 3);
      } else {
        yield* this.sayAndWait("wrong answer", 3);
      }
      yield;
    }
    yield* this.sayAndWait(
      "Well done solving all the mysteries and defeating the dragon. Now we can finally get to the Kingdom of Javaria!!!!",
      6
    );
    this.broadcast("carson after boss fight");
  }

  *whenIReceiveStartJavaria() {
    this.goto(114, -94);
    yield* this.wait(6);
    yield* this.sayAndWait(
      "No need to thank me. I knew from the very beginning that you will make it till here!",
      5
    );
    yield* this.wait(2);
    yield* this.sayAndWait(
      "And I also know that you are in search of someone named Johan Liebert.",
      5
    );
    yield* this.wait(5);
    yield* this.sayAndWait("Because..", 3);
    yield* this.wait(1);
    yield* this.sayAndWait("I am...... ", 3);
    yield* this.wait(1);
    yield* this.sayAndWait("KARSON LIEBERT", 8);
    this.broadcast("end game");
  }

  *whenIReceiveEndGame() {
    this.visible = false;
  }
}
