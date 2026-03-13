https://www.hackerrank.com/challenges/30-scope/problem?isFullScreen=true

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

class Difference {
    private __elements: number[];
    public maximumDifference: number = 0;

    constructor(elements: number[]) {
        this.__elements = elements
    }

    computeDifference(): void {
        this.maximumDifference = Math.abs(Math.max(...this.__elements) - Math.min(...this.__elements))
    }
}

function main() {
    const n = parseInt(readLine())
    const elements = readLine().split(' ').map(Number)
    const d = new Difference(elements)
    d.computeDifference()
    console.log(d.maximumDifference)
}