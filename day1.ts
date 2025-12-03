const fs = require("fs")

const sampleInput = "L68\n" +
    "L30\n" +
    "R48\n" +
    "L5\n" +
    "R60\n" +
    "L55\n" +
    "L1\n" +
    "L99\n" +
    "R14\n" +
    "L82"

const part1 = (input: string): number => {
    let nilCount = 0;
    let position = 50;

    for (const line of input.split("\n")) {
        const magnitude = parseInt(line.slice(1));
        position += line[0] === "L" ? -magnitude : magnitude;
        position = ((position % 100) + 100) % 100;
        if (position === 0) nilCount++;
    }
    return nilCount;
};


const day1data = fs.readFileSync("day1.input").toString();

console.log(part1(day1data));