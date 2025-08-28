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
    super("img/park.png", "Park", 3000000);
    this.sidebar = new Sidebar();
    this.sidebar.add("button", {
      content: "Upgraden zu Spielplatz für 500 000",
      callback: () => {
        console.log("sdfbdsfbsdfbsdfbsdfbsdfbsdfbdsfbsdfb");
        if (!balance.buy(500000)) return;
        this.cost += 500000;
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
    super("img/Krankenhaus1.png", "Notfall Einrichtungen", 30000000);
    this.color = "yellow";
    this.sidebar = new Sidebar();
   this.sidebar.add("h1", { content: "Krankenhaus" });
    this.sidebar.add("div", {
      content: "Hat hohe positive Auswirkung auf Sanitär Einrichtungen",
    });
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
    super("img/Einkaufsladen.png", "Einkaufsladen", 3000000);
    this.color = "yellow";
    this.sidebar = new Sidebar();
    this.sidebar.add("h1", { content: "Supermarkt" });
    this.sidebar.add("div", {
      content: "Hat positive Auswirkung auf den Hunger der Menschen",
    });
    this.sidebar.add("h3", { content: "Maximale Stufe erreicht" });
  }
  onclick() {
    this.sidebar.open();
  }
}

class Fabrik extends Cell {
  constructor() {
    super("img/Fabrik.png", "Fabrik", 3000000);
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
    super("img/Casino.png", "Casino", 5000000);
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
    super("img/Kindergarten1.png", "Kindergarten", 7000000);
    this.color = "yellow";
    this.sidebar = new Sidebar();
    this.sidebar.add("h1", { content: "Kindergarten" });
    this.sidebar.add("div", {
      content: "Erhöht die Bildung und zufriedenheit der Bürger",
    });
    this.sidebar.add("button", {
      content: "Upgraden zu Schule für 7 Mio",
      
    callback: () => {
        console.log("dfgsdfd");
        if (!balance.buy(7000000)) return;
        this.cost += 7000000;
        this.image.src = "img/Schule1.png";
        this.sidebar = new Sidebar();
        this.sidebar.add("h1", { content: "Schule" });
        this.sidebar.add("div", {
      content: "Erhöht die Bildung und zufriedenheit der Bürger",
    });
        this.sidebar.add("button", {
          content: "Upgraden zu Uni für 60 Mio",
          callback: () => {
            console.log("sdfbdsfbsdfbsdfbsdfbsdfbsdfbdsfbsdfb");
            if (!balance.buy(60000000)) return;
            this.image.src = "img/Uni1.png";
            this.sidebar = new Sidebar();
           this.sidebar.add("h1", { content: "Universität" });
            this.sidebar.add("div", {
      content: "Erhöht die Bildung und zufriedenheit der Bürger",
    });
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
    super("img/Haueser1.png", "Häuser", 4000000);
    this.color = "yellow";
    this.sidebar = new Sidebar();
    this.sidebar.add("button", {
      content: "Upgraden zu Reihenhäuser für 10 Mio",
      callback: () => {
        if (!balance.buy(10000000)) return;
        this.image.src = "img/Reihenhäuser.png";
        this.sidebar = new Sidebar();
        this.sidebar.add("button", {
          content: "Upgraden zu Plattenbau für 1 Mio",
          callback: () => {
            console.log("sdfbdsfbsdfbsdfbsdfbsdfbsdfbdsfbsdfb");
            if (!balance.buy(1000000)) return;
            this.image.src = "img/Plattenbau1.png";

            this.sidebar = new Sidebar();
            this.sidebar.add("button", {
              content: "Upgraden zu Plattenbau mit Solarplatten für 500 000",
              callback: () => {
                console.log("sdfbdsfbsdfbsdfbsdfbsdfbsdfbdsfbsdfb");
                if (!balance.buy(500000)) return;
                this.image.src = "img/Plattenbau2.png";
                this.sidebar = new Sidebar();
                this.sidebar.add("button", {
                  content: "Upgraden zu Wolkenkratzer für 20 Mio",
                  callback: () => {
                    console.log("sdfbdsfbsdfbsdfbsdfbsdfbsdfbdsfbsdfb");
                    if (!balance.buy(20000000)) return;
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
    this.sidebar.add("h1", { content: "U-Bahn" });
    this.sidebar.add("div", {
      content: "Hat positive Auswirkung auf den Klimaschutz",
    });
    this.sidebar.add("h3", { content: "Maximale Stufe erreicht" });
  }
  onclick() {
    this.sidebar.open();
  }
}
class Einkaufsstraße extends Cell {
  constructor() {
    super("img/einkaufsstraße.png", "Einkaufsstraße", 15000000);
    this.sidebar = new Sidebar();
    this.sidebar.add("h1", { content: "Einkaufsstraße" });
    this.sidebar.add("div", {
      content: "Hat positive Auswirkung auf den Hunger der Menschen",
    });
    this.sidebar.add("button", {
      content: "Upgraden zu Shopping Mall für 20 Mio.",
      callback: () => {
        console.log("sdfbdsfbsdfbsdfbsdfbsdfbsdfbdsfbsdfb");
        if (!balance.buy(20000000)) return;
        this.image.src = "img/einkaufsstraße upgrade.png";
        this.sidebar = new Sidebar();
        this.sidebar.add("h1", { content: "Shopping Mall" });
    this.sidebar.add("div", {
      content: "Hat maximal positive Auswirkung auf den Hunger der Menschen",
    });
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
    super("img/Kohlekraftwerk1.png", "Kraftwerk", 17000000);
    this.sidebar = new Sidebar();
  this.sidebar.add("h1", { content: "Kohlekraftwerk" });
    this.sidebar.add("div", {
      content: "Schlechte Auswirkung auf bezahlbare und Saubere Energie",
    });
    this.sidebar.add("button", {
      content: "Upgraden zu Windkraftwerk für 15 Mio",
      callback: () => {
        console.log("sdfbdsfbsdfbsdfbsdfbsdfbsdfbdsfbsdfb");
        if (!balance.buy(15000000)) return;
        this.image.src = "img/Windkraftwerk1.png";
        this.sidebar = new Sidebar();
        this.sidebar.add("h1", { content: "Windkraftwerk" });
    this.sidebar.add("div", {
      content: "Bessere Auswirkung auf bezahlbare und Saubere Energie",
    });
        this.sidebar.add("button", {
          content: "Upgraden zu Atomkraftwerk für 100 Mio",
          callback: () => {
            console.log("sdfbdsfbsdfbsdfbsdfbsdfbsdfbdsfbsdfb");
            if (!balance.buy(100000000)) return;
            this.image.src = "img/Atomkraftwerk.png";
            this.sidebar = new Sidebar();
            this.sidebar.add("h1", { content: "Kohlekraftwerk" });
    this.sidebar.add("div", {
      content: "Die beste Auswirkung auf bezahlbare und Saubere Energie",
    });
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

htmlstuff.add("h1", "Sustainable City", { textAlign: "center" });

htmlstuff.add("h3", "Baue eine nachhaltige Stadt", { textAlign: "center" });

const score_display = htmlstuff.add("div", "", { textAlign: "center" });

const balance_display = htmlstuff.add("div", "", { textAlign: "center" });

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
  let UBahnKli = 0;
  let SpielplatzKli = 0;
  let CasinoKa = 0;
  let WohnhäuserKa = 0;
  let ArbeitsviertelFabrikKa = 0;
  let PlattenbauKa = 0;
  let PlattenbausolarKa = 0;
  let ReihenhäuserKa = 0;
  let WolkenkratzerKa = 0;
  let KohlekraftwerkGuw = 0;
  let SupermarktGuw = 0;
  let ShoppingcenterGuw = 0;
  let EinkaufsstraßeGuw = 0;
  let KrankenhausGuw = 0;
  let KindergartenHb = 0;
  let SchuleHb = 0;
  let UniversitätHb = 0;
  let KohlekraftwerkBus = 0;
  let WindkraftwerkBus = 0;
  let AtomkraftwerkBus = 0;
  let SupermarktKh = 0;
  let EinkaufsstraßeKh = 0;
  let ShoppingcenterKh = 0;
  let KrankenhausWse = 0;
  let ArbeitsviertelFabrikAuw = 0;
  let KohlekraftwerkAuw = 0;
  let AtomkraftwerkAuw = 0;
  let KrankenhausAuw = 0;
  let CasinoAuw = 0; 
  let KohlekraftwerkGdm = 0;
  let UBahnGdm = 0;
  let ParkGdm = 0;
  let SpielplatzGdm = 0;
  let CasinoGdm = 0;
  let WohnhäuserGdm = 0;
  let ReihenhäuserGdm = 0;
  let PlattenbauGdm = 0;
  let PlattenbausolarGdm = 0;
  let WolkenkratzerGdm = 0;
  let ArbeitsviertelFabrikGdm = 0;
  let SupermarktGdm = 0;
  let EinkaufsstraßeGdm = 0;
  let KrankenhausGdm = 0;
  let ShoppingcenterGdm = 0;
  let KindergartenGdm = 0;
  let SchuleGdm = 0;
  let UniversitätGdm = 0;
  let PolizeiFeuerwehrGdm = 0;
  let WindkraftwerkGdm = 0;
  let AtomkraftwerkGdm = 0;

  let KindergartenAuw = 0;
  let SchuleAuw = 0;
  let UniversitätAuw = 0;
  let SupermarktAuw = 0;
  let PolizeiFeuerwehrAuw = 0;
  let UBahnAuw = 0;
  let EinkaufsstraßeAuw = 0;

  let ShoppingcenterAuw = 0;
  let FabrikIiui = 0;
  let KohlekraftwerkIiui = 0;
  let AtomkraftwerkIiui = 0;
  let WindkraftwerkIiui = 0;
  const all_scores = [];
  for (let g of grid.grid) {
    for (let i of g) {
      if (i) {
        const fullSrc = i.image.src;
        const filename = fullSrc.split("/").pop();
        if (filename == "Haueser1.png") WohnhäuserKa += 7;
        if (filename == "Plattenbau1.png") PlattenbauKa += 8;
        if (filename == "Plattenbau2.png") PlattenbausolarKa += 9;
        if (filename == "Reihenhäuser.png") ReihenhäuserKa += 8;
        if (filename == "Wolkenkratzer.png") WolkenkratzerKa += 9;
        if (filename == "Kohlekraftwerk1.png") KohlekraftwerkKli -= 3;
        if (filename == "U Bahn.png") UBahnKli += 5;
        if (filename == "park.png") ParkKli += 7;
        if (filename == "Spielplatz.png") SpielplatzKli += 9;
        if (filename == "Casino.png") CasinoKa -= 2;
        if (filename == "Fabrik.png") ArbeitsviertelFabrikKa += 10;
        if (filename == "Kohlekraftwerk1.png") KohlekraftwerkGuw -= 3;
        if (filename == "Einkaufsladen.png") SupermarktGuw += 5;
        if (filename == "einkaufsstraße.png") EinkaufsstraßeGuw += 7;
        if (filename == "Krankenhaus1.png") KrankenhausGuw += 10;
        if (filename == "einkaufsstraße upgrade.png") ShoppingcenterGuw += 9;
        if (filename == "Kindergarten1.png") KindergartenHb += 1;
        if (filename == "Schule1.png") SchuleHb += 3;
        if (filename == "Uni1.png") UniversitätHb += 10;
        if (filename == "Kohlekraftwerk1.png") KohlekraftwerkBus += 1;
        if (filename == "Windkraftwerk1.png") WindkraftwerkBus += 5;
        if (filename == "Atomkraftwerk.png") AtomkraftwerkBus += 10;
        if (filename == "Einkaufsladen.png") SupermarktKh += 8;
        if (filename == "einkaufsstraße.png") EinkaufsstraßeKh += 8;
        if (filename == "einkaufsstraße upgrade.png") ShoppingcenterKh += 10;
        if (filename == "Krankenhaus1.png") KrankenhausWse += 10;
        if (filename == "Fabrik.png") ArbeitsviertelFabrikAuw += 1;
        if (filename == "Kohlekraftwerk1.png") KohlekraftwerkAuw += 0.5;
        if (filename == "Atomkraftwerk.png") AtomkraftwerkAuw += 10;
        if (filename == "Krankenhaus1.png") KrankenhausAuw += 4;
        if (filename == "Casino.png") CasinoAuw += 7;
        if (filename == "Kindergarten1.png") KindergartenAuw += 5;
        if (filename == "Schule1.png") SchuleAuw += 5;
        if (filename == "Uni1.png") UniversitätAuw += 5;
        if (filename == "Einkaufsladen.png") SupermarktAuw += 4;
        if (filename == "Polizei.png") PolizeiFeuerwehrAuw += 5;
        if (filename == "U Bahn.png") UBahnAuw += 4;
        if (filename == "einkaufsstraße.png") EinkaufsstraßeAuw += 7;
        if (filename == "einkaufsstraße upgrade.png") ShoppingcenterAuw += 9;
        if (filename == "Fabrik.png") FabrikIiui += 6;
        if (filename == "Kohlekraftwerk1.png") KohlekraftwerkIiui += 6.5;
        if (filename == "Windkraftwerk1.png") WindkraftwerkIiui += 7;
        if (filename == "Atomkraftwerk.png") AtomkraftwerkIiui += 8.5;
        if (filename == "Kohlekraftwerk1.png") KohlekraftwerkGdm -= 7;
        if (filename == "U Bahn.png") UBahnGdm += 5;
        if (filename == "park.png") ParkGdm += 7;
        if (filename == "Spielplatz.png") SpielplatzGdm += 3;
        if (filename == "Casino.png") CasinoGdm += 10;
        if (filename == "Einkaufsladen.png") SupermarktGdm += 7;
        if (filename == "einkaufsstraße.png") EinkaufsstraßeGdm += 9;
        if (filename == "einkaufsstraße upgrade.png") ShoppingcenterGdm += 10;
        if (filename == "Krankenhaus.png") KrankenhausGdm += 3;
        if (filename == "Kindergarten1.png") KindergartenGdm += 6;
        if (filename == "Schule1.png") SchuleGdm +=8;
        if (filename == "Uni1.png") UniversitätGdm += 9;
        if (filename == "Polizei.png") PolizeiFeuerwehrGdm += 7;
        if (filename == "Atomkraftwerk.png") AtomkraftwerkGdm -= 5;
      }
    }
  }
  const Kli = {
    values: [
      { value: KohlekraftwerkKli, weight: 2.5 },
      { value: UBahnKli, weight: 2.5 },
      { value: ParkKli, weight: 2.5 },
      { value: SpielplatzKli, weight: 2.5 },
    ],
    weight: 12,
  };
  const Ka = {
    values: [
      { value: CasinoKa, weight: 1.4 },
      { value: WohnhäuserKa, weight: 1.4 },
      { value: ArbeitsviertelFabrikKa, weight: 1.4 },
      { value: PlattenbauKa, weight: 1.4 },
      { value: PlattenbausolarKa, weight: 1.4 },
      { value: ReihenhäuserKa, weight: 1.4 },
      { value: WolkenkratzerKa, weight: 1.4 },
    ],
    weight: 11,
  };
  const Guw = {
    values: [
      { value: KohlekraftwerkGuw, weight: 2 },
      { value: SupermarktGuw, weight: 2 },
      { value: EinkaufsstraßeGuw, weight: 2 },
      { value: KrankenhausGuw, weight: 2 },
      { value: ShoppingcenterGuw, weight: 2 },
    ],
    weight: 11,
  };
  const Hb = {
    values: [
      { value: KindergartenHb, weight: 3.3 },
      { value: SchuleHb, weight: 3.3 },
      { value: UniversitätHb, weight: 3.3 },
    ],
    weight: 11,
  };
  const Bus = {
    values: [
      { value: KohlekraftwerkBus, weight: 3.3 },
      { value: WindkraftwerkBus, weight: 3.3 },
      { value: AtomkraftwerkBus, weight: 3.3 },
    ],
    weight: 11,
  };
  const Kh = {
    values: [
      { value: SupermarktKh, weight: 3.3 },
      { value: EinkaufsstraßeKh, weight: 3.3 },
      { value: ShoppingcenterKh, weight: 3.3 },
    ],
    weight: 11,
  };
  const Wse = {
    values: [
      { value: KrankenhausWse, weight: 10 }
    ],
    weight: 11,
  };
  const Auw = {
    values: [
      { value: ArbeitsviertelFabrikAuw, weight: 0.7 },
      { value: KohlekraftwerkAuw, weight: 0.7 },
      { value: AtomkraftwerkAuw, weight: 0.7 },
      { value: KrankenhausAuw, weight: 0.7 },
      { value: CasinoAuw, weight: 0.7 },
      { value: KindergartenAuw, weight: 0.7 },
      { value: SchuleAuw, weight: 0.7 },
      { value: UniversitätAuw, weight: 0.7 },
      { value: SupermarktAuw, weight: 0.7 },
      { value: PolizeiFeuerwehrAuw, weight: 0.7 },
      { value: UBahnAuw, weight: 0.7 },
      { value: EinkaufsstraßeAuw, weight: 0.7 },
      { value: ShoppingcenterAuw, weight: 0.7 },
    ],
    weight: 11,
  };
  const Iiui = {
    values: [
      { value: FabrikIiui, weight: 2.5 },
      { value: KohlekraftwerkIiui, weight: 2.5 },
      { value: WindkraftwerkIiui, weight: 2.5 },
      { value: AtomkraftwerkIiui, weight: 2.5 },
    ],
    weight: 11,
  };

  const Gdm = {
    values: [
      { value: KohlekraftwerkGdm, weight: 0.7 },
      { value: UBahnGdm, weight: 0.7 }
      { value: ParkGdm, weight: 0.7 }
      { value: SpielplatzGdm, weight: 0.7 }
      { value: CasinoGdm, weight: 0.7 }
      { value: EinkaufsladenGdm, weight: 0.7 }
      { value: EinkaufsstraßeGdm, weight: 0.7 }
      { value: ShoppingcenterGdm, weight: 0.7 }
      { value: KrankenhausGdm, weight: 0.7 }
      { value: KindergartenGdm, weight: 0.7 }
      { value: SchuleGdm, weight: 0.7 }
      { value: UniversitätGdm, weight: 0.7 }
      { value: FeuerwehrPolizeiGdm, weight: 0.7 }
      { value: AtomkraftwerkGdm, weight: 0.7 }
    ],
    weight: 11,
  };

  const groups = [Kli, Ka, Guw, Hb, Bus, Kh, Wse, Auw, Iiui, Gdm];
  const overallSustainability = weightedGroupSum(groups);

  const groupKli = [Kli];
  const overallKli = weightedGroupSum(groupKli);
  const groupKa = [Ka];
  const overallKa = weightedGroupSum(groupKa);
  const groupGuw = [Guw];
  const overallGuw = weightedGroupSum(groupGuw);
  const groupHb = [Hb];
  const overallHb = weightedGroupSum(groupHb);
  const groupBus = [Bus];
  const overallBus = weightedGroupSum(groupBus);
  const groupKh = [Kh];
  const overallKh = weightedGroupSum(groupKh);
  const groupWse = [Wse];
  const overallWse = weightedGroupSum(groupWse);
  const groupAuw = [Auw];
  const overallAuw = weightedGroupSum(groupAuw);
  const groupIiui = [Iiui];
  const overallIiui = weightedGroupSum(groupIiui);
  const groupGdm = [Gdm];
  const overallGdm = weightedGroupSum(groupGdm);  

  score_display.innerHTML = `Score: ${overallSustainability.toFixed(2)} \n`;
  score_display.innerHTML += `Klima:${overallKli.toFixed(2)} \n`;
  score_display.innerHTML += `Armut:${overallKa.toFixed(2)} \n`;
  score_display.innerHTML += `Gesuntheit:${overallGuw.toFixed(2)} \n`;
  score_display.innerHTML += `Bildung:${overallHb.toFixed(2)} \n`;
  score_display.innerHTML += `Energie:${overallBus.toFixed(2)} \n`;
  score_display.innerHTML += `Hunger:${overallKh.toFixed(2)} \n`;
  score_display.innerHTML += `Arbeit:${overallAuw.toFixed(2)} \n`;
  score_display.innerHTML += `Industrie:${overallIiui.toFixed(2)}\n`;
  score_display.innerHTML += `Glücklichkeit:${overallGdm.toFixed(2)}\n`;

  };
  balance_display.innerHTML = `Budget: ${balance.balance}`;
  requestAnimationFrame(update_score);
}

update_score();