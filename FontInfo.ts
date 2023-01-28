class FontInfo{

    private _name: string;
    private _size: number;

    constructor(name : string, size : number){
        this._name = name;
        this._size = size;
    }


    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }


    public get size(): number {
        return this._size;
    }
    public set size(value: number) {
        this._size = value;
    }

}
export default FontInfo;