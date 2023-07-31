# eCom!

## **Project Setup Guide**

- Clone Project in Local `git@github.com:aditijain-11/eCom.git`

- Client Side setup:

  - Move to Client folder
  - Run command in Terminal: ` npm install --force`
  - Run react app with: `npm start`

<br>

**Note**: Due to some Dependency conflict with use-reducer-logger and babel we are using --force
<br>

- Server Side setup:
  - Move to server folder
  - Run command in Terminal: `npm init -y`
  - For running backend: `npm start`

<br>

- Create .env in the eCom folder and add environment variables

  - JWT_SECRET = somethingsecret
  - MONGODB_URI=mongodb+srv://database:password@cluster0.xyrtqxp.mongodb.net/dbname?retryWrites=true&w=majority
  - PAYPAL_CLIENT_ID=' '

  **Note:** database created in mongodb atlas, paypal developer used for paypal integration

    <br>

## ScreenShots

### Landing page

<br>

![Alt text](images/image.png)

### Product page

<br>

![Alt text](images/image-1.png)

### User Visibility on Login

<br>

![Alt text](images/image-10.png)

### Shopping Cart

<br>

![Alt text](images/image-2.png)

### Sign In Page

<br>

![Alt text](images/image-3.png)

### Sign Up Page

<br>

![Alt text](images/image-4.png)

### Shipping Address

<br>

![Alt text](images/image-5.png)

### Payment Method

<br>

![Alt text](images/image-6.png)

### Preview Order

<br>

![Alt text](images/imagepreview.png)

### Order product/Payment page

<br>

![Alt text](images/image-8.png)

### PayPal integration

<br>

![Alt text](images/image-9.png)
