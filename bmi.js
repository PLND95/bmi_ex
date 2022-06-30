function BMI() {
    let weight = +document.getElementById("weight").value;
    let height = +document.getElementById("height").value;
    let bmi = weight / (Math.pow(height,2));
    console.log(bmi);
    if (bmi < 16){
        document.getElementById("result").innerHTML = "gay cap do 3";
    } else if (16 <= bmi && bmi <17){
        document.getElementById("result").innerHTML = "gay do 2";
    } else if (17 <= bmi && bmi < 18.5){
        document.getElementById("result").innerHTML = "gay do 1";
    } else if (18.5 <= bmi && bmi < 25 ){
        document.getElementById("result").innerHTML = "binh thuong";
    } else if (25 <= bmi && bmi < 30){
        document.getElementById("result").innerHTML = "thua can"
    } else if (30 <= bmi && bmi < 35){
        document.getElementById("result").innerHTML = "beo phi do 1"
    } else if (35 <= bmi && bmi < 40){
        document.getElementById("result").innerHTML = "beo phi do 2"
    } else{
        document.getElementById("result").innerHTML = "beo phi do 3"
    }
}
