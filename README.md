## Ecommerce Book Store site with Redux

React project that provide a UI interface with redux

## To run application

Run json server using command $ json-server server.json --port 3001
Run Application using command $ npm start

## Technologies

-   1. NodeJS
-   2. ReactJS
-   3. Typescript
-   4. Redux
-   5. Styled Components
-   6. Saga

## Components

### Home

This component get list of books in a rest api provided using `json-server`. Using a redux structure flow, these component can share data between others components.

![alt text](/screenshots/home.png)

### ProductDetails

Component that provide the details of the book(description,author,pagecount etc.). It has 2 buttons - Add to cart(adds book to cart) & Buy(Leads to final page).
![alt text](/screenshots/productDetails.png)

### Cart

Component that contains the list of products added to cart, here it's possible to remove product and add more quantity of products, the components also calculate the totals

![alt text](/screenshots/cart.png)


### MyOrders

Component that contains the list of books bought with the date and status.
![alt text](/screenshots/myOrders.png)
