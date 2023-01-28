import FontInfo from "./FontInfo";

class TextstyleFlyweight {

    private _fontInfo : FontInfo;
    private _color : string;

    constructor(fontInfo : FontInfo, color : string){
        this._fontInfo = fontInfo;
        this._color = color;
    }

    get color(){
        return this._color;
    }

    set color(color : string){
        this._color = color;
    }

    get fontInfo(){
        return this._fontInfo;
    }

    set fontInfo(fontInfo : FontInfo){
        this._fontInfo = fontInfo;
    }


}

export default TextstyleFlyweight;