# eCom!

Welcome to **eCom!** Project, the goal here is to implement an ecommerce website that is user friendly and secure using MERN stack.
This has many Features including:

- Sign In/Sign Out
- Add to Cart/ Delete from Cart
- LocalStorage to keep user's instance protected
- Order Preview & edits
- Individual product view
- Product review
- Cart view
- Cart Counter
- 4 step place order process: **Sign In --> Shipping --> Payment --> Place Order**
- PayPal payment gateway integration

This is a vast project that is still in _progress_ and soon will come up with updates including enhanced user friendly features.

## **Project Setup Guide**

- Clone Project in Local `git@github.com:aditijain-11/eCom.git`

- **Client Side setup:**

  - Move to Client folder
  - Run command in Terminal: ` npm install --force`
  - Run react app with: `npm start`

<br>

    **Note**: Due to some Dependency conflict with use-reducer-logger and babel we are using --force

<br>

- Server Side setup:
  - Move to server folder
  - Run command in Terminal: `npm install`
  - For running backend: `npm start`

<br>

- Create .env in the eCom folder and add environment variables

  - JWT_SECRET = somethingsecret
  - MONGODB_URI=mongodb+srv://database:password@cluster0.xyrtqxp.mongodb.net/dbname?retryWrites=true&w=majority
  - PAYPAL_CLIENT_ID=' '

  **Note:** database created in mongodb atlas, paypal developer used for paypal integration

    <br>

## Apis in Function

1. **Seed Users** <br>
   Run this on browser: http://localhost:5000/api/seed
   It returns admin email and password.
2. **Admin Login:** <br>
   Run http://localhost:3000/signin
   Enter admin email and password and click signin
3. **Products:** <br>
   Run this on browser: http://localhost:5000/api/products
   It returns 4 sample products

## ScreenShots

### Landing page

<br>

![Landing page](images/image.png)

### Product page

<br>

![Product page](images/image-1.png)

### User Visibility on Login

<br>

![User Visibility Login page](images/image-10.png)

### Shopping Cart

<br>

![Shopping Cart page](images/image-2.png)

### Sign In Page

<br>

![Sign In page](images/image-3.png)

### Sign Up Page

<br>

![Sign Up page](images/image-4.png)

### Shipping Address

<br>

![Shipping Address](images/image-5.png)

### Payment Method

<br>

![Payment method page](images/image-6.png)

### Preview Order

<br>

![Preview Order page](images/imagepreview.png)

### Order product/Payment page

<br>

![Order Products page](images/image-8.png)

### PayPal integration

<br>

![PayPal page](images/image-9.png)
