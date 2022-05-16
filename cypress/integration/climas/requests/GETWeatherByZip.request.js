/// <reference types="cypress"/>

function WeatherByZip() {
  return cy.request({
    method: "GET",
    url: "?zip=94040,us&appid=c3eb88c84d176a4e2e9829f7ca544b7b",
    failOnStatusCode: false,
  });
}

export { WeatherByZip };
