export default class Model {

    constructor(){

    }
    init(controls, tools){
        this.controls = controls;
        this.tools = tools;

        this.canvas = document.querySelector("#drawing_canvas");
        this.context = this.canvas.getContext("2d");

        this.undo_index = 0;
        this.undo_list = [];
        //Array to hold version of image
    }

    putImageOnCanvas(imageElement){
        this.context.drawImage(imageElement, 0, 0);
        //draw image on canvas at top left corner

        this.undo_index++;
        //increment undo index

        this.undo_list[this.undo_index] = imageElement;
    }

    getImageLink(){
        return this.canvas.toDataURL("image/png");
        //Javascript function that converts canvas to url
    }

    undoAction(){
        if(this.undo_index > 1){
            this.undo_index--;
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            //clear canvas
            let imageToRedraw = this.undo_list[this.undo_index];
            this.tools.changeCanvasSize(imageToRedraw.width, imageToRedraw.height);
            //resize canvas to match image size
            this.context.drawImage(imageToRedraw, 0, 0);
            //draw image on canvas
        }
    }

    redoAction(){
        if(this.undo_index + 1 >= this.undo_list.length){
            return;
            //check if redo index is out of bounds
        }
        this.undo_index++;
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        //clear canvas
        let imageToRedraw = this.undo_list[this.undo_index];
        this.tools.changeCanvasSize(imageToRedraw.width, imageToRedraw.height);
        //resize canvas to match image size
        this.context.drawImage(imageToRedraw, 0, 0);
        //draw image on canvas
    }
}