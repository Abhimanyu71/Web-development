const counters=document.querySelectorAll('.counter');
const speed=200;

counters.forEach(counter => {

    const updateCount= () =>
    {
const target= +counter.getAttribute('data-target'); // Getting target value from html element

const cont= +counter.innerText; //Getting default values from html element
console.log("count"+cont);
const inc= target / speed;
    

    if(cont < target)
    {
    counter.innerText=Math.ceil(cont+inc);
    setTimeout(updateCount,1);
    }
    else{
        cont.innerText = target;
    }
}
updateCount();
});