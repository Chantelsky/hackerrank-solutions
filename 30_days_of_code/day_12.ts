// https://www.hackerrank.com/challenges/30-inheritance/problem?isFullScreen=true
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

class Person {
    protected firstName: string
    protected lastName: string
    protected idNumber: number
    
    constructor(firstName: string, lastName: string, idNumber: number) {
        this.firstName = firstName
        this.lastName = lastName
        this.idNumber = idNumber
    }
    
    printPerson(): void {
        console.log(`Name: ${this.lastName}, ${this.firstName}`)
        console.log(`ID: ${this.idNumber}`)
    }
}

class Student extends Person {
    private scores: number[]
    
    constructor(firstName: string, lastName: string, idNumber: number, scores: number[]) {
        super(firstName, lastName, idNumber)
        this.scores = scores
    }
    
    calculate():string {
        const average = this.scores.reduce((a,b) => a + b, 0) / this.scores.length
        
        if (average >= 90) return 'O'
        if (average >= 80) return 'E'
        if (average >= 70) return 'A'
        if (average >= 55) return 'P'
        if (average >= 40) return 'D'
        else return 'T'
    }
}

function main() {
    const line1 = readLine().split(' ');
    const firstName = line1[0];
    const lastName = line1[1];
    const idNumber = parseInt(line1[2]);
    
    readLine();
    
    const scores = readLine().split(' ').map(s => parseInt(s));
    
     const student = new Student(firstName, lastName, idNumber, scores)
     student.printPerson()
     console.log(`Grade: ${student.calculate()}`)
       
}