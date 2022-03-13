        var direction="";
        var xAxis=0;
        var yAxis=0;
        var size=5;
        var xApple=0,yApple=0;
        var snake=[];
        var speed=0;
        window.onload = function() {
            canv = document.getElementById('gc');
            ctx = canv.getContext('2d');
            start();
            document.addEventListener('keydown', keyPush);
            setInterval(game,speed);
        }
        
        function keyPush(evt) {
            switch(evt.keyCode){
                case 37:
                    if (direction == "right")
                        break;
                    direction="left";
                    break;
                case 38:
                if (direction == "down")
                        break;
                    direction="top";
                    break;
                case 39:
                if (direction == "left")
                        break;
                    direction="right";
                    break;
                case 40:
                if (direction == "top")
                        break;
                    direction="down";
                    break;
            }
            
        }

        
        function start(){
            size=5;
            xAxis=55;
            yAxis=55;
            direction="";
            speed=70;
            for(var i=0;i<size;i++){
                snake[i]={x:xAxis+(i*11),y:yAxis};
            }
            xApple=Math.floor(Math.random()*(canv.width/11));
            yApple=Math.floor(Math.random()*(canv.height/11));
        }

        function game() {
            ctx.fillStyle="gray";
            ctx.fillRect(0,0,canv.width,canv.height);

            switch(direction){
                case "left":
                    snake.unshift({x:snake[0].x-11,y:snake[0].y});
                    break;
                case "right":
                    snake.unshift({x:snake[0].x+11,y:snake[0].y});
                    break;
                case "top":
                    snake.unshift({x:snake[0].x,y:snake[0].y-11});
                    break;
                case "down":
                    snake.unshift({x:snake[0].x,y:snake[0].y+11});
                    break;
            }
            ctx.fillStyle="white";
            for(var i=0;i<size;i++){
                ctx.fillRect(snake[i].x,snake[i].y,10,10);
            }

            ctx.fillStyle="red";
            ctx.fillRect(xApple*11,yApple*11,10,10);
            if(snake[0].x == (xApple*11) && snake[0].y == (yApple*11) ){
               xApple=Math.floor(Math.random()*(canv.width/11));
               yApple=Math.floor(Math.random()*(canv.height/11));
               size++;
            }
            else{
                snake.pop();
            }

            if(snake[0].x >= canv.width || snake[0].x <= 0 || snake[0].y >= canv.height || snake[0].y <= 0){
                start();
            }

            for(var i=1;i<size;i++){
                if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
                    start();
                }
            }

            if(size > 8){
                speed-=5;
            }
            else if(size>10){
                speed-=10;
            }
            else if(size>12){
                speed-=10;
            }         
        }