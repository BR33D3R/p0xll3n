// Define component
ShoppingCart(props) {
  // State is managed in a higher level (such as context or redux store)

  // Define method to handle removing items from cart
  onRemoveItem(itemId) {
    // Call method from props/context to remove item from cart
  }

  // Render shopping cart
  render() {
    // List of items in cart, generated based on props/context
    // For each item, include a button to remove item, which triggers onRemoveItem
    // Display total price of items in cart
  }
}
