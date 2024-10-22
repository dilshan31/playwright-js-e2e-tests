const { test, expect } = require('@playwright/test');

import { LoginPage } from '../pages/loginpage'

const myuserdata = require('../data/TC_001.json')

test('Login to the Portal', async ({ page }) => {
  
  const Login = new  LoginPage(page)

    await page.goto("https://freelance-learn-automation.vercel.app/login")


    await Login.login(myuserdata.username,myuserdata.password)


  

  });