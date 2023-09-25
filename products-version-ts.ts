class ProductTS {
  name: string;
  description: string;
  priceHt: number;
  stock: number;
  minAge: number;
  tva: number;
  reduction: number;
  sell: boolean;

  constructor(
    name: string,
    description: string,
    priceHt: number,
    stock: number,
    minAge: number,
    tva: number = 20,
    reduction: number = 0
  ) {
    (this.name = name),
      (this.description = description),
      (this.priceHt = priceHt),
      (this.stock = stock),
      (this.sell = true),
      (this.minAge = minAge),
      (this.tva = tva),
      (this.reduction = reduction);
  }

  getPriceTTC(): number {
    return this.priceHt + (this.priceHt * this.tva) / 100;
  }
  setStockZero(): void {
    this.stock = 0;
    this.sell = false;
  }
  checkReduction(): string {
    if (this.reduction === 0) {
      return "This product does not have a reduction.";
    } else {
      this.priceHt = this.priceHt - (this.priceHt * this.reduction) / 100;
      return (
        "You can have a reduction of " +
        this.reduction +
        "% so " +
        this.priceHt +
        " euro price HT."
      );
    }
  }

  message(): string {
    return (
      "The product " +
      this.name +
      " is sold at the price " +
      this.priceHt +
      " euros so " +
      this.getPriceTTC() +
      " euro TTC. You need to be " +
      this.minAge +
      " years old to buy it. " +
      this.checkReduction()
    );
  }

  checkAge(age: number): string {
    if (age >= this.minAge) {
      return this.message();
    } else {
      return "You need to be " + this.minAge + " to buy this product.";
    }
  }
}

const product = new ProductTS("testName", "test description", 10, 5, 18);
console.log("Product :\n", product);
console.log("Check age: \n", product.checkAge(15));
console.log("Message :\n", product.message());
console.log("Check reduction :\n", product.checkReduction());
console.log("Price TTC:\n", product.getPriceTTC());

product.setStockZero();
console.log("Product stock 0 :\n", product);
