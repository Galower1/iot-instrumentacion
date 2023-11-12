export type LedsResponse = {
  pins: number[];
  states: string[];
};

export async function getLeds() {
  return fetch(`http://${window.location.hostname}/api/led`).then((response) =>
    response.json()
  ) as unknown as LedsResponse;
}

export function toggleLed(pin: number, state: "on" | "off") {
  return fetch(`http://${window.location.hostname}/api/led?action=${state}&index=${pin}`, {
    method: "POST",
  });
}
