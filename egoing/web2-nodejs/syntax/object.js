var members = ['egoing', 'underkg', 'itsub'];
console.log(members[1]);
var i = 0;
while(i < members.length){
    console.log('array loop => ', members[i]);
    i = i + 1;
}

var roles = {
    'programmer':'egoing',
    'designer':'underkg',
    'reviewr':'itsub'
}
console.log(roles.reviewr);
console.log(roles['reviewr']); // 객체에 있는 정보를 가져올 때 배열처럼 key값을 문자로 전달하는걸 통해서도 정보를 가져올 수 있다.

for (var name in roles){
    console.log('object => ',name, 'value => ', roles[name]);
}

/*
    for문에 첫자리에는 변수를, in이라는 약속된 키워드를 그리고 반복적으로 처리할 객체를 뒤에 써준다.
    name 변수에는 객체의 식별자 key가 들어오도록 약속되어있다.
    name의 value를 얻기 위해서 roles[name]이 된다.
    여기서 name은 개발자가 아무런 이름으로 정하는 것.

*/





