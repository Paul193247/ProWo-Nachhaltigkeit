import {
  Grid,
  Cell,
  HTMLStuff,
  OtherStuff,
  Sidebar,
  weightedGroupSum,
  weightedSum,
  Balance,
} from "./library.js";

const balance = new Balance(2000);

class Park extends Cell {
  constructor() {
    super("Reihenhäuser.png", "Park", 100);
    this.color = "yellow";
    this.sidebar = new Sidebar();
    this.sidebar.add("button", {
      content: "Upgraden für 250",
      callback: () => {
        console.log("ilhsdökhsödkj");
        if (!balance.buy(250)) return;
        this.image.src = "pixil-frame-0 (1).png";
      },
    });
    this.sidebar.add("button", {
      content: "Upgraden für 500",
      callback: () => {
        if (!balance.buy(500)) return;
        this.color = "blue";
      },
    });
  }
  onclick() {
    this.sidebar.open();
  }
}

class Krankenhaus extends Cell {
  constructor() {
    super("pixil-frame-0.png", "Krankenhaus", 100);
    this.color = "green";
    this.sidebar = new Sidebar();
    this.sidebar.add("button", {
      content: "Upgraden für 250",
      callback: () => {
        console.log("ilhsdökhsödkj");
        if (!balance.buy(250)) return;
        this.color = "red";
      },
    });
    this.sidebar.add("button", {
      content: "Upgraden für 500",
      callback: () => {
        if (!balance.buy(500)) return;
        this.color = "blue";
      },
    });
  }
  onclick() {
    this.sidebar.open();
  }
}

const htmlstuff = new HTMLStuff();

htmlstuff.add("h1", "Name des Spieles");
htmlstuff.add("h2", "Deine Aufgabe:");

htmlstuff.add("h3", "Baue eine nachhaltige Stadt");

const grid = new Grid([Park, Krankenhaus], balance, 10, 10, 600, 600);
