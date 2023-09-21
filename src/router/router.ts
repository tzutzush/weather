export class Router {
  route(event: any) {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    this.handleLocation();
  }

  async handleLocation() {
    let path: string = window.location.pathname;
    const route: string = routes.get(path)!;
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main")!.innerHTML = html;
  }
}

const routes = new Map<string, string>([
  ["/air-quality", "/src/air-quality/air-quality.html"],
  ["/chuck-norris", "/src/chuck-norris/chuck-norris.html"],
]);
