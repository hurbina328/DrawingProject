import Model from "./model.js"
import Tools from "./tools.js"
import Controls from "./controls.js"

export default class App {
    
    constructor(){
        
        let model = new Model();

        let tools = new Tools();

        let controls = new Controls();

        model.init(controls, tools);

        tools.init(controls);

        controls.init(model, tools);
    }
}