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

var score = 0;

const balance = new Balance(10000);

class Krankenhaus extends Cell {
  constructor() {
    super("krankenhaus.jpeg", "Krankenhaus", 100);
    this.personal = 0;
    this.score = 0;
    this.sidebar = new Sidebar();
    this.sidebar.add("h1", { content: "Krankenhaus" });
    this.sidebar.add("div", { content: "Personal: " });
    this.range = this.sidebar.add("range", {
      min: 1,
      max: 100,
      value: 1,
      callback: (value) => {
        if (value > this.personal && !balance.buy(value - this.personal)) {
          this.range.value = this.personal;
          return;
        }
        if (value < this.personal) balance.sell(this.personal - value);
        this.personal = value;
        this.output_div.innerHTML = "Personal gerade: " + this.personal;
        this.score = this.personal * 2;
      },
    });
    this.output_div = this.sidebar.add("div", {
      content: "Personal gerade: " + this.personal,
    });
  }
  onclick() {
    this.sidebar.open();
  }
}

class Park extends Cell {
  constructor() {
    super("park.jpeg", "Park", 100);
    this.bäume = 0;
    this.score = 10;
    this.sidebar = new Sidebar();
    this.sidebar.add("h1", { content: "Park" });
    this.sidebar.add("button", {
      content: "Bäume pflanzen",
      callback: () => {
        if (!balance.buy(9)) return;
        this.score += 1;
        this.bäume++;
        this.output_div.innerHTML = this.bäume;
      },
    });
    this.sidebar.add("div", { content: "Bäume:" });
    this.output_div = this.sidebar.add("div", { content: "0" });
  }
  onclick() {
    this.sidebar.open();
  }
}

class Wohngebiet extends Cell {
  constructor() {
    super("wohngebiet.jpeg", "Wohngebiet", 100);
    this.score = 10;
    this.sidebar = new Sidebar();
    this.headline = this.sidebar.add("h1", { content: "Wohngebiet" });
    this.temp_headline = this.image;
    this.sidebar.add("input", {
      type: "text",
      placeholder: "name",
      callback: (event) => {
        this.temp_headline = event.target.value;
      },
    });
    this.sidebar.add("button", {
      content: "Submit",
      callback: () => {
        this.headline.innerHTML = this.temp_headline;
      },
    });
  }
  onclick() {
    this.sidebar.open();
  }
}

class Bird extends OtherStuff {
  constructor() {
    super(Math.random() * 600, Math.random() * 600, 10, 10);
    this.color = "grey";
    this.direction = Math.random() * 360 * (Math.PI / 180);
    this.speed = Math.random() * 2 + 1;
  }
  draw(ctx) {
    this.direction += Math.random() * 0.5 - 0.25;
    this.speed += Math.random() * 0.5 - 0.25;
    this.x = (this.x + this.speed * Math.cos(this.direction)) % 600;
    this.y = (this.y + this.speed * Math.sin(this.direction)) % 600;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  onclick() {
    score += Math.round(Math.abs(this.speed * 10));
    console.log("Random Rectangle Pressed");
  }
}

const html = new HTMLStuff();

html.add("h1", "Stadtsimulation");
html.add(
  "p",
  "Ich bin definitiv nicht kreativ genug um eine Beschreibung zu schreiben"
);

const score_display = html.add("p", `Score: ${score}`);
const balance_display = html.add("p", `Balance: ${balance.balance}`);

const grid = new Grid([Park, Krankenhaus, Wohngebiet], balance, 9, 9, 600, 600);
grid.canvas.style.backgroundColor = "#f0f0f0";

for (let i = 0; i < 20; i++) grid.other_stuff.push(new Bird());

function update_score() {
  const all_scores = [];

  for (let g of grid.grid) {
    for (let i of g) {
      if (i) all_scores.push(i.score);
    }
  }

  score_display.innerHTML = `Score: ${
    score + all_scores.reduce((acc, val) => acc + val, 0)
  }`;
  balance_display.innerHTML = `Balance: ${balance.balance}`;
  requestAnimationFrame(update_score);
}

update_score();
