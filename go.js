// a, e, i, o, u 
const my_string = "nice to meet you";

    let answer1 = '';
    answer1 = my_string.replace(/[a,e,i,o,u]/g,'');
    console.log(answer1);

    let answer2 = '';
    for (i=0; i<my_string.length; i++) {
        if (my_string[i] !=  "a" && my_string[i] != "e" && my_string[i] != "i" && my_string[i] != "o" && my_string[i] != "u") {
            answer2 += my_string[i];
        }
    }
    console.log(answer2);

