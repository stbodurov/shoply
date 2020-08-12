<img src="https://github.com/stanislav623/shoply/blob/master/public/shoply_demo.png" alt="shop.ly demo" style="display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;">

<p><b>Shop.ly</b> is a community driven marketplace made for both buyers and merchants. <br /> 
All you need to start shopping is to sign up. 
If you want to sell, you can upgrade your account at any time.</p>

## Technological Stack

- React
- Redux + Redux Saga
- Firebase
- GraphQL
 <br /> <br />
- Javascript 
- HTML 
- CSS 

## Getting started

Open a terminal instance in the project directory and type `yarn start` (or `npm run start` if you use npm).

Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.
 <br /> <br />
Additionally, a production build can be compiled by using `yarn build`.

## Supported functionalities

- <b>Guest</b> users are capable of viewing the most recently added products. An account is necessary for further interaction.
- Logged in <b>standard</b> users can view all products and add them to their shopping bag. They can become merchants by upgrading their accounts to the <i>Pro</i> tier.
- <b>Pro</b> users can sell their own products while also being able to buy other users' products.

## Routes

- <b>Accessible by guest users:</b>
- /home
- /login
- /register

- <b>Accessible by standard users:</b>
- /home
- /dashboard
- /products/:id

- <b>Accessible by <i>Pro</i> users:</b>
- /home
- /dashboard
- /products/:id
- /admin
