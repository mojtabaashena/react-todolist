import React, { Component } from 'react';
import { observable, computed, action, decorate } from "mobx";



//class Store {

//    time = new Date()

//    startClock() {
//        this.setInterval = this.setInterval(() => 
//            this.time = new Date()
//                , 1000)
    
//        }
// }

//decorate(Store, {
//    time: observable
//});

//const store = new Store()
//export default store

class Store {

    @observable time = new Date();

    constructor() {
        this.interval = setInterval(() => { this.time = Date.now() }, 1000)
    }
   

    startClock() {
        this.interval = setInterval(() => { this.time = Date.now() },1000)
        
    }

    pauseClock() {
        clearInterval(this.interval)
    }
}
decorate(Store, {
    time: observable,
    startClock: action,
    pauseClock: action
});

const store = new Store()
export default store


//class Timer {
//    start = Date.now();
//    current = Date.now();

//    get elapsedTime() {
//        return this.current - this.start + "milliseconds";
//    }

//    tick() {
//        this.current = Date.now();
//    }
//}
//decorate(Timer, {
//    start: observable,
//    current: observable,
//    elapsedTime: computed,
//    tick: action
//});

//const timer = new Timer()
//export default timer