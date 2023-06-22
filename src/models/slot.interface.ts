import Item from "./item.interface.js";

export interface Slot{
    item: Item,
    count: number,
}

export interface AvailableSlot {
    emptyIndex: number[];
    availableIndex: number[];
}