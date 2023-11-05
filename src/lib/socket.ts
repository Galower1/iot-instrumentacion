import { modulesStore, type ModulesStoreState } from "./stores/modulesStore";

export function initWebSocket(HOST: string, PORT: number) {
  const websocket = new WebSocket(`ws://${HOST}:${PORT}/`);

  websocket.addEventListener("message", (event) => {
    const data = JSON.parse(event.data) as ModulesStoreState;
    modulesStore.set(data);
  });

  websocket.addEventListener("close", (event) => {
    console.log("Attempting to reconnect", event.reason);
    setTimeout(() => initWebSocket(HOST, PORT), 1000);
  });

  websocket.addEventListener("error", () => {
    websocket.close();
  });

  return websocket.close;
}
