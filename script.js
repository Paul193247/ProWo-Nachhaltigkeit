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
let ParkKli = 0;
let KohlekraftwerkKli = 0;
let UBahnkli = 0;
let CasinoKa = 0;
let WohnhäuserKa = 0;
let ArbeitsviertelFabrikKa = 0;
let KohlekraftwerkGuw = 0;
let SupermarktGuw = 0;
let EinkaufsstraßeGuw = 0;
let KrankenhausGuw = 0;
let KindergartenHb = 0;
let GrundschuleHb = 0;
let WeiterführendeSchuleHb = 0;
let UniversitätHb = 0;
let kohlekraftwerkBus = 0;
let WindkraftwerkBus = 0;
let SolarkraftwerkBus = 0;
let AtomkraftwerkBus = 0;
let SupermarktKh = 0;
let EinkaufsstraßeKh = 0;
let KrankenhausWse = 0;
let ArbeitsviertelFabrikAuw = 0;
let KohlekraftwerkAuw = 0;
let AtomkraftwerkAuw = 0;
let KrankenhausAuw = 0;
let CasinoAuw = 0;
let KindergartenAuw = 0;
let SchuleAuw = 0;
let UniversitätAuw = 0;
let SupermarktAuw = 0;
let PolizeiFeuerwehrAuw = 0;
let UBahnAuw = 0;
let FabrikIiui = 0;
let KohlekraftwerkIiui = 0;
let SolarkraftwerkIiui = 0;
let AtomkraftwerkIiui = 0;
let WindkraftwerkIiui = 0;


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
