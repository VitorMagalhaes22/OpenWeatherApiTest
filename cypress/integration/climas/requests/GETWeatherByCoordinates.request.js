/// <reference types="cypress"/>

function WeatherByCoordinates() {
  return cy.request({
    method: "GET",
    url: "?lat=57&lon=-2.15&appid=c3eb88c84d176a4e2e9829f7ca544b7b",
    failOnStatusCode: false,
  });
}

export { WeatherByCoordinates };
