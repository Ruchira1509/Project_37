class Security {

    constructor(){

        
        this.access2 = createInput("Enter the correct option")
        this.access2.position(50,290);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(50, 350);
        this.button2.style('background', 'lightgrey');


        
    }

    display(){

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                console.log(win)
            }
        });
        

    }
}