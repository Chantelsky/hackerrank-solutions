// https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem?isFullScreen=true
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
    const phoneBook: Record<string, string> = {}
    const n = parseInt(readLine())
    
    for (let i = 0; i < n ; i++) {
       const line = readLine().split(' ')
        const name = line[0]
        const number = line[1]
        phoneBook[name] = number  
    }
    
    let query = readLine()
    while (query) {
        if (query in phoneBook) {
            console.log(`${query}=${phoneBook[query]}`)
        } else {
            console.log('Not found')
        }
        
        query= readLine()
    }
}
