/// <reference types="cypress"/>

function WeatherWithoutToken() {
  return cy.request({
    method: "GET",
    url: "?q=Bahia",
    failOnStatusCode: false,
  });
}

export { WeatherWithoutToken };
