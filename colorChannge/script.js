// Change the background color by clicking a button 
// step 1  create onload handler 

window.onload = () =>{
     main();
};


function main(){
    const root = document.getElementById('root')
    const btn = document.getElementById('change-btn')
    const output = document.getElementById('output')
    const copybtn = document.getElementById('copy-btn')

    btn.addEventListener('click', function() {
        const bgcolor = genaratergb();
        root.style.backgroundColor = bgcolor;

        output.value = bgcolor;
    });

    copybtn.addEventListener('click', function() {

        navigator.clipboard.writeText(output.value)
        
    });

}

// step 2 crete function 

function genaratergb(){
    const red = Math.floor(Math.random() *255);
    const green = Math.floor(Math.random() *255);
    const blue = Math.floor(Math.random() *255);


    return `#${red.toString(16)}${blue.toString(16)}${green.toString(16)}`
}


// step 3 collect all nessesary ref



//  step 4 event handel