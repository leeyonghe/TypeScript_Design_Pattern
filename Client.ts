import FlyweightConstants from "./FlyweightConstants";
import TextstyleFlyweight from "./TextstyleFlyweight";
import TextstyleFlyweightFactory from "./TextstyleFlyweightFactory";

class Client{

    setupTextStyleFlyweightFactory(){
        
        let textStyleFlyweightFactory = TextstyleFlyweightFactory.getInstance();

        let name = FlyweightConstants.NUMBER_STYLE_NAME;

        let textStyle = new TextstyleFlyweight(FlyweightConstants.DEFAULT_NUMBER_FONT_INFO, "red");
        
        textStyleFlyweightFactory.putTextStyleFlyweight(name, textStyle)

        name = FlyweightConstants.ANSWER_STYLE_NAME;

        textStyle = new TextstyleFlyweight(FlyweightConstants.DEFAULT_ANSWER_FONT_INFO, "black");
        
        textStyleFlyweightFactory.putTextStyleFlyweight(name, textStyle);

    }

}

export default Client;