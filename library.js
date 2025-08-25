export class Grid {
  constructor(
    options,
    balance,
    rows = 9,
    columns = 9,
    width = 400,
    height = 400
  ) {
    this.rows = rows;
    this.collumns = columns;
    this.canvas = document.createElement("canvas");
    this.canvas.width = width;
    this.canvas.height = height;
    this.select_bar = new SelectBar(options, width / rows, height / columns);
    this.canvas.style.width = width + "px";
    this.canvas.style.height = height + "px";
    document.body.append(this.canvas);

    this.cell_height = height / columns;
    this.cell_width = width / rows;

    this.grid = [];
    for (let i = 0; i < rows; i++) {
      const column = [];
      for (let y = 0; y < columns; y++) column.push(null);
      this.grid.push(column);
    }

    this.other_stuff = [];
    this.ctx = this.canvas.getContext("2d");

    this.mouse_pos = { x: 0, y: 0 };

    this.dragging = null;
    this.dragOffset = { x: 0, y: 0 };

    this.canvas.addEventListener("mousemove", (event) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse_pos.x = event.clientX - rect.left;
      this.mouse_pos.y = event.clientY - rect.top;

      if (this.dragging) {
        this.dragging.x = this.mouse_pos.x;
        this.dragging.y = this.mouse_pos.y;
      }
    });

    this.canvas.addEventListener("click", () => {
      if (this.dragging) return;
      const hovering = {
        x: Math.floor(this.mouse_pos.x / (this.canvas.width / this.rows)),
        y: Math.floor(this.mouse_pos.y / (this.canvas.height / this.collumns)),
      };
      if (this.grid[hovering.x] && this.grid[hovering.x][hovering.y]) {
        this.grid[hovering.x][hovering.y].onclick();
      }
      for (let element of this.other_stuff) {
        if (
          this.mouse_pos.x > element.x &&
          this.mouse_pos.x < element.x + element.width &&
          this.mouse_pos.y > element.y &&
          this.mouse_pos.y < element.y + element.height
        ) {
          element.onclick();
        }
      }
    });

    this.canvas.addEventListener("dragover", (e) => e.preventDefault());
    this.canvas.addEventListener("drop", (e) => {
      e.preventDefault();
      if (this.dragging) return;
      const index = e.dataTransfer.getData("text/plain");
      const OptionClass = this.select_bar.options[index];
      const instance = new OptionClass();
      console.log(instance.cost);
      if (!balance.buy(instance.cost)) return;
      const rect = this.canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const row = Math.floor(x / this.cell_width);
      const col = Math.floor(y / this.cell_height);
      if (row >= 0 && row < this.rows && col >= 0 && col < this.collumns) {
        this.push(row, col, instance);
      }
    });

    this.canvas.addEventListener("mousedown", (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const row = Math.floor(x / this.cell_width);
      const col = Math.floor(y / this.cell_height);

      if (row < 0 || row >= this.rows || col < 0 || col >= this.collumns)
        return;

      const cell = this.grid[row][col];
      if (cell) {
        this.dragging = {
          element: cell,
          from: { row, col },
          x,
          y,
        };
        this.dragOffset.x = x - row * this.cell_width;
        this.dragOffset.y = y - col * this.cell_height;

        this.grid[row][col] = null;

        this.canvas.style.cursor = "grabbing";
      }
    });

    this._onDocumentMouseMove = (e) => {
      if (!this.dragging) return;
      const rect = this.canvas.getBoundingClientRect();
      this.dragging.x = e.clientX - rect.left;
      this.dragging.y = e.clientY - rect.top;
    };

    this._onDocumentMouseUp = (e) => {
      if (!this.dragging) return;

      const rect = this.canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x >= 0 && x < this.canvas.width && y >= 0 && y < this.canvas.height) {
        const newRow = Math.floor(x / this.cell_width);
        const newCol = Math.floor(y / this.cell_height);

        const targetCell = this.grid[newRow][newCol];

        if (!targetCell) {
          this.grid[newRow][newCol] = this.dragging.element;
        } else {
          this.grid[newRow][newCol] = this.dragging.element;
          const from = this.dragging.from;
          if (
            from &&
            from.row >= 0 &&
            from.row < this.rows &&
            from.col >= 0 &&
            from.col < this.collumns
          ) {
            this.grid[from.row][from.col] = targetCell;
          } else {
          }
        }
      } else {
        balance.sell(this.dragging.element.cost);
      }

      this.dragging = null;
      this.canvas.style.cursor = "default";
    };

    document.addEventListener("mousemove", this._onDocumentMouseMove);
    document.addEventListener("mouseup", this._onDocumentMouseUp);

    this._update = this._update.bind(this);
    this._update();
  }

  destroy() {
    document.removeEventListener("mousemove", this._onDocumentMouseMove);
    document.removeEventListener("mouseup", this._onDocumentMouseUp);
  }

  push(row, collumn, element) {
    this.grid[row][collumn] = element;
  }

  _update() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.rows; i++) {
      for (let y = 0; y < this.collumns; y++) {
        const cell = this.grid[i][y];
        if (cell) {
          cell.draw(
            i * this.cell_width,
            y * this.cell_height,
            this.cell_height,
            this.cell_width,
            this.ctx
          );
        }
      }
    }

    if (this.dragging) {
      this.dragging.element.draw(
        this.dragging.x - this.dragOffset.x,
        this.dragging.y - this.dragOffset.y,
        this.cell_height,
        this.cell_width,
        this.ctx
      );
    }

    for (let element of this.other_stuff) {
      element.update();
      element.draw(this.ctx);
    }

    requestAnimationFrame(this._update);
  }
}

export class SelectBar {
  constructor(options, width, height) {
    this.options = options;
    this.div = document.createElement("div");
    this.div.style.zIndex = 999;
    this.div.style.left = 0;
    this.div.style.bottom = 0;
    this.div.style.display = "flex";
    this.div.style.gap = "15px";
    document.body.append(this.div);

    for (let OptionClass of this.options) {
      const optionInstance = new OptionClass();

      const container = document.createElement("div");
      container.style.textAlign = "center";

      const nameElement = document.createElement("div");
      nameElement.textContent = optionInstance.name || "Kein Name";
      nameElement.style.marginBottom = "5px";

      optionInstance.image.style.width = width + "px";
      optionInstance.image.style.height = height + "px";
      optionInstance.image.style.margin = "0 auto";
      optionInstance.image.draggable = true;

      optionInstance.image.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", this.options.indexOf(OptionClass));
      });

      container.appendChild(nameElement);
      container.appendChild(optionInstance.image);

      this.div.appendChild(container);
    }
  }
}

export class Cell {
  constructor(src, name, cost) {
    this.name = name;
    this.cost = cost;
    this.image = new Image();
    this.image.src = src;
    this.onclick = this.onclick.bind(this);
    this.draw = this.draw.bind(this);
  }
  onclick() {
    console.log("test");
  }
  draw(x, y, width, height, ctx) {
    ctx.drawImage(this.image, x, y, height, width);
  }
}

export class OtherStuff {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
  }
  draw(ctx) {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  update() {}
  onclick() {}
}

export class HTMLStuff {
  constructor() {
    this.html = [];
  }
  add(type, content, style = null) {
    let element = document.createElement(type);
    element.innerHTML = content;
    if (style) {
      for (let [key, value] of Object.entries(style)) {
        element.style[key] = value;
      }
    }
    this.html.push(element);
    document.body.append(element);
    return element;
  }
  change_content(index, content) {
    this.html[index].innerHTML = content;
  }
  remove(index) {
    this.html.splice(index, 1);
  }
}

export class Sidebar {
  constructor() {
    this.sidebar = document.getElementById("sidebar");
    this.div = document.createElement("div");
    this.div.append(this._close_button());
  }
  _close_button() {
    const button = document.createElement("button");
    button.textContent = "close";
    button.addEventListener("click", () => this.close());
    return button;
  }
  open() {
    this.sidebar.innerHTML = "";
    this.sidebar.append(this.div);
  }
  close() {
    this.sidebar.innerHTML = "";
  }
  add(type, args) {
    //valid types:
    //
    //div: content, style (optional)
    //button: content, callback, style (optional)
    //h1, h2, h3: content, style (optional)
    //input: type (optional), placeholder (optional), value (optional), callback, style (optional)
    //range: step (optional), min, max, value, callback, style (optional)
    switch (type) {
      case "div":
      case "h1":
      case "h2":
      case "h3": {
        let element = document.createElement(type);
        element.innerHTML = args.content;

        if (args.style) {
          for (let [key, value] of Object.entries(args.style)) {
            element.style[key] = value;
          }
        }
        this.div.append(element);
        return element;
      }
      case "button": {
        let element = document.createElement("button");
        element.innerHTML = args.content;
        element.onclick = args.callback;

        if (args.style) {
          for (let [key, value] of Object.entries(args.style)) {
            element.style[key] = value;
          }
        }
        this.div.append(element);
        return element;
      }
      case "input": {
        let element = document.createElement("input");
        element.type = args.type ? args.type : "text";
        element.placeholder = args.placeholder ? args.placeholder : "";
        element.value = args.value ? args.value : "";
        element.addEventListener("input", args.callback);

        if (args.style) {
          for (let [key, value] of Object.entries(args.style)) {
            element.style[key] = value;
          }
        }
        this.div.append(element);
        return element;
      }
      case "range": {
        let element = document.createElement("input");
        element.type = "range";
        element.min = args.min;
        element.max = args.max;
        element.value = args.value;
        element.step = args.step ? args.step : 1;
        element.addEventListener("input", () => {
          args.callback(element.value);
        });

        if (args.style) {
          for (let [key, value] of Object.entries(args.style)) {
            element.style[key] = value;
          }
        }
        this.div.append(element);
        return element;
      }
    }
  }
}

export function weightedSum(values) {
  if (!Array.isArray(values)) {
    throw new TypeError("Eingabe muss ein Array sein");
  }
  let totalWeight = 0;
  let weightedTotal = 0;
  for (const item of values) {
    if (typeof item.value !== "number" || typeof item.weight !== "number") {
      throw new TypeError(
        "Jedes Element muss einen Wert und eine Gewichtung haben"
      );
    }
    weightedTotal += item.value * item.weight;
    totalWeight += item.weight;
  }
  if (totalWeight === 0) return 0;
  return weightedTotal / totalWeight;
}

export function weightedGroupSum(groups) {
  if (!Array.isArray(groups)) {
    throw new TypeError("Eingabe muss ein Array sein");
  }
  let totalGroupWeight = 0;
  let weightedGroupTotal = 0;
  for (const group of groups) {
    if (!Array.isArray(group.values) || typeof group.weight !== "number") {
      throw new TypeError(
        "Jede Gruppe muss ein Werte-Array und eine Gewichtung haben"
      );
    }
    const groupSum = weightedSum(group.values);
    weightedGroupTotal += groupSum * group.weight;
    totalGroupWeight += group.weight;
  }
  if (totalGroupWeight === 0) return 0;
  return weightedGroupTotal / totalGroupWeight;
}

export class Balance {
  constructor(amount) {
    this.balance = amount;
  }
  buy(amount) {
    console.log(this.balance, amount);
    if (typeof amount !== "number") {
      throw new TypeError("Betrag muss eine Zahl sein");
    }
    if (amount < 0) {
      console.log(
        "Warnung: Kauf mit negativem Betrag erhöht den Kontostand, ist aber nicht gewollt."
      );
    }

    if (this.balance < amount) return false;
    this.balance = this.balance - amount;
    return true;
  }
  sell(amount) {
    if (typeof amount !== "number") {
      throw new TypeError("Betrag muss eine Zahl sein");
    }
    if (amount < 0) {
      console.log(
        "Warnung: Verkauf mit negativem Betrag verringert den Kontostand, ist aber nicht gewollt."
      );
    }
    this.balance = this.balance + amount;
    return true;
  }
}

export function addPopulation(amount, percentages, groups = {}) {
  if (typeof amount !== "number") {
    throw new TypeError("Betrag muss eine Zahl sein");
  }

  if (typeof percentages !== "object" || percentages === null) {
    throw new TypeError("Prozentsätze müssen ein Objekt sein");
  }

  const totalPercentage = Object.values(percentages).reduce(
    (sum, percentage) => sum + percentage,
    0
  );
  if (Math.abs(totalPercentage - 100) > 0.01) {
    console.log(
      `Warnung: Die Gesamtprozentsätze betragen ${totalPercentage}%, nicht 100%`
    );
  }

  const updatedGroups = { ...groups };

  for (const [groupName, percentage] of Object.entries(percentages)) {
    const addedAmount = amount * (percentage / 100);

    if (updatedGroups[groupName]) {
      updatedGroups[groupName] = {
        count: updatedGroups[groupName].count + addedAmount,
        percentage: percentage,
      };
    } else {
      updatedGroups[groupName] = {
        count: addedAmount,
        percentage: percentage,
      };
    }
  }

  return updatedGroups;
}

export function removePopulation(amount, groups, percentages) {
  if (typeof amount !== "number") {
    throw new TypeError("Betrag muss eine Zahl sein");
  }

  if (typeof groups !== "object" || groups === null) {
    throw new TypeError("Gruppen müssen ein Objekt sein");
  }

  if (typeof percentages !== "object" || percentages === null) {
    throw new TypeError("Prozentsätze müssen ein Objekt sein");
  }

  const updatedGroups = { ...groups };

  const totalPopulation = Object.values(groups).reduce(
    (sum, group) => sum + group.count,
    0
  );

  if (amount > totalPopulation) {
    console.log(
      `Warnung: Entferne ${amount} von einer Population von ${totalPopulation}`
    );
  }

  for (const [groupName, percentage] of Object.entries(percentages)) {
    if (updatedGroups[groupName]) {
      const groupCount = updatedGroups[groupName].count;
      const removedAmount = amount * (percentage / 100);

      updatedGroups[groupName] = {
        count: Math.max(0, groupCount - removedAmount),
        percentage: updatedGroups[groupName].percentage,
      };
    }
  }

  return updatedGroups;
}
