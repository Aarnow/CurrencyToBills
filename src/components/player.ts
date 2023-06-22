import Item from "../models/item.interface.js";
import {Slot, AvailableSlot} from "../models/slot.interface.js";

class Player {
    private inventory: Slot[];

    constructor(){
        this.inventory = new Array<Slot>(16);
    } 

    getAvailableSlots(item: Item): AvailableSlot{
        const emptyIndex : number[] = [];
        const availableIndex : number[] = [];
        
        for(let i = 0; i < this.inventory.length; i++){
            if(this.inventory[i] === undefined)
            emptyIndex.push(i);
            else if (this.inventory[i]?.item.id === item.id && this.inventory[i]?.count < item.maxStack)
            availableIndex.push(i)
        }

        return {
            emptyIndex: emptyIndex,
            availableIndex: availableIndex
        }
    }

    addItem(item: Item, count: number, availableSlot : AvailableSlot): void{
        this.inventory[availableSlot.emptyIndex.slice(0, 1)[0]].item = item

    }

    currencyToBills(): void {
        //let slots = this.getAvailableSlots(item);

    }
}

export default Player;