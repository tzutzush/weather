import webpack from "webpack";
import middleware from "webpack-dev-middleware";
import config from "../webpack.config.js";
import express, { Request, Response, urlencoded } from "express";
import NodeCache from "node-cache";
import * as weatherService from "./weather-service/weatherService.js";
import * as airQualityService from "./air-quality-service/airQualityService.js";

const compiler = webpack(config);
const app = express();
export const cache = new NodeCache({ stdTTL: 1800 });

app.use(express.json());
app.use(urlencoded({ extended: false }));

app.use(
  middleware(compiler, {
    // webpack-dev-middleware options
  })
);

app.get("/api/weather", async (req: Request, res: Response) => {
  let location: string;
  if (req.query.location) {
    location = req.query.location.toString();
  }
  const current = await weatherService.getCurrentWeatherAndForecast(location);
  res.send(current);
});

app.get("/api/air-quality", async (req: Request, res: Response) => {
  let location: string;
  if (req.query.location) {
    location = req.query.location.toString();
  }
  const current = await airQualityService.getAirQualityBasedOnLocation(
    location
  );
  res.send(current);
});

// app.post("/api/user-location", async (req: Request, res: Response) => {
//   const { coordinates } = req.body;
//   const current = await weatherService.getCurrentWeatherAndForecast(
//     coordinates
//   );
//   res.send(current);
// });

app.listen(3000, () => console.log("Example app listening on port 3000!"));
