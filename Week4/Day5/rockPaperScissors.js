// Rock Paper Scissors

const rockPaperPermutation = (roundCount) => {
  if (roundCount === 0) return [];
  const permutations = [];
  function playRound(plays) {
    if (plays.length === roundCount) {
      permutations.push(plays);
      return;
    }
    ["r", "p", "s"].forEach((play) => {
      playRound(plays + play);
    });
  }
  playRound("");
  return permutations;
};
