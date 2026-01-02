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

type Direction = "L" | "R";

const part1 = (input: string): number => {
    let nilCount = 0;
    let position = 50;

    for (const line of input.split("\n")) {
        const instruction = parseInstruction(line);
        let count;
        for (count = 0; count < instruction.magnitude; count++) {
            position = moveDial(position, instruction.direction, 0, 99);
            //console.log(position);
        }
        if (position === 0) nilCount++;
    }
    return nilCount;
};

const part2 = (input: string): number => {
    let nilCount = 0;
    let position = 50;

    for (const line of input.split("\n")) {
        const instruction = parseInstruction(line);
        let count;
        for (count = 0; count < instruction.magnitude; count++) {
            position = moveDial(position, instruction.direction, 0, 99);
            if (position === 0) nilCount++;
        }
    }
    return nilCount;
};

const parseInstruction = (instruction: string): {direction: Direction, magnitude: number} => {
    const magnitude = parseInt(instruction.slice(1));
    const direction = instruction[0] as Direction; // trust me bro
    return {magnitude, direction};
}

const moveDial = (startPosition: number, direction: Direction, lowerBound: number, upperBound: number): number => {
    const newPos = direction === "L" ? startPosition - 1 : startPosition + 1;
    if (newPos < lowerBound) return upperBound;
    if (newPos > upperBound) return lowerBound;
    return newPos;
}


const day1data = fs.readFileSync("day1.input").toString();

console.log(part1(day1data));
console.log(part2(day1data));