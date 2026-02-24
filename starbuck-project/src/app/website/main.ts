class StarbucksApp {
  constructor() {
    this.handleOrder();
    this.handleBuy();
  }

  handleOrder(): void {
    const orderBtn = document.getElementById("orderBtn");
    orderBtn?.addEventListener("click", () => {
      alert("Redirecting to order page...");
    });
  }

  handleBuy(): void {
    const buyButtons = document.querySelectorAll(".buyBtn");
    buyButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        alert("Item added to cart!");
      });
    });
  }
}

new StarbucksApp();