/// <reference types="cypress"/>

function WeatherByName() {
  return cy.request({
    method: "GET",
    url: "?q=Bahia&appid=c3eb88c84d176a4e2e9829f7ca544b7b",
    failOnStatusCode: false,
  });
}

export { WeatherByName };
