class Box{
    constructor(y){
        var options={
            restitution:0.8,
            density:1.2,
            friction:1,
            isStatic:false
        }
        for(var i=400 ;i<800;i=i+40){
            this.body=Bodies.rectangle(i, y, 30, 30, options);
             this.width=30;
            this.height=30;
        }
     
        
        for(var i=400 ;i<800;i=i+40){
            this.body1=Bodies.rectangle(i, y+50, 30, 30, options);
            this.w1=30;
            this.h1=30;
        }

        for(var i=400 ;i<800;i=i+40){
            
            this.body2=Bodies.rectangle(i, y+100, 30, 30, options);
             this.w2=30;
             this.h2=30;
        }
        
        for(var i=400 ;i<800;i=i+40){
            this.body3=Bodies.rectangle(i, y+150, 30, 30, options);
            this.w3=30;
            this.h3=30;
        }

        for(var i=400 ;i<800;i=i+40){
            this.body4=Bodies.rectangle(i, y+200, 30, 30, options);
            this.w4=30;
            this.h4=30;
        }

        for(var i=400 ;i<800;i=i+40){
            this.body5=Bodies.rectangle(i, y+250, 30, 30, options);
             this.w5=30;
             this.h5=30;
        }
        
        for(var i=400 ;i<800;i=i+40){
            this.body6=Bodies.rectangle(i, y+300, 30, 30, options);
            this.w6=30;
            this.h6=30;
        }

        World.add(world, this.body);
        World.add(world, this.body1);
        World.add(world, this.body2);
        World.add(world, this.body3);
        World.add(world, this.body4);
        World.add(world, this.body5);
        World.add(world, this.body6);
    }
    display(){
        var pos= this.body.position
        rectMode(CENTER);

    for(var i=400;i<800;i=i+40 ){
        rect(i, pos.y, this.width, this.height);
    }3
    for(var i=400 ;i<800;i=i+40){
        rect(i, this.body1.position.y, this.w1, this.h1)
    }
    for(var i=400 ;i<800;i=i+40){
        rect(i, this.body2.position.y, this.w2, this.h2)
    }
    for(var i=400 ;i<800;i=i+40){
        rect(i, this.body3.position.y, this.w3, this.h3)
    }
    for(var i=400 ;i<800;i=i+40){
        rect(i, this.body4.position.y, this.w4, this.h4)
    }
    for(var i=400 ;i<800;i=i+40){
        rect(i, this.body5.position.y, this.w5, this.h5)
    }
    for(var i=400 ;i<800;i=i+40){
        rect(i, this.body6.position.y, this.w6, this.h6)
    }
}
}