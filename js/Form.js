class Form {
  constructor(){
  this.input=createInput("Enter your name")
    this.playButton=createButton("play")
    this.greeting=createElement("h2")

   
  }
  hide(){
    this.input.hide();
    this.playButton.hide();
    this.greeting.hide();

  }
  display(){
    var titleImg= createImg("assets/title.png")
    
    titleImg.position(80,50)
    this.input.position(width/2-100,height/2+200)
    this.playButton.position(width/2,height/2)
    this.greeting.position(width/2,height/2)

    this.playButton.mousePressed(()=>{
      this.input.hide()
      this.playButton.hide()
      
      var name=this.input.value()
      this.greeting.html("Hello" +name+"wait for players to join")
      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
      //player.addPlayer();
      player.updateCount(playerCount); // BP
      player.addPlayer();
      player.updateCount(playerCount);
      player.getDistance();
    })

  }
}
