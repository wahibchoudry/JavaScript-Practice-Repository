// =============================
// Basic Operations & Variables
// =============================
console.log(1 + 2);
let name = "wahib", city = "lahore";
console.log(name, city);
console.log(null + 1);

let admin = true;
let user = false;

if (admin && user) {
    console.log("This is true");
} else {
    console.log("This is false");
}

let temp = 35;
if (!(temp < 30)) {
    console.log("It's not hot");
} else {
    console.log("It's hot");
}

// =============================
// Ternary Operator Example
// =============================
let score = 7;
let grade = score >= 90 ? "A" : score == 90 ? "b" : score >= 70 ? "c" : "fail";
console.log(grade);

// =============================
// Increment Example
// =============================
let a = 5;
let y = ++a;
console.log(a, y);

// =============================
// Function: Grading System
// =============================
function getgrade(score) {
    if (score >= 90 && score <= 100) {
        console.log("Score is A");
    }
    else if (score >= 70 && score <= 80) {
        console.log("Score is B");
    }
    else if (score >= 60 && score <= 70) {
        console.log("Score is C");
    }
    else if (score >= 50 && score <= 60) {
        console.log("Score is D");
    }
    else {
        console.log("Score is Invalid");
    }
}
score = 52;
getgrade(score);

// =============================
// Function: Rock-Paper-Scissors
// =============================
function rps(user, computer) {
    if (user === "Rock" && computer === "Scissors") return "It's a tie";
    if (user === "Rock" && computer === "Paper") return "Computer wins";
    if (user === "Rock" && computer === "Rock") return "It's a tie";
    if (user === "Paper" && computer === "Scissors") return "Computer wins";
    if (user === "Paper" && computer === "Rock") return "User wins";
    if (user === "Paper" && computer === "Paper") return "It's a tie";
    if (user === "Scissors" && computer === "Rock") return "Computer wins";
    if (user === "Scissors" && computer === "Paper") return "User wins";
    if (user === "Scissors" && computer === "Scissors") return "It's a tie";
}
console.log(rps("Rock", "Scissors"));

// =============================
// Loops: Multiplication & Summation
// =============================
let num = 5;
// Multiplication table of 5
for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}
for (let i = 1; i <= 101; i++) {
    console.log(i + "+" + i + "=" + (i + i));
}
// Sum of numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum from 1 to 100 is:", sum);

// =============================
// While Loop & Conditions
// =============================
let ai = 10;
while (ai >= 1) {
    console.log(ai);
    ai--;

    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0) {
            console.log(i + " is divisible by 3");
        }
    }

    let val = prompt("Enter a number to check if it's even or odd:");
    for (let i = 1; i <= val; i++) {
        if (i % 2 === 0) {
            console.log(i + " is even");
        } else {
            console.log(i + " is odd");
        }
    }

    for (i = 1; i <= 101; i++) {
        console.log(i);
        if (i % 7 === 0) {
            break;
        }
    }

    for (let i = 1; i <= 10; i++) {
        if (i % 3 === 0) continue;
        console.log(i);
    }

    let count = 0;
    for (let i = 1; i <= 101; i++) {
        if (i % 2 === 1) {
            count++;
            console.log(i + " is odd");
        }
        if (count === 5) {
            console.log("Five odd numbers found, exiting loop.");
            break;
        }
    }

    let sum = 0;
    for (let i = 0; i <= 10; i++) {
        sum += i;
        console.log(sum);
    }

    let fact = 1;
    let num = 5;
    for (let i = 1; i <= num; i++) {
        fact *= i;
        console.log(fact);
    }

    let arr = [1, 2, 3, 4, 5, 6];
    for (let i = arr.length; i > 0; i++) {
        console.log(arr[i]);
    }

    let str = "Hello";
    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
    }

    let arr2 = [1, 2, 3, 4, 5, 6];
    let sum2 = 0;
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] % 2 === 0) {
            sum2 += arr2[i];
        }
    }
    console.log("Sum of even elements:", sum2);
}

// =============================
// Closures & Higher Order Functions
// =============================
function val() {
    a = 5;
    return function () {
        console.log(a);
    }
}
console.log(val()());

function val2(V1) {
    V1();
}
val2(function () {
    console.log("Hello, World!");
});

let hello = () => {
    console.log("Hello World");
}
hello();

function add(...val) {
    let total = 0;
    val.forEach(function (num) {
        total = total + num;
        console.log(total);
    });
}
add(1, 2, 3, 4, 5, 6);

function hello2(val) {
    val();
}
hello2(function () {
    console.log("Hello, World!");
});

function bmi(weight, height) {
    return weight / (height * height);
}
console.log(bmi(73, 1.82).toFixed(2));

function discountcal(discount) {
    return function (price) {
        return price - price * (discount / 100);
    }
}
console.log(discountcal(10)(100));
let discount10 = discountcal(10);
let discount20 = discountcal(20);
console.log("Price after 10% discount: " + discount10(100));
console.log("Price after 20% discount: " + discount20(100));

function counter(count) {
    count = 0;
    return function () {
        count++;
        return count;
    }
}
let c = counter();
console.log(c());
console.log(c());
console.log(c());
console.log(c());

(function () {
    let a = 5;
    console.log(a);
})();

// =============================
// Array Methods Examples
// =============================

let arr = [32, 21, 11, 4, 5];
// arr.pop();
// arr.splice(1,2)
// let newarr = arr.slice(0,4);
// arr.reverse();

arr.sort(function (a, b) {
    return a + b;
});
console.log(arr);

arr.forEach(function (val) {
    console.log(val + 5);
});

let newarr = arr.map(function (val) {
    return val - 12;
});
console.log(newarr);

let newarr2 = arr.filter(function (val) {
    if (val > 10) {
        return val;
    }
});
console.log(newarr2);

let newarr3 = arr.reduce(function (accumulator, value) {
    return accumulator + value;
}, 0);
console.log(newarr3);

// =============================
// Array Destructuring & Spread
// =============================
let arrX = [1, 2, 3, 4, 5];
let [p, q, , r] = arrX;
console.log(p, q, r);

let arr2x = [...arrX];
console.log(arr2x);

let arrFruits = ["mango", "apple", "banana"];
arrFruits.push("orange");
arrFruits.unshift("grape");
arrFruits.pop();
arrFruits.push("kiwi");
arrFruits.splice(1, 0, "Oho");
let newFruits = arrFruits.slice(1, 4);
console.log(newFruits);

let arrNames = ["wahib", "ali", "zhmed"];
arrNames.sort();
arrNames.reverse();
console.log(arrNames);

let arrSquares = [1, 2, 3, 4, 5, 6].map(function (val) {
    return val * val;
});
console.log(arrSquares);

let arrFilter = [1, 2, 3, 4, 5, 6].filter(function (val) {
    return val > 3;
});
console.log(arrFilter);

let arrReduce = [1, 2, 3, 4, 5, 6].reduce(function (accum, val) {
    return accum + val;
}, 0);
console.log(arrReduce);

let arrSome = [1, 2, 3, 4, 5, 6].some(function (val) {
    return val > 5;
});
console.log(arrSome);

let arrEvery = [1, 2, 3, 4, 5, 6].every(function (val) {
    if (val % 2 === 0) {
        return val;
    }
});
console.log(arrEvery);

let arrTwo = ["wahib", "ali"];
let [first, second] = arrTwo;
console.log(first, second);

let aArr = [1, 2];
let bArr = [3, 4];
let cArr = [...aArr, ...bArr];
console.log(cArr);

// =============================
// Object Examples
// =============================
let role = "admin"
let obj = {
    Name: "Wahib",
    Age: 22,
    location: {
        city: "Lahore",
        country: "Pakistan"
    },
    [role]: "Wahib"
};

for (let key in obj) {
    console.log(key, obj[key]);
}

let obj2 = { ...obj };
console.log(obj2);

let obj3 = JSON.parse(JSON.stringify(obj));
obj3.location.city = "Karachi";
console.log(obj3);

console.log(obj?.location?.city);

let obj4 = {
    Name: "wahib",
    Age: "18",
    ISENROLLED: "TRUE"
};
Object.entries(obj4).forEach(function (key) {
    console.log(key[0] + ":" + key[1]);
});
