type BankAccount = {money:number,deposit:(value:number)=>void}
type Self = {name:string,account:BankAccount,hobbies:any[]};

let bankAccount = {
    money:2000,
    deposit:function(value){
        this.money +=value;
    }
}

let asaad:Self = {
    name:"Asaad",
    account:bankAccount,
    hobbies:["Violin","Cooking"]
}

let berhanu:Self = {
    name:"Berhanu",
    account:bankAccount,
    hobbies:["Video Game","Soccer"]
}