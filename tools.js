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
        var freeHandDrawingButton = document.querySelector("#freehand_draw_button");
        freeHandDrawingButton.addEventListener("click", (event) =>{
            this.setFreehandDrawingMode();
            console.log("free hand drawing button clicked");
        });


        //Add event listener to free hand drawing button
        this.canvas = document.querySelector("#drawing_canvas");

        this.context = this.canvas.getContext("2d");
        //Get canvas and context to write on

        this.canvas.addEventListener("mousedown", (event) => {
            controls.mouseDown(event, this.canvas);

            window.addEventListener("mousemove", mouseMove);
            //listens mouse movement but only when mouse is pressed
        });
        //mouse pressed or held down
        function mouseMove(event){
            controls.mouseMove(event);
        }

    }

    changeCanvasSize(imageWidth, imageHeight){
        this.canvas.setAttribute("width", imageWidth);
        this.canvas.setAttribute("height", imageHeight);
        console.log(this.canvas.width, this.canvas.height);
        //Reszize canvas to match image size
    }

    startFreehandDrawing(x, y){
        let currentContext = this.context;

        currentContext.beginPath();
        //starting path for drawing
        currentContext.moveTo(x, y);
        //move to beginning mouse position
    }

    continueFreehandDrawing(x, y){
        let currentContext = this.context;

        currentContext.lineTo(x, y);
        //draw line to current mouse position
        currentContext.stroke();
        //draw line on canvas
        currentContext.beginPath();
        currentContext.moveTo(x, y);
        //bring path to line
    }
}