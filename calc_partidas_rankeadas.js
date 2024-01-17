rank(70, 8);

function rank(victories, defeats){
    let rankedBalance = victories - defeats;
    if (rankedBalance <= 10) {
        console.log(`O herói tem o saldo ${rankedBalance} e está no nível Ferro`);
    }else if(rankedBalance >= 11 && rankedBalance <= 20) {
        console.log(`O herói tem o saldo ${rankedBalance} e está no nível Bronze`);
    }else if(rankedBalance >= 21 && rankedBalance <= 50) {
        console.log(`O herói tem o saldo ${rankedBalance} e está no nível Prata`);
    }else if(rankedBalance >= 51 && rankedBalance <= 80) {
        console.log(`O herói tem o saldo ${rankedBalance} e está no nível Ouro`);
    }else if(rankedBalance >= 81 && rankedBalance <= 90) {
        console.log(`O herói tem o saldo ${rankedBalance} e está no nível Diamante`);
    }else if(rankedBalance >= 91 && rankedBalance <= 100) {
        console.log(`O herói tem o saldo ${rankedBalance} e está no nível Lendário`);
    }else if(rankedBalance >= 101) {
        console.log(`O herói tem o saldo ${rankedBalance} e está no nível Imortal`);
    }else{
        console.log(`Não entrou em nenhum!`)
    }
}