const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(1500, 800);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,600,1200,20);
  hero = new Hero(200,200,180);
  monster = new Monster(1100,200,180);

  chain = new Chain(hero.body,{x:450,y:100});

  box1 = new Block(900, 100, 70, 70);
  box2 = new Block(900, 100, 70, 70);
  box3 = new Block(900, 100, 70, 70);
  box4 = new Block(900, 100, 70, 70);
  box5 = new Block(900, 100, 70, 70);
  box6 = new Block(900, 100, 70, 70);
  box7 = new Block(800, 100, 70, 70);
  box8 = new Block(800, 100, 70, 70);
  box9 = new Block(800, 100, 70, 70);
  box10 = new Block(800, 100, 70, 70);
  box11 = new Block(800, 100, 70, 70);
  box12 = new Block(800, 100, 70, 70);
  box13 = new Block(700, 100, 70, 70);
  box14 = new Block(700, 100, 70, 70);
  box15 = new Block(700, 100, 70, 70);
  box16 = new Block(700, 100, 70, 70);
  box17 = new Block(700, 100, 70, 70);
  box18 = new Block(700, 100, 70, 70);
  box19 = new Block(700, 100, 70, 70);
  box20 = new Block(700, 100, 70, 70);
}

function draw() {
  background(255);
  
  Engine.update(engine);

  ground.display();
  chain.display();
  

  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  hero.display();
  monster.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX , y:mouseY});
}