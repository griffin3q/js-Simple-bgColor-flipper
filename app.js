
// html color roller
function roulette(){
    let luck = 0;
    let fullColor = '#';
    let luckStr,luckNum; 
    for(let i=1;i<=6;i++){
        luckNum=Math.floor(Math.random() * 10);
        //console.log("Drop number: "+i+" Result: "+luckNum);       //loop is hardly set up six-digit numbers       TODO:
        luckStr=luckNum?.toString() || '';                          //                                          + make it more randomizable
        //console.log("testNum="+luckNum)
        //console.log("testStr="+luckStr)
        fullColor = fullColor + luckStr;
    }
    
    return fullColor;
}

function DoTheThink(){
    let choose = roulette();
    console.log("Finnal Color results: "+choose);
    
    //adding changes
    bg = document.getElementById("body").style.backgroundColor = choose;
    
}

DoTheThink();
