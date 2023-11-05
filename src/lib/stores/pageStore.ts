import { writable } from "svelte/store";

export type PageStoreState = "HOME" | "GRAPHS" | "VARIABLES" | "CONTROL";

export const pageStore = writable<PageStoreState>("HOME");
