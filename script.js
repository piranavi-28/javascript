function start() {  
    const item = [
        {name: "water", price:20},
        {name: "juice", price:100},
        {name: "coffee", price:90},
        {name: "tea", price:80},
        {name: "chips", price:50},
    ]
    let List = "";
    function Menu() {
        console.log("=====Vending Machine Menu=====")
        for (let i = 0; i < item.length; i++) {
            console.log((i+1) + ". " + item[i].name + " - ₹" + item[i].price);
            List += (i+1) + ". " + item[i].name + " - ₹" + item[i].price + "\n";
        }
        
    }
    function Price(amount, price) {
        return amount-price;
    }
    Menu();
    let again;
    do {
        alert(List);
        const itemnum = Number(prompt("Enter the item number from 1 to 5: "));
        if (!Number.isInteger(itemnum) || itemnum < 1 || itemnum > 5) {
            alert("Invalid item number, Please put valid input!!!")
        }
        else {
            const amount = Number(prompt("Enter the amount: "));
            const Item = item[itemnum - 1];
            if (isNaN(amount) || amount < 0 ) {
                alert("Please enter valid or non-negative amount!!!")
            }
            else if (amount < Item.price) {
                alert ("Insufficient balance !!!" + Item.name + "costs ₹" + Item.price + ".");
            }
            else {
                const change = Price(amount, Item.price);

                for (let cdown = 3; cdown >= 1; cdown--) {
                    alert(cdown);
                }

                alert("Your " + Item.name + " is ready!!!\nChange returned: ₹" + change);
            }
        }
        again = confirm("Would you like to make another purchase?")
    }while (again)
    alert("Thank you for using the vending machine. Goodbye!!!");
}