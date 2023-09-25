var ProductTS = /** @class */ (function () {
    function ProductTS(name, description, priceHt, stock, minAge, tva, reduction) {
        if (tva === void 0) { tva = 20; }
        if (reduction === void 0) { reduction = 0; }
        (this.name = name),
            (this.description = description),
            (this.priceHt = priceHt),
            (this.stock = stock),
            (this.sell = true),
            (this.minAge = minAge),
            (this.tva = tva),
            (this.reduction = reduction);
    }
    ProductTS.prototype.getPriceTTC = function () {
        return this.priceHt + (this.priceHt * this.tva) / 100;
    };
    ProductTS.prototype.setStockZero = function () {
        this.stock = 0;
        this.sell = false;
    };
    ProductTS.prototype.checkReduction = function () {
        if (this.reduction === 0) {
            return "This product does not have a reduction.";
        }
        else {
            this.priceHt = this.priceHt - (this.priceHt * this.reduction) / 100;
            return ("You can have a reduction of " +
                this.reduction +
                "% so " +
                this.priceHt +
                " euro price HT.");
        }
    };
    ProductTS.prototype.message = function () {
        return ("The product " +
            this.name +
            " is sold at the price " +
            this.priceHt +
            " euros so " +
            this.getPriceTTC() +
            " euro TTC. You need to be " +
            this.minAge +
            " years old to buy it. " +
            this.checkReduction());
    };
    ProductTS.prototype.checkAge = function (age) {
        if (age >= this.minAge) {
            return this.message();
        }
        else {
            return "You need to be " + this.minAge + " to buy this product.";
        }
    };
    return ProductTS;
}());
var product = new ProductTS("testName", "test description", 10, 5, 18);
console.log("Product :\n", product);
console.log("Check age: \n", product.checkAge(15));
console.log("Message :\n", product.message());
console.log("Check reduction :\n", product.checkReduction());
console.log("Price TTC:\n", product.getPriceTTC());
product.setStockZero();
console.log("Product stock 0 :\n", product);
