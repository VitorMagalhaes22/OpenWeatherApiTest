import * as GETWeatherInvalidZip from "../requests/GETWeatherInvalidZip.request";

describe("GET obter clima por Zip Code invalido", () => {
  it("Obter clima pelo Zip Code invalido ", () => {
    GETWeatherInvalidZip.WeatherInvalidZip().should((response) => {
      expect(response.body.cod).is.to.eq("404");
      expect(response.body.message).is.to.eq("city not found");
    });
  });
});
