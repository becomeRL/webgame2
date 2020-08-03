var br31 = document.getElementById('br31');
br31.addEventListener('click', function(){
    var count1 = 0;
    var count2 = 0;

    var choice1 = 0;
    var choice2 = 0;

    var last = 0;
    var lastChoice = 0;
    var lastNum = 0;

    var name1 = prompt("당신의 이름은?");
    if(name1){
        alert("Hi "+ name1);
    }
    else{
        alert("bye");
        return;
    }
    var name2 = "컴퓨터";

    var dice = Math.random();

    var random = function(min, max){
    return Math.floor( (Math.random() * (max - min + 1)) + min );
    };

    var game = function(){
        for(var num = 0; num <= 31;){
        choice1 = Number(prompt("현재 수는 " + num + "입니다. 더하길 원하는 수를 입력해 주세요.\n(1, 2 ,3 중 하나만 입력하고 그 외에는 게임이 종료됩니다.)"));
            if(choice1){
                alert(choice1+ " 을 더합니다.");                
            }
            else{
                alert("취소되었습니다");
                return;
            }
            if(choice1 = isNaN ||choice1 > 3 || choice1 < 1){
                alert("반칙입니다");
                return;
            }
              
            
        num += choice1;
        document.getElementById("game1").innerHTML = "현재 수는 " + num + "입니다.";
        alert(name1 + "이/가 " + choice1 + "를 더하여 " + num + "이 되었습니다.");
            if(num >= 31){
                last = name1;
                lastChoice = choice1;
                lastNum = num;
                break;
            }

        if(num == 27){
            choice2 = 3;
            last = name2;
            lastChoice = choice2;
            lastNum = num;
        }
        else if(num == 28){
            choice2 = 2;
            last = name2;
            lastChoice = choice2;
            lastNum = num;
            
        }
        else if(num == 29){
            choice2 = 1;
            last = name2;
            lastChoice = choice2;
            lastNum = num;
            
        }
        else if (num <= 26){
            choice2 = random(1,3)
            last = name2;
            lastChoice = choice2;
            lastNum = num;
            
        }
        num += choice2;
        document.getElementById("game1").innerHTML = "현재 수는 " + num + "입니다.";
        alert(name2 + "가 " + choice2 + "를 더하여 " + num + "이 되었습니다.");
            if(num >= 31){
                last = name2;
                lastChoice = choice2;
                lastNum = num;
                break;
            }
    }
    };

    alert("베스킨~ 라빈스~! 써리~ 원!");
    game();

    if(last === name1){
        document.getElementById("game1").innerHTML = name1 + "이/가 " + lastChoice + "을 더하여 " + lastNum + "이 되었습니다. <br>" + name2 + " 승";
    } else if(choice1 = isNaN || choice1 > 3 || choice1 < 1){
        document.getElementById("game1").innerHTML = name1 + "이/가 반칙으로 처리되었습니다. <br>" + name2 + " 승";
    }else{
        document.getElementById("game1").innerHTML = name2 + "가 " + lastChoice + "을 더하여 " + lastNum + "이 되었습니다. <br>" + name1 + " 승";
    }
}
)
document.getElementById("game1").innerHTML = "";

