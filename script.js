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

const balance = new Balance(Infinity);

class Park extends Cell {
  constructor() {
    super("img/park.png", "Park", 900000);
    this.sidebar = new Sidebar();
    this.sidebar.add("button", {
      content: "Upgraden zu Spielplatz für 250",
      callback: () => {
        console.log("sdfbdsfbsdfbsdfbsdfbsdfbsdfbdsfbsdfb");
        if (!balance.buy(250)) return;
        this.cost += 250;
        this.image.src = "img/park upgrade.png";
        this.sidebar = new Sidebar();
        this.sidebar.add("h3", { content: "Maximale Stufe erreicht" });
        this.sidebar.open();
      },
    });
  }
  onclick() {
    this.sidebar.open();
  }
}

class Krankenhaus extends Cell {
  constructor() {
    super("img/Krankenhaus1.png", "Notfall Einrichtungen", 200000);
    this.color = "yellow";
    this.sidebar = new Sidebar();
    this.sidebar.add("button", {
      content: "Polizei Station",
      callback: () => {
        this.image.src = "img/Polizei.png";
        this.sidebar.open();
      },
    });
    this.sidebar.add("button", {
      content: "Feuerwache",
      callback: () => {
        this.image.src = "img/Feuerwehr.png";
        this.sidebar.open();
      },
    });
  }
  onclick() {
    this.sidebar.open();
  }
}
class Einkaufsladen extends Cell {
  constructor() {
    super("img/Einkaufsladen.png", "Einkaufsladen", 250000);
    this.color = "yellow";
    this.sidebar = new Sidebar();
    this.sidebar.add("h3", { content: "Maximale Stufe erreicht" });
  }
  onclick() {
    this.sidebar.open();
  }
}

class Fabrik extends Cell {
  constructor() {
    super("img/Fabrik.png", "Fabrik", 100);
    this.color = "yellow";
    this.sidebar = new Sidebar();
    this.sidebar.add("h3", { content: "Maximale Stufe erreicht" });
  }
  onclick() {
    this.sidebar.open();
  }
}
class Kreuzung extends Cell {
  constructor() {
    super("img/KreuzungTemplate1.png", "Straßen", 0);
    this.color = "yellow";
    this.sidebar = new Sidebar();
    this.sidebar.add("button", {
      content: "Linkskurve",
      callback: () => {
        this.image.src = "img/LKreuzungLU.png";
        this.sidebar.open();
      },
    });
    this.sidebar.add("button", {
      content: "Rechtskurve",
      callback: () => {
        this.image.src = "img/LKreuzungUR.png";
        this.sidebar.open();
      },
    });
    this.sidebar.add("button", {
      content: "Linkskurve von oben",
      callback: () => {
        this.image.src = "img/LKreuzungOL.png";
        this.sidebar.open();
      },
    });
    this.sidebar.add("button", {
      content: "Rechtkurve von oben",
      callback: () => {
        this.image.src = "img/LKreuzungOR.png";
        this.sidebar.open();
      },
    });
    this.sidebar.add("button", {
      content: "Straße Senkrecht",
      callback: () => {
        this.image.src = "img/StraßeH.png";
        this.sidebar.open();
      },
    });
    this.sidebar.add("button", {
      content: "Straße Waagerecht",
      callback: () => {
        this.image.src = "img/StraßeV.png";
        this.sidebar.open();
      },
    });
    this.sidebar.add("button", {
      content: "T-Kreuzung Links",
      callback: () => {
        this.image.src = "img/TKreuzungL.png";
        this.sidebar.open();
      },
    });
    this.sidebar.add("button", {
      content: "T-Kreuzung Rchts",
      callback: () => {
        this.image.src = "img/TKreuzungR.png";
        this.sidebar.open();
      },
    });
    this.sidebar.add("button", {
      content: "T-Kreuzung Oben",
      callback: () => {
        this.image.src = "img/TKreuzungO.png";
        this.sidebar.open();
      },
    });
    this.sidebar.add("button", {
      content: "T-Kreuzung Unten",
      callback: () => {
        this.image.src = "img/TKreuzungU.png";
        this.sidebar.open();
      },
    });
    this.sidebar.add("button", {
      content: "Kreuzung",
      callback: () => {
        this.image.src = "img/KreuzungTemplate1.png";
        this.sidebar.open();
      },
    });
  }
  onclick() {
    this.sidebar.open();
  }
}
class Casino extends Cell {
  constructor() {
    super("img/Casino.png", "Casino", 100000);
    this.color = "yellow";

    this.sidebar = new Sidebar();
    this.sidebar.add("h3", { content: "Maximale Stufe erreicht" });
  }
  onclick() {
    this.sidebar.open();
  }
}

class Kindergarten extends Cell {
  constructor() {
    super("img/Kindergarten1.png", "Kindergarten", 3400000);
    this.color = "yellow";
    this.sidebar = new Sidebar();
    this.sidebar.add("button", {
      content: "Upgraden zu Schule für 250",
      callback: () => {
        console.log("dfgsdfd");
        if (!balance.buy(250)) return;
        this.cost += 250;
        this.image.src = "img/Schule1.png";
        this.sidebar = new Sidebar();
        this.sidebar.add("button", {
          content: "Upgraden zu Uni für 250",
          callback: () => {
            console.log("sdfbdsfbsdfbsdfbsdfbsdfbsdfbdsfbsdfb");
            if (!balance.buy(250)) return;
            this.image.src = "img/Uni1.png";
            this.sidebar = new Sidebar();
            this.sidebar.add("h3", { content: "Maximale Stufe erreicht" });
            this.sidebar.open();
          },
        });
        this.sidebar.open();
      },
    });
  }
  onclick() {
    this.sidebar.open();
  }
}
class Häuser extends Cell {
  constructor() {
    super("img/Haueser1.png", "Häuser", 405000);
    this.color = "yellow";
    this.sidebar = new Sidebar();
    this.sidebar.add("button", {
      content: "Upgraden zu Reihenhäuser für 250",
      callback: () => {
        if (!balance.buy(250)) return;
        this.image.src = "img/Reihenhäuser.png";
        this.sidebar = new Sidebar();
        this.sidebar.add("button", {
          content: "Upgraden zu Plattenbau für 250",
          callback: () => {
            console.log("sdfbdsfbsdfbsdfbsdfbsdfbsdfbdsfbsdfb");
            if (!balance.buy(250)) return;
            this.image.src = "img/Plattenbau1.png";

            this.sidebar = new Sidebar();
            this.sidebar.add("button", {
              content: "Upgraden zu Plattenbau mit Solarplatten für 250",
              callback: () => {
                console.log("sdfbdsfbsdfbsdfbsdfbsdfbsdfbdsfbsdfb");
                if (!balance.buy(250)) return;
                this.image.src = "img/Plattenbau2.png";
                this.sidebar = new Sidebar();
                this.sidebar.add("button", {
                  content: "Upgraden zu Wolkenkratzer für 250",
                  callback: () => {
                    console.log("sdfbdsfbsdfbsdfbsdfbsdfbsdfbdsfbsdfb");
                    if (!balance.buy(250)) return;
                    this.image.src = "img/Wolkenkratzer.png";
                    this.sidebar = new Sidebar();
                    this.sidebar.add("h3", {
                      content: "Maximale Stufe erreicht",
                    });
                    this.sidebar.open();
                  },
                });
                this.sidebar.open();
              },
            });
            this.sidebar.open();
          },
        });
        this.sidebar.open();
      },
    });
  }
  onclick() {
    this.sidebar.open();
  }
}

class UBahn extends Cell {
  constructor() {
    super("img/U Bahn.png", "U-Bahn", 2000000);
    this.color = "yellow";
    this.sidebar = new Sidebar();
    this.sidebar.add("h3", { content: "Maximale Stufe erreicht" });
  }
  onclick() {
    this.sidebar.open();
  }
}
class Einkaufsstraße extends Cell {
  constructor() {
    super("img/einkaufsstraße.png", "Einkaufsstraße", 70000000);
    this.sidebar = new Sidebar();
    this.sidebar.add("button", {
      content: "Upgraden zu Shopping Mall für 250",
      callback: () => {
        console.log("sdfbdsfbsdfbsdfbsdfbsdfbsdfbdsfbsdfb");
        if (!balance.buy(250)) return;
        this.image.src = "img/einkaufsstraße upgrade.png";
        this.sidebar = new Sidebar();
        this.sidebar.add("h3", { content: "Maximale Stufe erreicht" });
        this.sidebar.open();
      },
    });
  }
  onclick() {
    this.sidebar.open();
  }
}
class Kraftwerk extends Cell {
  constructor() {
    super("img/Kohlekraftwerk1.png", "Kraftwerk", 1200000000);
    this.sidebar = new Sidebar();
    this.sidebar.add("button", {
      content: "Upgraden zu Windkraftwerk für 250",
      callback: () => {
        console.log("sdfbdsfbsdfbsdfbsdfbsdfbsdfbdsfbsdfb");
        if (!balance.buy(250)) return;
        this.image.src = "img/Windkraftwerk1.png";
        this.sidebar = new Sidebar();
        this.sidebar.add("button", {
          content: "Upgraden zu Atomkraftwerk für 250",
          callback: () => {
            console.log("sdfbdsfbsdfbsdfbsdfbsdfbsdfbdsfbsdfb");
            if (!balance.buy(250)) return;
            this.image.src = "img/Atomkraftwerk.png";
            this.sidebar = new Sidebar();
            this.sidebar.add("h3", { content: "Maximale Stufe erreicht" });
            this.sidebar.open();
          },
        });
        this.sidebar.open();
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

const score_display = htmlstuff.add("div", "");

const balance_display = htmlstuff.add("div", "");

const grid = new Grid(
  [
    Park,
    Krankenhaus,
    Häuser,
    Kindergarten,
    Fabrik,
    Kreuzung,
    Einkaufsladen,
    Casino,
    UBahn,
    Einkaufsstraße,
    Kraftwerk,
  ],
  balance,
  10,
  10,
  600,
  600
);

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
      if (i) {
        const fullSrc = i.image.src;
        const filename = fullSrc.split("/").pop();
        if (filename == "Reihenhäuser.png") WohnhäuserKa += 7;
        if (filename == "Kohlekraftwerk.png") KohlekraftwerkKli -= 3;
        if (filename == "U%20Bahn.png") {
          UBahnkli += 5;
        }
        if (filename == "Park.png") ParkKli += 7;
        if (filename == "Casino.png") CasinoKa -= 2;
        if (filename == "ArbeitsviertelFabrik.png")
          ArbeitsviertelFabrikKa += 10;
        if (filename == "Kohlekraftwerk.png") KohlekraftwerkGuw -= 3;
        if (filename == "Supermarkt.png") SupermarktGuw += 5;
        if (filename == "Einkaufsstraße.png") EinkaufsstraßeGuw += 7;
        if (filename == "Krankenhaus.png") KrankenhausGuw += 10;
        if (filename == "Kindergarten.png") KindergartenHb += 1;
        if (filename == "Grundschule.png") GrundschuleHb += 3;
        if (filename == "WeiterführendeSchule.png") WeiterführendeSchuleHb += 7;
        if (filename == "Universität.png") UniversitätHb += 10;
        if (filename == "Kohlekraftwerk.png") kohlekraftwerkBus += 1;
        if (filename == "Windkraftwerk.png") WindkraftwerkBus += 5;
        if (filename == "Solarkraftwerk.png") SolarkraftwerkBus += 7;
        if (filename == "Atomkraftwerk.png") AtomkraftwerkBus += 10;
        if (filename == "Supermarkt.png") SupermarktKh += 10;
        if (filename == "Einkaufsstraße.png") EinkaufsstraßeKh += 10;
        if (filename == "Krankenhaus.png") KrankenhausWse += 10;
        if (filename == "ArbeitsviertelFabrik.png")
          ArbeitsviertelFabrikAuw += 1;
        if (filename == "Kohlekraftwerk.png") KohlekraftwerkAuw += 0.5;
        if (filename == "Atomkraftwerk.png") AtomkraftwerkAuw += 10;
        if (filename == "Krankenhaus.png") KrankenhausAuw += 4;
        if (filename == "Casino.png") CasinoAuw += 7;
        if (filename == "Kindergarten.png") KindergartenAuw += 5;
        if (filename == "Schule.png") SchuleAuw += 5;
        if (filename == "Universität.png") UniversitätAuw += 5;
        if (filename == "Supermarkt.png") SupermarktAuw += 4;
        if (filename == "PolizeiFeuerwehr.png") PolizeiFeuerwehrAuw += 5;
        if (filename == "UBahn.png") UBahnAuw += 4;
        if (filename == "Fabrik.png") FabrikIiui += 6;
        if (filename == "Kohlekraftwerk.png") KohlekraftwerkIiui += 6.5;
        if (filename == "Windkraftwerk.png") WindkraftwerkIiui += 7;
        if (filename == "Solarkraftwerk.png") SolarkraftwerkIiui += 8;
        if (filename == "Atomkraftwerk.png") AtomkraftwerkIiui += 8.5;
      }
    }
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

  const groups = [Kli, Ka, Guw, Hb, Bus, Kh, Wse, Auw, Iiui];
  const overallSustainability = weightedGroupSum(groups);

  score_display.innerHTML = `Score: ${overallSustainability.toFixed(2)}`;

  balance_display.innerHTML = `Balance: ${balance.balance}`;
  requestAnimationFrame(update_score);
}

update_score();
