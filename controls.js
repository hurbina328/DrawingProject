export default class Controls {
    constructor(){

    }
    init(model, tools){
        this.model= model;
        this.tools = tools;
    }

    openFile(){

        let imageInput = document.createElement("input");
        imageInput.setAttribute("type", "file");
        imageInput.setAttribute("accept", "image/jpeg, image/png");

        imageInput.addEventListener("change", (event) => {
            let imageFile =imageInput.files[0];

            const fileReader = new FileReader();
            fileReader.addEventListener("load", () => {
                
                let imageElement = document.createElement("img");
                
                imageElement.addEventListener("load", () => {
                    this.tools.changeCanvasSize(imageElement.width, imageElement.height);
                    //resize canvas
                    this.model.putImageOnCanvas(imageElement);
                    //place image on canvas
                });
                imageElement.src = fileReader.result;
                //Set the image source to the file reader result
            }); 
            if(imageFile){
                fileReader.readAsDataURL(imageFile);
            }
        });
        imageInput.click();
    }

    saveFile(){
        let linkElement = document.createElement("a");
        //create a link element
        linkElement.setAttribute("download", "editedCanvas.png");
        //set the download attribute to the desired file name

        document.body.appendChild(linkElement);
        //append the link element to the body
        linkElement.addEventListener("click", (event) =>{
            linkElement.href = (this.model.getImageLink());
            //set the href attribute to the image link created in Model JS

            document.body.removeChild(linkElement);
        });
        linkElement.click();
    }

    undoAction(){
        this.model.undoAction();
    }
}