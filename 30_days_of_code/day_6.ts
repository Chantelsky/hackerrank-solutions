// https://www.hackerrank.com/challenges/30-review-loop/problem?isFullScreen=true

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

function main() {
    const t = parseInt(readLine())
    for(let j = 0; j < t; j++) {
        const s = readLine()
        let even = ''
        let odd = ''
        
        for (let i = 0; i < s.length; i++) {
            if ( i % 2 === 0) {
                even += s[i]
            } else {
                odd += s[i]
            }
        }
        console.log(`${even} ${odd}`)
    }
}

