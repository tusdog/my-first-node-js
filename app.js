"use strict"
//process.argvはコマンドラインの引数が入った配列 [0]:nodeコマンドのファイルパス [1]:プログラムのファイルのパス
const number=process.argv[2] || 0;
let sum=0;
for (let i=0;i<=number;i++){
    sum=sum+i;
}
console.log(sum);