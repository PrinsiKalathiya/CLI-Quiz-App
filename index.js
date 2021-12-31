const question = require("./question");

const readline =require("readline");
const { read } = require("fs");
const { title } = require("process");
const { RSA_X931_PADDING } = require("constants");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});


const chalk = require("chalk");
let blueBright = chalk.bold.blueBright
let green = chalk.bold.green
let red = chalk.bold.red
let cyan = chalk.bold.cyan
let yellow = chalk.bold.yellow
let heading = chalk.black.bold.yellow

var answer = "";
var questionno = 1;
var score = 0;
var description = "";
var username ="";

var Questions = () =>{
    var data = question.filter((o) => o.qno == questionno);
    data.forEach(qn => {
        console.log(yellow(`\n Question ${qn.qno} : ${qn.que} `));
        console.log(cyan(`\n  a : ${qn.a}`));
        console.log(cyan(`  b : ${qn.b}`));
        console.log(cyan(`  c : ${qn.c}`));
        console.log(cyan(`  d : ${qn.d}`));
        answer = qn.ans;
        description = qn.desc;
    })
};

var CheckAnswer =() =>{

    if(questionno <=10){
        rl.question(heading("\n Give Answer :"),(ans) =>{
            if(ans == "a" || ans == "b" || ans =="c" || ans == "d"){
                if(ans == answer){
                    score += 5;
                    console.log(green(" Your answer : " +ans));
                    console.log(red(" Your answer is correct"));
                    console.log(blueBright(" Your Score :" +score));
                    questionno +=1;
                    repeat();
                }else{
                    score -= 2;
                    console.log(green(" Your answer : " +ans));
                    console.log(red(" Your answer is incorrect"));
                    console.log(green(" Right Answer : " + description));
                    console.log(blueBright(" Your Score : " +score));
                    questionno +=1;
                    repeat(); 
                }
            }else{
                console.log(heading("Please enter option between a to d option"));
                repeat();
            }
        });
    }else{
        console.log(heading("\n Quiz is over..."));
        console.log(heading(`\n Usename : ${username}`));
        console.log(heading(` Your Final Score is : ${score}`));
        rl.close();
    }
};

var repeat = () => {
    Questions();
    CheckAnswer();
};

console.log(heading("Welcome to Indian GK  MCQ Quiz.."));
rl.question("\n Plese Enter Your Name :",(ans) =>{
    username = ans;
    repeat();   
});