export type Payload = {
  Temperatura_1: number;
  Temperatura_2: number;
  Temperatura_3: number;
  Peso_1: number;
  Peso_2: number;
  Peso_3: number;
  Humedad: number;
  Nivel: number;
  Presion: number;
};

export function updatePowerBI(payload: Payload) {
  return fetch(
    "https://api.powerbi.com/beta/cc28633f-12b8-46cb-bc15-951dae239b4d/datasets/6687c710-7a27-474f-8f8f-4aff1ed6cb15/rows?experience=power-bi&key=qkC%2FA0iJKJZT%2FBDaYWXxabUKd22KW9HYG%2BCUo2J8JGcGAFTiRvMSQvd%2BqRYY5ePWdSGjaQBtXsq5RgBgV0sUNQ%3D%3D",
    {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    }
  )
    .then((_) => console.log("UPDATE: PowerBI updated"))
    .catch(console.error);
}
