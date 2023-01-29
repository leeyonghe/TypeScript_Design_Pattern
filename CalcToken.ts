class CalcToken{

    public static FUNCTION : number = 1;
    public static NUMBER : number = 2;
    public static DELIM : number = 3;
    public static VARIABLE : number = 4;

    private _type: number;
    private _token: string;

    constructor(type : number, token : string){
        this._type = type;
        this._token = token;
    }

    public get type(): number {
        return this._type;
    }
    public set type(value: number) {
        this._type = value;
    }
    public get token(): string {
        return this._token;
    }
    public set token(value: string) {
        this._token = value;
    }

    getTypeDescription(type : number) : string{
        switch (type) {
            case CalcToken.FUNCTION:
            return "FUNCTION";
            case CalcToken.NUMBER:
            return "NUMBER";
            case CalcToken.DELIM:
            return "DELIM";
            case CalcToken.VARIABLE:
            return "VARIABLE";
        }
    }

    toString(){
        return this.getTypeDescription(this._type)+ " " +this._token
    }

}
export default CalcToken;