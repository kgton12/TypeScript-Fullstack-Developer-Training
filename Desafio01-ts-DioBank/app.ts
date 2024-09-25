import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Wellington", 10);
console.log(peopleAccount);
peopleAccount.deposit(100);
peopleAccount.withdraw(50);
peopleAccount.getBalance();

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
companyAccount.deposit(50);
companyAccount.getBalance();
companyAccount.getLoan(100);
console.log(companyAccount);
