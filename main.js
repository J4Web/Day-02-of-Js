
function getData(){
    const date=new Date();
    const secHand=document.querySelector('.sec');
     const secs= date.getSeconds();
    const deg=((secs/60)*360)+90;
    // console.log(deg);
    secHand.style.transform=`rotate(${deg}deg)`;
    const getMin=document.querySelector('.min');
    const min=date.getMinutes();
    const minEqOfDeg=((min/60)*360)+90;
    getMin.style.transform=`rotate(${minEqOfDeg}deg)`
    const getHour=document.querySelector('.hour');
    const hour=date.getHours();
    const hourEqOfDeg=((hour/12)*360)+90;
    getHour.style.transform=`rotate(${hourEqOfDeg}deg)`
    // console.log(secHand);
}


//to run sth at every sec
setInterval(getData,1000);


