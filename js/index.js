var leftnum = document.getElementById("leftnum");
var right = document.getElementById("rightnum");
var word = document.getElementById("word");
var i = 0;
var j = 0;
var se = null,time=20,you=0,arr=new Array('p1.png','p2.png','p3.png');
            function p(n){
                you = n;
                document.getElementById('you').innerHTML=s(n);
                document.getElementById('st').disabled=true;
                document.getElementById('bu').disabled=true;
                document.getElementById('jd').disabled=true;
                document.getElementById('center').style.display ="block";
                se = setInterval('t()',50);
                
            }
            function agin(){
                document.getElementById('st').disabled=false;
                document.getElementById('jd').disabled=false;
                document.getElementById('bu').disabled=false;       
                document.getElementById('center').style.display = 'none';
                document.getElementById('you').innerHTML = '';      
                document.getElementById('pc').innerHTML = '';
                // document.getElementById('cu').innerHTML = '';
                // document.getElementById('you').innerHTML= '请选择'; 
                se = setInterval('t()',50); 
                i += 1;
                leftnum.innerHTML=i;      
            }
            function bt(){
                var pc = Math.floor(Math.random() * 3 + 1);
                document.getElementById('pc').innerHTML = s(pc);
                var str='';
                if(pc==you){
                    // str += '平局';
                    console.log("平局");
                    word.innerHTML = "平局";
                }else{
                    var b = pc-you;
                    if(b>0){
                        if(b==1){
                            str += '电脑赢';
                            i += 1;
                            leftnum.innerHTML=i;   
                        }else{
                            str += '你赢啦';   
                        }               
                    }else{
                        b = b*-1;   
                        if(b==1){
                            str += '你赢啦';   
                        }else{
                            str += '电脑赢';   
                        }   
                    }       
                }
            }
            function t(){
                var score=[];
                score.append = i;
                alert(score);
            }
            // document.getElementById('la').style.display = 'block';
            // document.getElementById('cu').innerHTML = str;