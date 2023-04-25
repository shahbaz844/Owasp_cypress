// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
import addContext from "mochawesome/addContext";
import {Login} from "../pages/login"

let login = new Login()

Cypress.on("test:after:run", (test, runnable) => {
  let videoName = Cypress.spec.name;
  videoName = videoName.replace("/.js.*", ".js");
  const videoUrl = "videos/" + videoName + ".mp4";

  addContext({ test }, videoUrl);
});

const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
Cypress.on("uncaught:exception", (err) => {
  /* returning false here prevents Cypress from failing the test */
  if (resizeObserverLoopErrRe.test(err.message)) {
    return false;
  }
});



before(()=>{
  login.login()
  cy.setCookie('token', 'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MjMsInVzZXJuYW1lIjoiIiwiZW1haWwiOiJodXNzeXJlaG1hbjg4MEBnbWFpbC5jb20iLCJwYXNzd29yZCI6Ijc4NzlmZmVlZDU2ZjcwMDg0YzIzNDg4MTdlOThhOGYwIiwicm9sZSI6ImN1c3RvbWVyIiwiZGVsdXhlVG9rZW4iOiIiLCJsYXN0TG9naW5JcCI6InVuZGVmaW5lZCIsInByb2ZpbGVJbWFnZSI6Ii9hc3NldHMvcHVibGljL2ltYWdlcy91cGxvYWRzL2RlZmF1bHQuc3ZnIiwidG90cFNlY3JldCI6IiIsImlzQWN0aXZlIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIyLTA5LTA3IDExOjAyOjQ0LjI2NSArMDA6MDAiLCJ1cGRhdGVkQXQiOiIyMDIyLTA5LTA3IDExOjEwOjM0LjUzMSArMDA6MDAiLCJkZWxldGVkQXQiOm51bGx9LCJpYXQiOjE2NjI2NjY0NDgsImV4cCI6MTY2MjY4NDQ0OH0.bHuH9uTWX0cEkMOU_DwNgfC-mgXVHFLMRYtU3Qfac8h10MtgHt0iGHpA9Rrh8Ge-WzuFAIwtzDfWQpCN6_4YjfflPfs8p35ijxt75eMUHUCQm2FYUw2rn0iXIrYSZ6pRuJIxOCXUZCm2lHsasxCBtdhNwPooHHzsMdhExwZX_fo')
})

beforeEach(() => {
  cy.restoreLocalStorage();
});

afterEach(() => {
  cy.saveLocalStorage();
});

// Alternatively you can use CommonJS syntax:
// require('./commands')
