const fetch = require("node-fetch");

async function getData() {
    let rawResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    let jsonResponse = await rawResponse.json();
    console.log(jsonResponse);
}
getData();
 // fetch는 자바스크립트에서 API를 호출 할 수 있도록 도와주는 내장함수.
