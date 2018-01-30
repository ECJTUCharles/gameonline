var leftnum = document.getElementById("leftnum");
var right = document.getElementById("rightnum");
var word = document.getElementById("word");
var i = 0;
var j = 0;
var se = null,time=20,you=0,arr=new Array('<img src="./images/p1.png" alt="">','<img src="./images/p2.png" alt="">','<img src="./images/p3.png" alt="">');
            function p(n){
                you = n;
                // document.getElementById('you').innerHTML=s(n);
                document.getElementById('st').disabled=true;
                document.getElementById('bu').disabled=true;
                document.getElementById('jd').disabled=true;
                document.getElementById('center').style.display ="block";
            }
            function agin(){
                document.getElementById('st').disabled=false;
                document.getElementById('jd').disabled=false;
                document.getElementById('bu').disabled=false;
                se = setTimeout(() => {
                    t();
                    clearTimeout();
                }, 2000);
                document.getElementById('center').style.display = 'block';  
                document.getElementById('you').innerHTML = '';      
                document.getElementById('pc').innerHTML = '';
                i += 1;
                leftnum.innerHTML=i;
            }
            clearTimeout();
            function bt(){
                var pc = Math.floor(Math.random() * 3 + 1);
                document.getElementById('pc').innerHTML = arr[pc];
                // var str='';
                if(pc==you){
                    // str += '平局';
                    console.log("平局");
                    word.innerHTML = "平局";
                }else{
                    var b = pc-you;
                    if(b>0){
                        if(b==1){
                            // str += '电脑赢';
                            i += 1;
                            leftnum.innerHTML=i;
                            console.log("你输了");
                            word.innerHTML = "你输了";   
                        }else{
                            // str += '你赢啦';
                            console.log("你赢了");
                            word.innerHTML = "你赢了";  
                        }               
                    }else{
                        b = b*-1;   
                        if(b==1){
                            // str += '你赢啦';
                            console.log("你赢了");
                            word.innerHTML = "你赢了";   
                        }else{
                            // str += '电脑赢'; 
                            console.log("你输了");
                            word.innerHTML = "你输了";  
                        }   
                    }       
                }
            }
            function t(){
                document.getElementById('center').style.display = 'none';
                se = null;
            }
            // 点击按钮的十时候调用函数，显示中间的gif动图
            document.getElementById("agin").addEventListener("click",function(){
                    agin();
                    word.innerHTML = "猜拳中...";
                },false);