# README

This app is a shopping website where users can browse through tops, by filtering through brands and colors, and sorting according to price. They can also add to cart.

### Organization of components
There are three main components, besides the main App.js. They include Cart, DisplayList and Filter. 
<br />
1. App.js contains the product data and the main functions which help to filter by brand and color, sort elements by price and add/remove items from cart.
  i. App.js state consists of the product cards, selected sort and filters, and cart items.
2. DisplayList component code determines the appearance of each of the product cards: product image, name, price, brand, color and add to cart button.
3. Filter component code consists of the dropdowns for filter by brand and color, and the sort features.
4. Cart component code determines the appearance of each of items in the cart: price quantity, product image, name, and remove from cart button. It also determines the appeareance of the shopping cart itself.

### How data is passed down through components
App.js passes down the respective functions and props to the components. <br />
The first component is the filter which takes in the sort, brand and color value in the state keeping track of what the user chose to filter and sort as props. Filter component also takes in the functions for sorting products by price and filter products by brand and color. <br />
The DisplayList component takes in all of the product items from App.js state. Since the product card also contain an add to cart button, it also takes in the function for adding items to cart. <br />
The Cart component takes in the product items in the cart from App.js state. Since the items in the cart also contain an remove from cart button, it also takes in the function for removing items from cart.

### How the user trigger state changes
App.js state consists of the product cards, selected sort and filters, and cart items. When the user changes the filter by brand or color option, or sort by price option from the dropdown, it triggers changes in App.js. W.r.t to the product cards, adding items to cart and removing items from cart also triggers state change as the cart items change.

### Deployment
Acces this website [here](https://floating-journey-81523.herokuapp.com/)
