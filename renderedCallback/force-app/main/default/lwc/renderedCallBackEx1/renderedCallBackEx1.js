import { LightningElement } from 'lwc';

export default class RenderedCallBackEx1 extends LightningElement 
{

    properties;
    renderedCallback() {
        this.properties = 'set by renderedCallback';
        console.log('properties ' + this.properties);
    }

    handleButtonClick() {
        this.properties = 'set by buttonClick';
    }

}