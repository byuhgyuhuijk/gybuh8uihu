const input=document.querySelector('.input')
const button=document.querySelector('.show-data')
const output=document.querySelector('.output')
let data=[]
button.onclick=async()=>{
    console.log(`${input.value}`);
    await getData(input.value);
    console.log(data);
    htmlData(data)
    input.value=''
}
async function getData (cityName){
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=357bd28c1f6bcd521b161111d47ab0a3&units=metric`)
    if (response.status==200) {
        data=await response.json()

    }else{
        alert('CITY NOT FOUND')
    }
};
const htmlData=(data)=>{
output.innerHTML=`
<div>
<h2>Название города:${data.name}</h2>
<p>Температура:${data.main.temp}</p>
<p>Описание:${data.weather[0].main}</p>
<p>Влажность:${data.main.humidity}</p>

</div>
`
};


