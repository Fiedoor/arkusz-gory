var n = 1;
function next() {
  console.log(n);
  if (n == 5) {
    n = 1;
  } else {
    n += 1;
  }
  document.getElementById('zdj').src = n + '.jpg';
}
function prev() {
  console.log(n);
  if (n == 1) {
    n = 5;
  } else {
    n -= 1;
  }
  document.getElementById('zdj').src = n + '.jpg';
}
function select(a) {
  document.getElementById('zdj').src = a + '.jpg';
  n = a;
}
