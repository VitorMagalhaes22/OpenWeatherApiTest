import * as GETWeatherWithoutToken from "../requests/GETWeatherWithoutToken.request";

describe("GET obter clima sem token", () => {
  it("Obter clima sem passar o token", () => {
    GETWeatherWithoutToken.WeatherWithoutToken().should((response) => {
      expect(response.body.message).is.to.eq(
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      );
      expect(response.body.cod).is.to.eq(401);
    });
  });
});
