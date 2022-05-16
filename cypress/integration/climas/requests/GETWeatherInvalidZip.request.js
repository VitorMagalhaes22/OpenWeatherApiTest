/// <reference types="cypress"/>

function WeatherInvalidZip() {
  return cy.request({
    method: "GET",
    url: "?zip=06409160,br&appid=c3eb88c84d176a4e2e9829f7ca544b7b",
    failOnStatusCode: false,
  });
}

export { WeatherInvalidZip };
