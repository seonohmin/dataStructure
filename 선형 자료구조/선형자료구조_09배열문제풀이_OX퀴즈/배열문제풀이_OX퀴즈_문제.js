/* OX 퀴즈 */

/* user code */
function answer(mark) {
  let result = 0;
  
  // 1 -> 1점, 연속한 1인 경우 연속한 count 만큼 점수 추가
  let score = 0;
  for (let i = 0; i < mark.length; i++) {
    if (mark[i] == 1) {
      result += ++score;
    } else {
      score = 0;
    }
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [1, 0, 1, 1, 1, 0, 1, 1, 0, 0],

  // TC: 2
  [1, 1, 0, 1, 1, 0, 1, 1, 1, 1],

  // TC: 3
  [1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
