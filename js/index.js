function head(){
	var oHead1 = document.getElementById('head1')
	var oHead1_1 = document.getElementById('head1-1')
	var oTxt = document.getElementById('txt1')
    var oProvince = document.getElementById('province')
    var oAa = oProvince.children;
    var oCc = document.getElementById('cc')
    
	oHead1.onmouseover = function(){
		oCc.style.background = 'url(images/fold.png) no-repeat right center';
        oHead1_1.style.display = 'block'    
	}
    for(var i = 0 ; i < oAa.length ; i++){
            oAa[i].index = i
            oAa[i].onclick = function(){
                  //alert(1)
                 oTxt.value = this.innerHTML;
                 for(j = 0 ; j < oAa.length ; j++){
                    oAa[j].className = ''
                 }
                   oAa[this.index].className = 'active'
                  
            }
        }
	oHead1.onmouseout = function(){
		oCc.style.background = 'url(images/unfold.png) no-repeat right center'
		oHead1_1.style.display = 'none'
	}

     var oLi1 = document.getElementById('li1')
    var oHead2_1 = document.getElementById('head2-1-1')

    oHead2_1.onmouseover = oLi1.onmouseover = function(){
        oHead2_1.style.display = 'block'
    }
    oHead2_1.onmouseout = oLi1.onmouseout = function(){
        oHead2_1.style.display = 'none'
    }
    var oLi2 = document.getElementById('li2');
    var oLi2_1 = document.getElementById('li2-1')
    oLi2.onmouseover = oLi2_1.onmouseover = function(){
        oLi2_1.style.display = 'block'
    }
    oLi2.onmouseout = oLi2_1.onmouseout = function(){
        oLi2_1.style.display = 'none'
    }
    var oLi3 = document.getElementById('li3');
    var oLi3_1 = document.getElementById('li3-1')
    oLi3.onmouseover = oLi3_1.onmouseover = function(){
        oLi3_1.style.display = 'block'
    }
    oLi3.onmouseout = oLi3_1.onmouseout = function(){
        oLi3_1.style.display = 'none'
    }
    var oLi4 = document.getElementById('li4');
    var oLi4_1 = document.getElementById('li4-1')
    oLi4.onmouseover = oLi4_1.onmouseover = function(){
        oLi4_1.style.display = 'block'
    }
    oLi4.onmouseout = oLi4_1.onmouseout = function(){
        oLi4_1.style.display = 'none'
    }
     var oLi5 = document.getElementById('li5');
    var oLi5_1 = document.getElementById('li5-1')
    oLi5.onmouseover = oLi5_1.onmouseover = function(){
        oLi5_1.style.display = 'block'
    }
    oLi5.onmouseout = oLi5_1.onmouseout = function(){
        oLi5_1.style.display = 'none'
    }
	}
  
/*  ---------------------------head voer------------------------------*/  

   function headbanner(){

    var oBtn = document.getElementById('btn');
    var oHeadbanner = document.getElementById('headbanner');

    oBtn.onclick = function(){
        //alert(1)
       oBtn.style.display = 'none'
        move(oHeadbanner,'height',0)

    }

   }

/*  ---------------------------headbanner voer------------------------------*/  

   function logo1(){
        var oLogo = document.getElementById('logo1');
        var oNogoods = document.getElementById('nogoods');
        oNogoods.onmouseover = oLogo.onmouseover = function(){
            //alert(1)
            oNogoods.style.display = 'block'
        }
        oLogo.onmouseout = oNogoods.onmouseout = function(){
            oNogoods.style.display = 'none'
        }

    }

    /*  ---------------------------logo voer------------------------------*/  


function banner11(){
        var oUl = document.getElementById('banner_photo');
        var oLi = oUl.children[0];
        var cOli = oLi.cloneNode(true);
        oUl.appendChild(cOli);
        oUl.style.width = oUl.offsetWidth+oLi.offsetWidth + 'px'
        var aBtn = document.getElementById('btn2').children;
       // alert(aBtn)
        for(var i = 0 ; i < aBtn.length; i++){
            aBtn[i].index = i;
               //var timer = null;
            aBtn[i].onmouseover = function(){
                //alert(1)
                //clearInterval(timer);
                move(oUl,'left',-oLi.offsetWidth*this.index);
                for(var j = 0 ; j < aBtn.length; j++){
                    aBtn[j].className = ''
                }
                aBtn[this.index].className = 'active1';
            }
            
        }
        var timer = null;
        clearInterval(timer);
        var index = 0;
        var aLi = oUl.children;
      

        var oLeft_arrows = document.getElementById('left-arrows')
        var oRight_arrows = document.getElementById('right-arrows')
        var now = 0;

        oRight_arrows.onclick = function(){
            //alert(1)
                  if(now == aBtn.length-1){
                    now=0
                  }else{
                    now++
                  }
             for(var i = 0 ; i < aBtn.length; i++){
            aBtn[i].index = i;
             
                move(oUl,'left',-oLi.offsetWidth*this.index);
                for(var j = 0 ; j < aBtn.length; j++){
                    aBtn[j].className = ''
                }
                aBtn[now].className = 'active1';

            if(index == aLi.length - 1){
                oUl.style.left = 0;
                index = 1;
            }else{
                index++
            }
             for(var i = 0 ; i < aBtn.length; i ++){
                aBtn[i].className = ''
            }
            if(index != aLi.length-1){
                aBtn[index].className = 'active1'
            }else{
                aBtn[0].className = 'active1';
            }
            move(oUl,'left',-oLi.offsetWidth*index)
            
        }


        }
          timer = setInterval(oRight_arrows.onclick,3000)

          oLeft_arrows.onclick = function(){

            //alert(1)

            if(now == 0){
                now = aBtn.length-1
            }else{
                now--;
            }
              
            for(var i = 0 ; i < aBtn.length; i++){
            aBtn[i].index = i;
             
                move(oUl,'left',oLi.offsetWidth*this.index);
                for(var j = 0 ; j < aBtn.length; j++){
                    aBtn[j].className = ''
                }
                aBtn[now].className = 'active1';

            if(index == 0){
                oUl.style.left = -730*6+'px';
                index = aLi.length-2;
            }else{
                index--
            }
             for(var i = 0 ; i < aBtn.length; i ++){
                aBtn[i].className = ''
            }
            if(index != aLi.length-1){
                aBtn[index].className = 'active1'
            }else{
                aBtn[0].className = 'active1';
            }
            move(oUl,'left',-oLi.offsetWidth*index)
            
        }
          }

          var oCleat = document.getElementById('banner_photo_1')

          oCleat.onmouseover = function(){

            clearInterval(timer)
          }

          oCleat.onmouseout = function(){
            clearInterval(timer)
            timer = setInterval(oRight_arrows.onclick,3000)
          }

          var oLeft_btn = document.getElementById('left_btn')
          var oRight_btn = document.getElementById('right_btn')
          var oRecommed_brand_1 = document.getElementById('recommed_brand_1')
          var oBigli = oRecommed_brand_1.children[0];
          var oKl = oBigli.cloneNode(true);
          oRecommed_brand_1.appendChild(oKl)
          oRecommed_brand_1.style.width = oRecommed_brand_1.offsetWidth + oBigli.offsetWidth + 'px';
          var aBigli = oRecommed_brand_1.children;
          console.log(oBigli)
          var num1 = 0 ;
          oRight_btn.onclick = function(){
          
            if(num1 == aBigli.length-1){
              
                num1 = 1;
            }else{
                num1++;
            }
           
           move(oRecommed_brand_1,'left',-1005*num1)

            }

            var num2 = 0
            oLeft_btn.onclick = function(){

            //oRecommed_brand_1.style.left = -1005*4 + 'px'

            if(num2 <= 0){
                oRecommed_brand_1.style.left = -1005*4 + 'px';
                num2 = aBigli.length-2;
            }else{
                num2--;
            }     
             console.log(num1)
           move(oRecommed_brand_1,'left',-1005*num2)

            }

}