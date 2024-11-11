
//                      SIMPLE CALCULATOR

let input = document.getElementById('display')
let buttons = document.querySelectorAll('.btn');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            input.value = string;
        }

        else if (e.target.innerHTML == "AC") {
            string = "";
            input.value = string;
        }

        else if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1)
            input.value = string;
        }

        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})

//                              BMI CALCULATOR

let bmibtn = document.getElementById("bmi-btn")

bmibtn.addEventListener('click', () => {
    let show = document.querySelector(".show");
    let height = document.querySelector("#height").value;
    let weight = document.querySelector("#weight").value;

    if (!height || height <= 0) {
        show.innerHTML = "Invalid Height";
    }

    else if (!weight || weight <= 0) {
        show.innerHTML = "Invalid Weight";
    }

    else {
        const bmi = ((weight * 10000) / (height * height)).toFixed(2);

        if (bmi < 18.5) {
            show.innerHTML = `UnderWeight <br> Your BMI is : ${bmi}`;
            show.style.color = "deepskyblue";
        }
        else if (bmi >= 18.5 && bmi < 25) {
            show.innerHTML = `Normal Weight <br> Your BMI is : ${bmi}`;
            show.style.color = "#19d119";
        }
        else if (bmi >= 25 && bmi < 30) {
            show.innerHTML = `OverWeight <br> Your BMI is : ${bmi}`;
            show.style.color = "yellow";
        }
        else if (bmi >= 30 && bmi < 35) {
            show.innerHTML = `Obesity Class 1 <br> Your BMI is : ${bmi}`;
            show.style.color = "orange";
        }
        else if (bmi >= 35 && bmi < 40) {
            show.innerHTML = `Obesity Class 2 <br> Your BMI is : ${bmi}`;
            show.style.color = "#f57c00";
        }
        else if (bmi >= 40) {
            show.innerHTML = `Obesity Class 3 <br> Your BMI is : ${bmi}`;
            show.style.color = "Red";
        }
    }

})
