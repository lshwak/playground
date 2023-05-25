let zunik = {
    name: "zunik",
    age: 31,
    job: "developer",
    secondJob : "bboy"
}

for(let [key,value] of Object.entries(zunik)) {
    console.log(`${key}:${value}`);
}

let user = new Map ();
user.set ("name", "zunik");
user.set ("age", "30");
user.set ("from", "ulsan");

for (let [key,value] of user) {
    console.log(`${key}:${value}`)
}