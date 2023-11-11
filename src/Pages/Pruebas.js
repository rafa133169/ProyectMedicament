import React from "react";
import axios from "axios";

function API (){
    const obteniendoApi = async() =>{
    

const options = {
  method: 'GET',
  url: 'https://drug-info-and-price-history.p.rapidapi.com/1/druginfo',
  params: {drug: 'advil'},
  headers: {
    'X-RapidAPI-Key': 'f3518d7d64mshd529af46de7f8fbp14806djsnd30e6cf0daab',
    'X-RapidAPI-Host': 'drug-info-and-price-history.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}
obteniendoApi();
    return (
        <>
        {console.log(obteniendoApi)}
        </>
    )
}
export default API;