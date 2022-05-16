/// <reference types="cypress"/>

function WeatherById() {
  return cy.request({
    method: "GET",
    url: "?id=2172797&appid=c3eb88c84d176a4e2e9829f7ca544b7b",
    failOnStatusCode: false,
  });
}

export { WeatherById };
