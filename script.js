


const cars = ["2020", "2021"];

let text = "";
for (let x of cars) {
text += x + "<br>";
}

document.getElementById("demo").innerHTML = text


const xlabels = [];
const ydeath = [];

chartIt();


async function chartIt() {
const data =  await getData();
const ctx = document.getElementById('chart').getContext('2d');

const myChart = new Chart(ctx, {
type: 'bar',
data: {
labels:  data.xs,
datasets: [{
    label: 'number of deaths',
    data: data.ys,
    backgroundColor:
        'black',
      
    borderColor: 
        'rgba(255, 99, 132, 1)',
    borderWidth: 1
}]
},
});
}


async function getData() {

const xs = [];
const ys = [];

const response = await fetch('./national-history.csv');
const data = await response.text();

const table = data.split('\n').slice(1);
table.forEach(row => {
const columns = row.split(',');
const date = columns[0];
xs.push(date);
const death = columns[1];
ys.push(parseFloat(death) + 1000);
console.log(date, death);
});
return {xs,ys};
}



