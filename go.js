let result = "";

for (let i=1; i<=9; i++) {
  for (let j=2; j<=5; j++) {
    if (i !== 4) {
      result += j + " * " + i + " = " + j * i + "\t";
    }
  }
  if (i !== 4) {
    result += "\n";
  }
}

result += "\n";

for (let i=1; i<=9; i++) {
  for (let j=6; j<=9; j++) {
    if (i !== 4) {
      result += j + " * " + i + " = " + j * i + "\t";
    }
  }
  if (i !== 4) {
    result += "\n";
  }
}

console.log(result)