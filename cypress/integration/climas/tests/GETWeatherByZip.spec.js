import * as GETWeatherByZip from "../requests/GETWeatherByZip.request";

describe("GET obter clima por Zip Code", () => {
  it("Obter clima pelo Zip Code", () => {
    GETWeatherByZip.WeatherByZip().should((response) => {
      expect(response.body.main.temp).is.to.eq(response.body.main.temp);
      expect(response.body.name).is.to.eq("Mountain View");
      expect(response.body.cod).is.to.eq(200);
      expect(response.body.id).is.to.eq(0);
    });
  });
});
