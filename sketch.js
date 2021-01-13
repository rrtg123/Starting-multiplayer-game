var ball;
var database,position;

function setup(){
    createCanvas(500,500); 

    database=firebase.database();
    //loc node is containing the reference to ball /positions in firebase
    var locnode=database.ref("ball/positions");
    locnode.on("value",readop,showerror);
    //on is actually a listener which is actually listening to the values of database
    ball = createSprite(250,250,10,10); 
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writepos(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writepos(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writepos(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writepos(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
//sdk=software development kit
function readop(data){
    position=data.val()
    ball.x=position.x
    ball.y=position.y
}

function showerror(){
    console.log("error")
}
function writepos(x,y){
database.ref("ball/positions").set({
x:ball.x+x,
y:ball.y+y
})

}