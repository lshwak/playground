babbling = ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"];

var answer = 0;
let  str = ["aya","ye","woo","ma"];
    
    for (i=0; i<babbling.length; i++) {
        let a = babbling[i]
        for (j=0; j<str.length; j++) {
            if (babbling[i].includes(str[j])) {
                if (a.includes(str[j])) {
                    a = a.replace(str[j],'');
                }
            }
        }   
        if (a == '') {
            answer++
        }
    }

    console.log(answer);