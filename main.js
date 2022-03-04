// do/while loop

let i = 0;
let isSuccess = false;

do {
  console.log('card recharge failed ' + i);
  i++;
  if (true) {
    isSuccess = true;
  }
} while (!isSuccess && i <= 10);
