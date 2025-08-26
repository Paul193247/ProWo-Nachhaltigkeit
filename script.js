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




function update_score() {
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
  const all_scores = [];
  for (let g of grid.grid) {
    for (let i of g) {
      if (i){
        if (i.image.src == "img/Reihenhäuser.png") WohnhäuserKa = +7;
        if (i.image.src == "img/Kohlekraftwerk.png") KohlekraftwerkKli = -3;
        if (i.image.src == "img/UBahn.png") UBahnkli = +5;
        if (i.image.src == "img/Park.png") ParkKli = +7;
        if (i.image.src == "img/Casino.png") CasinoKa = -2;
        if (i.image.src == "img/ArbeitsviertelFabrik.png") ArbeitsviertelFabrikKa = +10;
        if (i.image.src == "img/Kohlekraftwerk.png") KohlekraftwerkGuw = -3;
        if (i.image.src == "img/Supermarkt.png") SupermarktGuw = +5;
        if (i.image.src == "img/Einkaufsstraße.png") EinkaufsstraßeGuw = +7
        if (i.image.src == "img/Krankenhaus.png") KrankenhausGuw = +10
        if (i.image.src == "img/Kindergarten.png") KindergartenHb = +1;
        if (i.image.src == "img/Grundschule.png") GrundschuleHb = +3;
        if (i.image.src == "img/WeiterführendeSchule.png") WeiterführendeSchuleHb = +7;
        if (i.image.src == "img/Universität.png") UniversitätHb = +10
        if (i.image.src == "img/Kohlekraftwerk.png") kohlekraftwerkBus = +1;
        if (i.image.src == "img/Windkraftwerk.png") WindkraftwerkBus = +5;
        if (i.image.src == "img/Solarkraftwerk.png") SolarkraftwerkBus = +7;
        if (i.image.src == "img/Atomkraftwerk.png") AtomkraftwerkBus = +10;
        if (i.image.src == "img/Supermarkt.png") SupermarktKh = +10;
        if (i.image.src == "img/Einkaufsstraße.png") EinkaufsstraßeKh = +10;
        if (i.image.src == "img/Krankenhaus.png") KrankenhausWse = +10;
        if (i.image.src == "img/ArbeitsviertelFabrik.png") ArbeitsviertelFabrikAuw = +1;
        if (i.image.src == "img/Kohlekraftwerk.png") KohlekraftwerkAuw = +0.5;
        if (i.image.src == "img/Atomkraftwerk.png") AtomkraftwerkAuw = +10;
        if (i.image.src == "img/Krankenhaus.png") KrankenhausAuw = +4;
        if (i.image.src == "img/Casino.png") CasinoAuw = +7;
        if (i.image.src == "img/Kindergarten.png") KindergartenAuw = +5;
        if (i.image.src == "img/Schule.png") SchuleAuw = +5;
        if (i.image.src == "img/Universität.png") UniversitätAuw = +5;
        if (i.image.src == "img/Supermarkt.png") SupermarktAuw = +4;
        if (i.image.src == "img/PolizeiFeuerwehr.png") PolizeiFeuerwehrAuw = +5;
        if (i.image.src == "img/UBahn.png") UBahnAuw = +4;
        if (i.image.src == "img/Fabrik.png") FabrikIiui = +6;
        if (i.image.src == "img/Kohlekraftwerk.png") KohlekraftwerkIiui = +6.5;
        if (i.image.src == "img/Windkraftwerk.png") WindkraftwerkIiui = +7;
        if (i.image.src == "img/Solarkraftwerk.png") SolarkraftwerkIiui = +8;
        if (i.image.src == "img/Atomkraftwerk.png") AtomkraftwerkIiui = +8.5;
      
    
        
    

      }
      const Kli = {
        values: [
          { value: KohlekraftwerkKli, weight: 3.3 },
          { value: UBahnkli, weight: 3.3 },
          { value: ParkKli, weight: 3.3 },  
        ],
         weight: 12,
      };
      const Ka = {
        values: [
          { value: CasinoKa, weight: 3.3 },
          { value: WohnhäuserKa, weight: 3.3 },
          { value: ArbeitsviertelFabrikKa, weight: 3.3 },
        ],
        weight: 11,
      };
      const Guw = {
        values: [
          { value: KohlekraftwerkGuw, weight: 2.5 },
          { value: SupermarktGuw, weight: 2.5 },
          { value: EinkaufsstraßeGuw, weight: 2.5 }, 
          { value: KrankenhausGuw, weight: 2.5 }, 
        ],
        weight: 11,
      };
      const Hb = {
        values: [
          { value: KindergartenHb, weight: 2.5 },
          { value: GrundschuleHb, weight: 2.5 },
          { value: WeiterführendeSchuleHb, weight: 2.5 },
          { value: UniversitätHb, weight: 2.5 },
        ],
        weight: 11,
      };
      const Bus = {
        values: [
          { value: kohlekraftwerkBus, weight: 2.5 },
          { value: WindkraftwerkBus, weight: 2.5 },
          { value: SolarkraftwerkBus, weight: 2.5 },
          { value: AtomkraftwerkBus, weight: 2.5 },
        ],
        weight: 11,
      };
      const Kh = {
        values: [
          { value: SupermarktKh, weight: 5 },
          { value: EinkaufsstraßeKh, weight: 5 },
        ],
        weight: 11,
      };
      const Wse = {
        values: [{ value: KrankenhausWse, weight: 10 }],
        weight: 11,
      };
      const Auw = {
        values: [
          { value: ArbeitsviertelFabrikAuw, weight: 0.9 },
          { value: KohlekraftwerkAuw, weight: 0.9 },
          { value: AtomkraftwerkAuw, weight: 0.9 },
          { value: KrankenhausAuw, weight: 0.9 },
          { value: CasinoAuw, weight: 0.9 },
          { value: KindergartenAuw, weight: 0.9 },
          { value: SchuleAuw, weight: 0.9 },
          { value: UniversitätAuw, weight: 0.9 },
          { value: SupermarktAuw, weight: 0.9 },
          { value: PolizeiFeuerwehrAuw, weight: 0.9 },
          { value: UBahnAuw, weight: 0.9 },
        ],
        weight: 11,
      };
      const Iiui = {
        values: [
          { value: FabrikIiui, weight: 2 },
          { value: KohlekraftwerkIiui, weight: 2 },
          { value: WindkraftwerkIiui, weight: 2 },
          { value: SolarkraftwerkIiui, weight: 2 },
          { value: AtomkraftwerkIiui, weight: 2 },
        ],
        weight: 11,
      };
    
  
  
  
score_display.innerHTML = `Score: ${
 score + all_scores.reduce((acc, val) => acc + val, 0)
}`;
balance_display.innerHTML = `Balance: ${balance.balance}`;
requestAnimationFrame(update_score);
}
update_score();
