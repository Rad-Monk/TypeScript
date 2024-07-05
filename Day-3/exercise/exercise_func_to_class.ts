class BuildArray{
    private _items: number
    private _sortOrder: "asc" | "desc"

    constructor(items: number, sort_order: "asc" | "desc"){
        this._items = items
        this._sortOrder = sort_order
    }

    get items(){
        return this._items
    }

    get sort_order(){
        return this._sortOrder
    }

    set items(items){
        this._items = items
    }

    set sort_order(sort_order){
        this._sortOrder = sort_order
    }

    private sortDescending = (a: number, b: number) => {
        if (a > b) {
            return -1;
        }
        if (b > a) {
            return 1;
        }
        return 0;
    }

    private sortAscending = (a: number, b: number) => {
        if (a > b) {
            return 1;
        }
        if (b > a) {
            return -1;
        }
        return 0;
    }

    buildArray(): number[] {
        let randomNumbers: number[] = [];
        let nextNumber: number;
        for (let counter = 0; counter < this.items; counter++) {
            nextNumber = Math.ceil(Math.random() * (100 - 1));
            if (randomNumbers.indexOf(nextNumber) === -1) {
                randomNumbers.push(nextNumber);
            } else {
                counter--;
            }
        }
        if (this._sortOrder === 'asc') {
            return randomNumbers.sort(this.sortAscending);
        } else {
            return randomNumbers.sort(this.sortDescending);
        } 
    }
}

let testArray1 = new BuildArray(12, 'asc');
let testArray2 = new BuildArray(8, 'desc');

console.log(testArray1.buildArray());
console.log(testArray2.buildArray());
