import { illusts } from "./illustes";
import { photos } from "./photos";
import { icons } from "./icons";

export const allItems = {
    illusts,
    photos,
    icons,
} as const;

export type ItemType = keyof typeof allItems;