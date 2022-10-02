document.getElementById("subb").addEventListener("click", add);

//function showMessage(message) {
//    document.querySelector('#message').textContent = message;
//}


function add() {
    let arr = Array();
    for(let x of document.querySelectorAll(".nums")){
        arr.push(parseInt(x.value));
    }

    sum = arr.reduce((a, b) => a + b, 0);
    avg = sum / arr.length;
    max = Math.max(...arr);
    min = Math.min(...arr);

    //document.querySelector("#sum").innerHTML = "Sum "
    console.log(`Suma: ${sum}`);
    console.log(`Avg: ${avg}`);
    console.log(`Max: ${max}`);
    console.log(`Min: ${min}`);
    //showMessage("Sum");
}


