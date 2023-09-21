import { CHUCK_NORRIS_URL } from "./chuck-norris.constants";

export class ChuckNorrisService {
  private url = CHUCK_NORRIS_URL;
  constructor() {}

  async getJoke(): Promise<string> {
    const result = await fetch(this.url);
    const joke = await result.json();
    return joke.value;
  }
}
