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
        this.image.src = "img/park2.png";
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
            this.image.src = "img/Plattenbau.png";

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
                    this.image.src = "img/Plattenbau2.png";
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
    super("img/UBahn.png", "U-Bahn", 2000000);
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
        this.image.src = "img/einkaufsstraßeupgrade.png";
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
