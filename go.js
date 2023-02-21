const meal = {
    한식 : "불고기",
    중식 : "짜장면",
    일식 : "초밥",
    양식 : "스테이크",
    인도식 : "카페"
};
const getMeal = (mealType) => {
    return meal[mealType] || "굶기";
};
console.log("한식");
console.log(getMeal());
    // getMeal 함수호출 할 때 mealType에 한식으로 값을 전달했기 때문에 meal 객체에서 한식이라는 키를 갖는 값을 가져오게 되는 것.

/*
const getMeal = (mealType) => {
    if (mealType === "한식") return "불고기";
    if (mealType === "양식") return "파스타";
    if (mealType === "중식") return "짜장면";
    if (mealType === "일식") return "초밥";
return "굶기";
}
console.log(getMeal("한식"));
console.log(getMeal("중식"));
console.log(getMeal());
*/




/*
function isKoreanFood(food) {
    if(["불고기", "떡볶이", "비빔밥"].includes(food)) { 
    //food === "불고기" || food === "비빔밥" || food === "떡볶이"
        return true;
    } else {
        return false;
    }
}

const food1 = isKoreanFood("불고기");
const food2 = isKoreanFood("pizza");
console.log(food1);
console.log(food2);
*/









 