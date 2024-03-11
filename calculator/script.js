let output="";
let btn= document.querySelectorAll(".btn");
Array.from(btn).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            output=eval(output);
            document.querySelector('input').value=output;
        }
        else if(e.target.innerHTML == 'C'){
            output="";
            document.querySelector('input').value=output;
        }
        else if(e.target.innerHTML == 'Del'){
            output= output.toString().slice(0, -1);
            document.querySelector('input').value=output;
        }
        else{
            console.log(e.target.innerHTML);
            output= output+e.target.innerHTML;
            document.querySelector('input').value=output;
        }
    })
})