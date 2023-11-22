function BankAccount(accountNumber, name, type, balance)
{
    this.account = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.print = function()
    {
        console.log(`My name is ${name} My account Number is ${accountNumber}`);
    }
}


let bank = new BankAccount(14232523, "babu", "saving", 34636);

console.log(bank);