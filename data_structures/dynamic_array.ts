//https://www.hackerrank.com/challenges/dynamic-array/problem?isFullScreen=true
'use strict';

import { WriteStream, createWriteStream } from "fs";
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

/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

// Key insight: position in type 2 query needs % arr[bucket].length
// as the problem statement doesn't mention this explicitly
function dynamicArray(n: number, queries: number[][]): number[] {
    let arr:number[][] = Array.from({length: n}, () => [])
    let lastAnswer = 0
    let answers: number[] = []
    
    for (let query of queries ) {
        if (query[0] === 1) {
            const bucket = (query[1] ^ lastAnswer) % n
            arr[bucket].push(query[2])
            } else {
            const bucket = (query[1] ^ lastAnswer) % n
            lastAnswer = arr[bucket][query[2] % arr[bucket].length]
            answers.push(lastAnswer)
        }
    }
    return answers
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

    const n: number = parseInt(firstMultipleInput[0], 10);

    const q: number = parseInt(firstMultipleInput[1], 10);

    let queries: number[][] = Array(q);

    for (let i: number = 0; i < q; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const result: number[] = dynamicArray(n, queries);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
