// export class Ingredient {
//     public name: string;
//     public amount: number;

//     constructor(name: string, amount: number){
//         this.name = name;
//         this.amount = amount;
//     }
// }

// the syntax below is the shortcut for the syntax above

export class Ingredient {
    constructor (public name: string, public amount: number){}
}