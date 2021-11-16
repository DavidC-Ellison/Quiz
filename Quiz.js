function scorer()
{
    var score=0;
    var q01=document.quiz.q01.value;
    var q02=document.quiz.q02.value;
    var q03a=document.quiz.q03a.value;
    var q03c=document.quiz.q03c.value;
    var q04=document.quiz.q04.value;
    var q05=document.quiz.q05.value;
    
    if( q01=="B"){score++;}
    if( q02=="A"){score++;}
    if( q03a=="A" && q03c=="C"){score++;}
    if( q04=="A"){score++}
    if( q05=="C"){score++}
    
    var percent=(score/5)*100;
  
    document.getElementById('score').innerHTML="You Scored a " + parseInt(percent) + "%" ;
}