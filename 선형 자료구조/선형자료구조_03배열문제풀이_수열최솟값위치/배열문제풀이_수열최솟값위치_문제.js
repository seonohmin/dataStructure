/* 수열이 주어질 때, 이 수열의 있는 수 중 최소값의 위치를 모두 출력하는 프로그램을 작성하시오. */

/* user code */
function answer(nums) {
  let result = [];

  // 1. 최소값 찾기
  let min = Number.MAX_SAFE_INTEGER; // 양의 정수의 최대값 반환
  for (let i = 0; i < nums.length; i++) {
      if (min > nums[i]) {
        min = nums[i];
      }
  }

  // 2. 최소값에 해당하는 index 위치 찾기
  for (let i = 0; i < nums.length; i++) {
    if (min == nums[i]) {
      result.push(i);
    }
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [5, 2, 10, 2],

  // TC: 2
  [4, 5, 7, 4, 8],

  // TC: 3
  [12, 11, 11, 16, 11, 12],
];


for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1}`);
  console.log(answer(input[i]));
}