import FontInfo from "./FontInfo";
import TextstyleFlyweight from "./TextstyleFlyweight";

class TextstyleFlyweightFactory {

    private static _instance : TextstyleFlyweightFactory;

    private pool : Map<string, TextstyleFlyweight>;

    constructor(){
        if (TextstyleFlyweightFactory._instance) {
            return TextstyleFlyweightFactory._instance;
        }
        TextstyleFlyweightFactory._instance = this;
        this.pool = new Map();
    }
    
    static getInstance(){
        if (!TextstyleFlyweightFactory._instance) {
            TextstyleFlyweightFactory._instance = new TextstyleFlyweightFactory();
        }
        return TextstyleFlyweightFactory._instance;
    }

    getTextStyleFlyweight(name : string){
        return this.pool.get(name);
    }

    putTextStyleFlyweight(name : string, textStyleFlyweight : TextstyleFlyweight){
        this.pool.set(name, textStyleFlyweight);
    }

}

export default TextstyleFlyweightFactory;