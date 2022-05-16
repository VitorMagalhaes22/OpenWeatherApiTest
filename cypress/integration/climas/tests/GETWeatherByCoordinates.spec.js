import * as GETWeatherByCoordinates from "../requests/GETWeatherByCoordinates.request";

describe("GET obter clima por coodernadas ", () => {
  it("Obter clima por coodernadas", () => {
    GETWeatherByCoordinates.WeatherByCoordinates().should((response) => {
      expect(response.body.main.temp).is.to.eq(response.body.main.temp);
      expect(response.body.name).is.to.eq("Newtonhill");
      expect(response.body.cod).is.to.eq(200);
      expect(response.body.id).is.to.eq(2641549);
    });
  });
});
