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

        document.getElementById("Test2").innerHTML = `Array length: ${problems.length - 1}. Array:${problems}`;
}

const question1 = () => {
    document.getElementById("question").innerHTML=`<img src="d1.jpg"> <br> <h3>Who is on the Right  <br> <button>Abigail</button> <button>Adriyel</button> </h3> <h3> Who is on the Left <br> <button>Abgail</button> <button>Adriyel</button> </h3> `;
}