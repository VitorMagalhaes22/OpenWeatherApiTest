import * as GETWeatherById from "../requests/GETWeatherById.request";

describe("GET obter clima por Id ", () => {
  it("Obter clima pelo Id", () => {
    GETWeatherById.WeatherById().should((response) => {
      expect(response.body.main.temp).is.to.eq(response.body.main.temp);
      expect(response.body.name).is.to.eq("Cairns");
      expect(response.body.cod).is.to.eq(200);
      expect(response.body.id).is.to.eq(2172797);
    });
  });
});
