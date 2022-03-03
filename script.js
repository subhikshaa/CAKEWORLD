/*Fill your code */

var total=0;

//button chocolate
function render1 () {
    var l1 = document.getElementById("layer1");
    if(l1.style.visibility=='hidden'){
        l1.style.visibility='visible';
        l1.style.height='25px'
        

        document.getElementById("item1").textContent= 'Chocolates-------300';
        total= total+300;
            
    }
    else{
        l1.style.visibility= 'hidden';
        l1.style.height='0px';

        document.getElementById("item1").textContent= '';
        
        
    }
}

//button strawberry
function render2 () {
    var l2 = document.getElementById("layer2");
    if(l2.style.visibility=='hidden'){
        l2.style.visibility='visible';
        l2.style.height= '25px';
        

        document.getElementById("item2").textContent= 'Strawberry------100';
        total= total+100;
       
    }
    else{
        l2.style.visibility= 'hidden';
        l2.style.height= '0px'

        document.getElementById("item2").textContent= '';
    }
}

//button butterscotch
function render3 () {
    var l3 = document.getElementById("layer3");
    if(l3.style.visibility=='hidden'){
        l3.style.visibility='visible';
        l3.style.height= '25px';
        

        document.getElementById("item3").textContent= 'ButterScotch-----200';
        total= total+200;
    }
    else{
        l3.style.visibility= 'hidden';
        l3.style.height= '0px';
    
        document.getElementById("item3").textContent= '';
    }
}

//button vennila
function render4 () {
    var l4 = document.getElementById("layer4");
    if(l4.style.visibility=='hidden'){
        l4.style.visibility='visible';
        l4.style.height='25px'
        

        document.getElementById("item4").textContent= 'Vennila------250';
        total= total+250;
    }
    else {
        l4.style.visibility= 'hidden';
        l4.style.height='0px';

        document.getElementById("item4").textContent= '';
    }
}

//button vennila
function render5 () {
    var l5 = document.getElementById("layer5");
    if(l5.style.visibility=='hidden'){
        l5.style.visibility='visible';
        l5.style.height= '25px';
        

        document.getElementById("item5").textContent= 'Redvelvet-----350';
        total= total+350;
    }
    else{
        l5.style.visibility= 'hidden';
        l5.style.height= '0px';

        document.getElementById("item5").textContent= '';
    }
}

//button buy

function calculate () {
   var cand = document.getElementById("image");
   if(cand.style.visibility == 'hidden'){
       cand.style.visibility = 'visible';

       document.getElementById("total").textContent= 'TOTAL-----'+total;
   } else{
    cand.style.visibility = 'hidden';
   }
}