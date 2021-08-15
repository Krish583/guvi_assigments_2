'use strict'
const getContries = () =>{
const xhr=new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.eu/rest/v2/all');
xhr.responseType ="json";
xhr.onload =() =>{
    const data=xhr.response;
    //console.log(data)
    //console.log(JSON.parse(data));
    // a. Get all the countries 
    const countries=data.map(({name}) => name);
    console.log("Countries in the data are: ", countries);
    //b. Get all the countries with a population of greater than 10 crores 
    const count=data.filter(({population}) => population > 100000000).map(({name}) => name);
    console.log("Population of countries greater than 10 crores are: ", count);
}
xhr.send();
}

getContries();
