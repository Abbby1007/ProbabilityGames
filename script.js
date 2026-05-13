let array = [8];
const Test = () =>{
    let test = 0;
    let num;
    num = Math.floor(Math.random() * 6)+1;
    document.getElementById("Test").innerHTML = `${num}`;
 let what = array.length;
    document.getElementById("Test2").innerHTML = `Array length: ${what - 1}. Array:${array}`;
    for(let i = 0; i< array.length; i++){
        if(array[i] === num){
            test = 1;
        }
    }
            if(test != 1){
            array.push(num);
        }

}

let problems = [15];
const questions = () =>{
    let test = 0;
    const photos = ["d1.jpg","d2.jpg","d3.jpg"];
    let index = Math.floor(Math.random() * 3);
    document.getElementById("image").innerHTML = `Number: ${index} <br> <img src="${photos[index]}">`;
        document.getElementById("Test2").innerHTML = `Array length: ${problems.length - 1}. Array:${problems}`;
        for(let i = 0; i< problems.length; i++){
        if(problems[i] === index){
            test = 1;
        }
    }
            if(test != 1){
            problems.push(num);
        }
// Determine if the user is correct
    let points = 0;
if(document.querySelector("rAbigail").checked){
    points += 1;
}
if(document.querySelector("rAdriyel").checked){
    points += 2;
}
if(document.querySelector("lAbigail").checked){
    points += 3;
}
if(document.querySelector("lAdriyel").checked){
    points += 4;
}

if(points === 5){
document.getElementById("Test2").innerHTML = `IS CORRECT`;
}
else{
document.getElementById("Test2").innerHTML = `IS Wrong`;
}
        document.getElementById("Test2").innerHTML = `Array length: ${problems.length - 1}. Array:${problems}`;
}

const checkQuestion = (num) =>{
    // Determine if the user is correct
    let points = 0;
if(document.getElementById("rAbigail").checked){
    points += 1;
}
if(document.getElementById("rAdriyel").checked){
    points += 2;
}
if(document.getElementById("lAbigail").checked){
    points += 3;
}
if(document.getElementById("lAdriyel").checked){
    points += 4;
}
// check if it is question 1
if(num === 1){
    if(points === 5){
        document.getElementById("Test2").innerHTML = `IS CORRECT`;
    }
    else if(points === 1){
        document.getElementById("Test2").innerHTML = `ONE`;
    }
    else{
        document.getElementById("Test2").innerHTML = `Is Wrong`;
    }
}


}
// document.getElementById("Test2").innerHTML = `Array length: ${problems.length - 1}. Array:${problems}`;


const question1 = () => {
    document.getElementById("question").innerHTML=`<img src="d1.jpg"> <br> 
    <p> Who is on the Right</p>
    <form>
        
        <!-- Right Abigail equals 1 point -->
        <input type="checkbox" id="rAbigail" name="rAbigail" value="rAbigail">
        <label for="rAbigail">Abigail</label> 

        <!-- CORRECT -->
         <!-- Right Adriyel equals 2 points -->
        <input type="checkbox" id="rAdriyel" name="rAdriyel" value="rAdriyel">
        <label for="rAdriyel">Adriyel</label>
    </form>
<!-- 5 is the correct total -->
    <p> Who is on the Left</p>
    <form>
        <!-- CORRECT -->
        <!-- Left Abigail equals 3 points -->
        <input type="checkbox" id="lAbigail" name="lAbigail" value="lAbigail">
        <label for="lAbigail">Abigail</label> 
        <!-- left Adriyel equals 4 points -->
        <input type="checkbox" id="lAdriyel" name="lAdriyel" value="lAdriyel">
        <label for="lAdriyel">Adriyel</label>
    </form>
<br>
    <button onclick="checkQuestion(1)">Submit</button>`;
}
