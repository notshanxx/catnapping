import { writable } from "svelte/store";
import { browser } from "$app/environment";

// local storage store
let stored = [];
if (browser && JSON.parse(localStorage.getItem("cat-id-from-local-storage"))) {
  stored = JSON.parse(localStorage.getItem("cat-id-from-local-storage"));
}

export let storedCAtId = writable(stored);

// catground array
// the array of id fetched from the api
// for scrolling the catground pade

let fetchedLists = [];
let scrollingIndex = 0;

export let catArr = writable(fetchedLists);
export let currentIndex = writable(scrollingIndex);
