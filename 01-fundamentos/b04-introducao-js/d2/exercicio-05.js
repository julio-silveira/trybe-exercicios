let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1];
let maior = 0;
for (let index1 = 0; index1 < a.length; index1 += 1) {
  for (let index2 = 0; index2 < a.length; index2++) {
    if (a[index2] > maior && a[index2] > [a[index1]]) {
      maior = a[index2];
      console.log("o novo número maior é", maior);
    }
  }
}
console.log("o maior número é", maior);
