import { writable } from "svelte/store";

export interface ModulesStoreState {
  temperatures: number[];
  Weights: number[];
  Water_Level: number;
  Humidity: number;
  Pressure: number;
}

export const modulesStore = writable<ModulesStoreState>({
  temperatures: [],
  Weights: [],
  Water_Level: 0,
  Humidity: 0,
  Pressure: 0,
});
