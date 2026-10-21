
function toLowerWithoutBuiltIn(str) {

    let result = "";
    const strings = {
        "A": "a",
        "B": "b",
        "C": "c",
        "D": "d",
        "E": "e",
        "F": "f",
        "G": "g",
        "H": "h",
        "I": "i",
        "J": "j",
        "K": "k",
        "L": "l",
        "M": "m",
        "N": "n",
        "O": "o",
        "P": "p",
        "Q": "q",
        "R": "r",
        "S": "s",
        "T": "t",
        "U": "u",
        "V": "v",
        "W": "w",
        "X": "x",
        "Y": "y",
        "Z": "z",
    };

    for(let i = 0; i < str.length; i++){
        const char_from_strings = strings[str[i]];
        if(char_from_strings){
            result += char_from_strings;
            continue;
        }

        result += str[i];
    }

    return result;

}

async function asyncGetUsers() {

    const raw_data = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await raw_data.json();

    users = users.map((data) => {
        data.email = data.email.toLowerCase();
        return data;
    });

    console.log("\nAsync function");
    for (let { name, username, email } of users) {
        console.log(`Name: ${name}, username: ${username}, email: ${email}`);
    }

}


function thenGetUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(raw_data => raw_data.json())
        .then((users) => {
            users = users.map((data) => {
                data.email = toLowerWithoutBuiltIn(data.email);
                return data;
            });

            console.log("\nThen function");
            for (let { name, username, email } of users) {
                console.log(`Name: ${name}, username: ${username}, email: ${email}`);
            }

        });
}

asyncGetUsers();
thenGetUsers();
