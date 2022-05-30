var name = 'k8805';
var letter = 'Dear '+name+'\n\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '+name+' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repregenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupident non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'+name;

var letter = `Dear ${name}
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ${name} Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repregenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupident non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' ${name}`;

console.log(letter);

/* 
1. 이전 코드와 비교 했을때 특수기호를 쓰지 않아도 되는 장점. 
2. 변수를 넣어서 치환하고 싶을때 문자를 끊고 더하고의 복잡함 없이 ${}변수의 이름을 넣으면 그 위치에 변수가 오게되는 약속. 
3. ${}안에 변수를 넣으면 치환이되고 연산을 넣으면 그 같이 나온다. 
이것이 template literal 
*/ 