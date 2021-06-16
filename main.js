NoseX=0;
NoseY=0;

function preload(){
 Cimage=loadImage("https://i.postimg.cc/gJQbrFXf/kisspng-nose-clip-art-clown-reindeer-product-design-reindeer-noses-cliparts-6-512-x-512-carwad-net-5.jpg") 
}

function setup(){
canvas=createCanvas(300, 300);
canvas.center();
video=createCapture(VIDEO);
video.size(400,400)
video.hide();

posenet=ml5.poseNet(video,model_loaded);
posenet.on('pose', get_pose);

}

function get_pose(results){
if(results.length>0){
    console.log(results);
    console.log("nosex="+results[0].pose.nose.x);
    console.log("nosey="+results[0].pose.nose.y);
    NoseX= results[0].pose.nose.x;
    NoseY= results[0].pose.nose.y;
}
}
function model_loaded(){
 console.log("Posenet is loaded!") 

}

function draw(){
image(video, 0, 0, 300,300);
//fill("red");
// stroke("black");
 //circle(NoseX, NoseY, 20);

 image(Cimage, NoseX, NoseY, 30, 30);
}

function take_sanpshot(){
 save("Clown_nose.png" );
}