const a = 5;
const b = -10;
const c = 0;

let statusA;
let statusB;
let statusC;

switch (true) {
  case a > 0:
    statusA = "Positivo";
    break;
  case a === 0:
    statusA = "Neutro";
    break;
  case a < 0:
    statusA = "Negativo";
    break;
}

switch (true) {
  case b > 0:
    statusB = "Positivo";
    break;
  case b === 0:
    statusB = "Neutro";
    break;
  case b < 0:
    statusB = "Negativo";
    break;
}

switch (true) {
  case c > 0:
    statusC = "Positivo";
    break;
  case c === 0:
    statusC = "Neutro";
    break;
  case c < 0:
    statusC = "Negativo";
    break;
}

if (a > b) {
  console.log("Exercício 02: ", "O maior número é entre", a, "e", b, " é:", a);
} else {
  console.log("Exercício 02: ", "O maior número é entre", a, "e", b, " é:", b);
}

if (a > b && a > c) {
  console.log(
    "Exercício 03: ",
    "O maior número é entre",
    a,
    ",",
    b,
    "e",
    c,
    " é:",
    a
  );
} else if (b > c && b > a) {
  console.log(
    "Exercício 03: ",
    "O maior número é entre",
    a,
    ",",
    b,
    "e",
    c,
    " é:",
    b
  );
} else if (c > a && c > b) {
  console.log(
    "Exercício 03: ",
    "O maior número é entre",
    a,
    ",",
    b,
    "e",
    c,
    " é:",
    c
  );
}

console.log(
  "Exercício 04:",
  a,
  "é ",
  statusA,
  b,
  "é",
  statusB,
  c,
  "é",
  statusC
);
