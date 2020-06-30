import { ModelFactory, MODEL_PATHS } from "pk-client";

let base_url = "https://<your-api-server></your-api-server>.com";
let mf = new ModelFactory({ api_base_url: base_url, token: "" });

function getMFObject() {
  return new ModelFactory({
    api_base_url: this.base_url,
    token: this.authService.getAccessToken(),
  });
}

export async function get(path, url = "", params = {}) {
  return await mf.anyModel(path).get(url, params);
}
