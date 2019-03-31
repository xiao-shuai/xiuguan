import { observable, action } from "mobx";
class HomeStore{
    @observable text;
    constructor(){
    this.text='wowoww777'
    }
}
const homeStore=new HomeStore()
export {homeStore}