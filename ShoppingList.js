class Item{
    constructor(name, quantity, price){
        if(quantity < 0 || price < 0){
            throw "Sorry, but you may use only positive numbers."
        }else if(Number.isInteger(quantity) == false || Number.isInteger(price) == false){
            throw "Please, the numbers must be integers."
        }

        this._name = name,
        this._quantity = quantity,
        this._price = price
    };

    getAmount(){
        return this._quantity * this._price;
    };
};

class ShoppingList{
    constructor(items, emails){
        if(items.length == 0){
            throw "An empty items list is not allowed.";
        };

        if(emails.length == 0){
            throw "An empty emails list is not allowed.";
        }

        for(let email of emails){
            if(typeof email != "string" || email.includes("@") == false){
                throw "Please, make sure the emails list only contains strings and valid e-mails."
            };
        };

        this._items = items,
        this._emails = emails;
    };

    sumTotal(){
        let total = 0;
        this._items.forEach((item) => total += item.getAmount());
        return total;
    }

    divideAmountByEmails(){
        let sum = this.sumTotal(this._items);
        let amountByEmail = Math.trunc(sum / this._emails.length);
        let remainder = sum % this._emails.length;

        return {integerResult: amountByEmail,
                remainder: remainder};
    }

    splitAmountByEmails(){
        var amountByEmail = this.divideAmountByEmails(this._items, this._emails);
        let itemsMap = new Map(); 

        this._emails.map(email => itemsMap.set(email, amountByEmail.integerResult));

        if (amountByEmail.remainder !== 0){
            let lastEmail = this._emails[this._emails.length - 1];
            let roundedAmount = amountByEmail.integerResult + amountByEmail.remainder;
            
            itemsMap.set(lastEmail, roundedAmount);
        };
        return itemsMap;
    };
};
