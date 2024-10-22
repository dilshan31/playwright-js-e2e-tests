const { test, expect } = require('@playwright/test');

import { LoginPage } from '../pages/loginpage'
import { HomePage } from '../pages/homepage'

const myuserdata = require('../data/TC_001.json')

test('Add items to cart', async ({ page }) => {
  const Login = new  LoginPage(page)
  const Home = new  HomePage(page)

    await page.goto("https://freelance-learn-automation.vercel.app/login")


    await Login.login(myuserdata.username,myuserdata.password)
    await Home.addtocart();

  

  });