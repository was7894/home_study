start();

function start() {
  odoo.default({ el: ".js-odoo", from: "YORI", to: "JORI" });
  setTimeout(end, 8000);
  setInterval(start, 18000);
}

function end() {
  odoo.default({ el: ".js-odoo", from: "JORI", to: "YORI" });
}
