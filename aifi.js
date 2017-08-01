function aiFi(n) {
  return n < 0 ? null : n;
}

function aiFiDetailed(n) {
  let hand = new Array(n).fill(1).map((i, idx) => i * (idx + 1));
  const original = hand.slice();
  let table = [];
  let count = 0;
  while (!isEqual(original, table)) {
    table = [];
    for (let i = 0; i < n; i++) {
      table.push(hand.pop());
      hand.length && hand.unshift(hand.pop());
    }
    hand = table;
    count++;
  }

  return count;
}


aiFiDetailed(5);

function isEqual(a1, a2) {
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) return false;
  }

  return true;
}