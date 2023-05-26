
function solution(my_string, letter) {
    var answer = '';
    //let a = '';
    for (i=0; i < my_string.length; i++) {
        if (my_string[i] != letter) {
            answer += my_string[i];
        }
    }
    //answer = my_string.split(letter).join(a);
    return answer;
}