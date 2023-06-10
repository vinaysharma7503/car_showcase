export const fetchCars = async ()=>{
    const headers =  {
        'X-RapidAPI-Key': 'dc0a2abe6bmsh59d92b3c1049c0fp1e5d46jsna856f3854130',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
        headers:headers
    });
    const result = await response.json();
    return result;
}