const arr = [
    {color: "red"},
    {color: "blue"},
    {color: "green"},
    {color: "black"},
    {color: "red"}
]

const element = arr.find((elm) => {
    return elm.color === "red";
});
console.log(element);


// let number = 3;
// console.log(arr.findIndex((elm) => elm.color === "green"));
// console.log(
//     arr.findIndex((elm) => {
//         return elm.color === "red";
//     })
// );