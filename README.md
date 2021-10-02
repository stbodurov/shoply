<img src="https://github.com/stanislav623/shoply/blob/master/public/shoply_demo.png" alt="shop.ly demo" />

<p><b>Shop.ly</b> is a community driven marketplace made for both buyers and merchants. <br /> 
All you need to start shopping and selling is to sign up.</p>

## Technological Stack

- React
- Redux + Redux Saga
- Firebase
 <br /> <br />
- JavaScript 
- HTML5
- Sass

## Getting started

Open a terminal instance in the project directory and type `yarn start` (or `npm run start` if you use npm).

Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.
 <br /> <br />
Additionally, a production build can be compiled by using `yarn build`.

## Supported functionalities

- <b>Guest</b> users are capable of viewing the most recently added products. An account is necessary for further interaction.
- Logged in users can view all products and add them to their shopping bag. They can sell their own products by going to the merchant tab.

## Routes

### Accessible by guest users:
- /home
- /login
- /register

### Accessible by standard users:
- /home
- /dashboard
- /products/:id
- /admin
