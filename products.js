function Product(
  name,
  description,
  priceHT,
  stock,
  minimumAge,
  tva = 20,
  reduction = 0
) {
  this.name = name;
  this.description = description;
  this.priceHT = priceHT;
  this.stock = stock;
  this.sell = true;
  this.minimumAge = minimumAge;
  this.tva = tva;
  this.reduction = reduction;
}

Product.prototype.priceTTC = function () {
  this.priceTTC = this.priceHT + (this.priceHT * this.tva) / 100;
  return this.priceTTC;
};

Product.prototype.removeProduct = function () {
  this.stock = 0;
  this.sell = false;
};

Product.prototype.applyReduction = function () {
  if (this.reduction === 0) {
    return "This product does not have a reduction.";
  } else {
    this.priceHT = this.priceHT - (this.priceHT * this.reduction) / 100;
    return (
      "You can have a reduction of " +
      this.reduction +
      "% so " +
      this.priceHT +
      " euro price HT."
    );
  }
};

Product.prototype.message =
  "The product " +
  this.name +
  " is sold at the price " +
  this.priceHT +
  " euros so " +
  this.priceTTC() +
  " euro TTC. You need to be " +
  this.minimumAge +
  " years old to buy it. " +
  this.applyReduction();

Product.prototype.checkAge = function (age) {
  if (age >= this.minimumAge) {
    return this.message;
  } else {
    return "You need to be " + this.minimumAge + " to buy this product.";
  }
};

let cod = new Product(
  "Call of Duty : United Offensive",
  "shooter",
  10,
  10,
  18,
  20,
  10
);

console.log(cod.checkAge(17));
