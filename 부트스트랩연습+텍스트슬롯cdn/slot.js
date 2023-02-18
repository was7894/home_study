start();

function start() {
  odoo.default({ el: ".js-odoo", from: "WESTERN", to: "CHINESE" });
  setTimeout(end, 8000);
}

function end() {
  odoo.default({ el: ".js-odoo", from: "CHINESE ", to: "WESTERN" });
}
setInterval(start, 18000);
