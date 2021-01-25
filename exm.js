const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
 
  res.writeHead(200,{'Content-Type':'text/html'});
  var cars = [
    {
      "name":"Toyata",
      "model": "Sedan",
      "Price": 500000.00,
      "ManufacturingYear": new Date('2017-01-03'),
      "LastServiceDate": new Date('2020-01-09')
    },
    {
      "name":"Datsun GO+",
      "model": "MPV",
      "Price": 800000.00,
      "ManufacturingYear": new Date('2015-02-13'),
      "LastServiceDate": new Date('2021-01-01')
    },
    {
      "name":"Maruti Suzuki Swift",
      "model": "Hatchback",
      "Price": 600000.00,
      "ManufacturingYear": new Date('2015-02-13'),
      "LastServiceDate": new Date('2021-01-01')
    },
    {
      "name":"Datsun GO+",
      "model": "MPV",
      "Price": 900000.00,
      "ManufacturingYear": new Date('2015-02-13'),
      "LastServiceDate": new Date('2021-01-01')
    },
    {
      "name":"Land Rover Discovery Sport",
      "model": "SUV",
      "Price": 300000.00,
      "ManufacturingYear": new Date('2015-02-13'),
      "LastServiceDate": new Date('2021-01-01')
    },
    {
      "name":"Volvo S60 Cross Country",
      "model": "Crossover",
      "Price": 500000.00,
      "ManufacturingYear": new Date('2015-02-13'),
      "LastServiceDate": new Date('2021-01-01')
    },
    {
      "name":"Mercedes-Benz GLE Coupe",
      "model": "Coupe",
      "Price": 8000000.00,
      "ManufacturingYear": new Date('2015-02-13'),
      "LastServiceDate": new Date('2021-01-01')
    },
    {
      "name":"Audi A3 Cabriolet",
      "model": "Convertible",
      "Price": 10000000.00,
      "ManufacturingYear": new Date('2019-02-13'),
      "LastServiceDate": new Date('2021-01-01')
    },
    {
      "name":"Hyundai i20",
      "model": "MPV",
      "Price": 700000.00,
      "ManufacturingYear": new Date('2018-02-13'),
      "LastServiceDate": new Date('2021-01-01')
    },
    {
      "name":"Mahindra Thar",
      "model": "Convertible",
      "Price": 500000.00,
      "ManufacturingYear": new Date('2015-02-13'),
      "LastServiceDate": new Date('2021-01-01')
    }
  ];
//for display
res.write(JSON.stringify(cars)+"\n");

//for counting
res.write("\n Total cars="+JSON.stringify(cars.length)+"\n");

//for filter
let car = cars.find(car => car.name === "Toyata");
if(car==undefined)
  res.write("The Toyata car is not avalible"+"\n");
else
  res.write("The Toyata car is avalible"+JSON.stringify(car)+"\n");

//for display current date and time
var dateobj=new Date();
res.write(JSON.stringify(dateobj.getDate()+"-"+dateobj.getMonth()+1+"-"+dateobj.getFullYear()));

//for display next month
res.write(JSON.stringify(dateobj.getDate()+"-"+dateobj.getMonth()+2+"-"+dateobj.getFullYear()));


//for display last year
var v=dateobj.getMonth()+1;
console.log(v);
if(v <=1)
  res.write(JSON.stringify(new Date(dateobj.setFullYear(dateobj.getFullYear() -2))));
else
  res.write(JSON.stringify(dateobj.getDate()+"-"+dateobj.getMonth()-1+"-")+dateobj.getFullYear());


res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});