let num = 10;

    let day = '';

    switch(num) {
        case 1 :
            day = '월요일';
        break;
        case 2 :
            day = '화요일';
        break;
        case 3 :
            day = '수요일';
        break;
        case 4 :
            day = '목요일';
        break;
        case 5 :
            day = '금요일';
        break;
        case 6 :
            day = '토요일';
        break;
        case 7 :
            day = '일요일';
        break;
        default :
        day = '1부터 7까지의 숫자가 아님';
    }

console.log(day);