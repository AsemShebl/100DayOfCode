/*
	Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.
	
	Input: S = "ab#c", T = "ad#c"
	Output: true
	Explanation: Both S and T become "ac".
	
	Input: S = "ab##", T = "c#d#"
	Output: true
	Explanation: Both S and T become "".
	
	Input: S = "a##c", T = "#a#c"
	Output: true
	Explanation: Both S and T become "c".
	
	Note
	1 <= S.length <= 200
	1 <= T.length <= 200
	S and T only contain lowercase letters and '#' characters.
	
	Can you solve it in O(N) time and O(1) space?
	*/
const S = "ab#c";
const T = "ad#c";

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  let currS, currT;
  let typedS = "";
  let typedT = "";
  for (let i = 0; i < S.length; i++) {
    currS = S[i];
    if (currS !== "#") {
      typedS += currS;
    }
    if (currS === "#" && typedS.length) {
      typedS = typedS.slice(0, typedS.length - 1);
    }
  }
  for (let i = 0; i < T.length; i++) {
    currT = T[i];
    prevCharT = i - 1;
    if (currT !== "#") {
      typedT += currT;
    }
    if (currT === "#" && typedT.length) {
      prevCharT; //?
      typedT; //?
      typedT = typedT.slice(0, typedT.length - 1); //?
      typedT; //
    }
  }
  typedT; //?
  return typedS === typedT;
};
backspaceCompare(S, T); //?
