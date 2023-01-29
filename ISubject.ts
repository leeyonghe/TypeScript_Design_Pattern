import AbstractOperationObserver from "./AbstractOperationObserver";

interface ISubject{
    notifyObservers() : void;
    registerObservers(observer : AbstractOperationObserver): void;
    removeObservers(observer : AbstractOperationObserver): void;
}

export default ISubject;