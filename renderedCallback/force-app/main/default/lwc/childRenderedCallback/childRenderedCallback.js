import { LightningElement } from 'lwc';

export default class ChildRenderedCallback extends LightningElement {
    renderedCallback(){
        console.log('Yes I am in child component');
      }
    
}