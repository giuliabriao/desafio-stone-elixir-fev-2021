class Fixtures{

    static items(){         //name //quantity //price
        return [new Item("banana", 1, 421),
                     new Item("apple", 4, 674),
                     new Item("grape", 3, 354),
                     new Item("orange", 7, 998),
                     new Item("dragonfruit", 2, 276),];
        
    }

    static emails(){
        return ["jake@email.com", "martha@email.com", "abe@email.com"];
    };

    static itemsWithNegativeQuantity(){
        return [new Item("banana", -1, 347)];
    };

    static itemsWithNegativePrice(){
        return [new Item("apple", 2, -432)];
    };

    static itemsWithDecimalQuantity(){
        return [new Item("grape", 1.23, 3234)];
    };

    static itemsWithDecimalPrice(){
        return [new Item("orange", 3, 43.2334)];
    };

    static emptyItemsList(){
        return [];
    };

    static emptyEmailsList(){
        return [];
    };

    static invalidEmailsList(){
        return [1, "a", "user@email.com"];
    }
}