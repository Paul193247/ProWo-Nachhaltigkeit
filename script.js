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

const balance = new Balance(1000);

class Park extends Cell {
  constructor() {
    super("bild.jpg", "Park", 300);
  }
}

const htmlstuff = HTMLStuff();

htmlstuff.add("h1", "Spiel");

const grid = new Grid([Park], balance, 10, 10, 600, 600);
