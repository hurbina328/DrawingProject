export default class Tools {
    constructor(){

    }
    init(controls){
        this.controls = controls;

        var openButton = document.querySelector("#open_file_button")
        
        openButton.addEventListener("click", (event) =>{
            this.controls.openFile();
            
        });
        //Add event listener to open button
        var saveButton = document.querySelector("#save_file_button")
        saveButton.addEventListener("click", (event) =>{
            this.controls.saveFile();
            console.log("save button clicked");
        });
        //Add event listener to save button
        
        var undoButton = document.querySelector("#undo_button")
        undoButton.addEventListener("click", (event) =>{
            this.controls.undoAction();
            console.log("undo button clicked");
        });
        //Add event listener to undo button

        var redoButton = document.querySelector("#redo_button");
        redoButton.addEventListener("click", (event) =>{
            this.controls.redoAction();
            console.log("redo button clicked");
        });
        //Add event listener to redo button
        this.canvas = document.querySelector("#drawing_canvas");
    }

    changeCanvasSize(imageWidth, imageHeight){
        this.canvas.setAttribute("width", imageWidth);
        this.canvas.setAttribute("height", imageHeight);
        console.log(this.canvas.width, this.canvas.height);
        //Reszize canvas to match image size
    }
}