//bool knows(int i, int j);
int findCelebrity(int n) {
  let i = 0;
  let j = n - 1;
  while (i < j) {
    if (knows(i, j) || !knows(j, i)) {
      i++;
    }
    if (knows(j, i) || !knows(i, j)) {
      j--;
    }
  }
  if (i === j) {
    for (let k = 0; k < n; k++) {
      if (i === k) {
        continue;
      }
      if (knows(i, k) || !knows(k, i)) {
        break;
      }
    }
    if (k === n) {
      return i;
    }
  }
  return -1;
}