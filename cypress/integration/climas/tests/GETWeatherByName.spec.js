import * as GETWeatherByName from "../requests/GETWeatherbyName.request";

describe("GET obter clima por nome ", () => {
  it("Obter clima pelo nome do estado", () => {
    GETWeatherByName.WeatherByName().should((response) => {
      expect(response.body.main.temp).is.to.eq(response.body.main.temp);
      expect(response.body.name).is.to.eq("Estado de Bahia");
      expect(response.body.cod).is.to.eq(200);
      expect(response.body.id).is.to.eq(3471168);
    });
  });
});
