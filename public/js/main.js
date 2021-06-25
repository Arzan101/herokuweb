const cityName=document.getElementById('cityName')
const SubmitBtn= document.getElementById('SubmitBtn')
const city_name=document.getElementById('city_name')
const temp_real_value = document.getElementById('temp_real_value')
const temp_status=document.getElementById('temp_status')
const datahide =document.querySelector('.middle_layer')


const getInfo = async(event)=>{
  event.preventDefault();
  let cityVal = cityName.value;
   if(cityVal === ""){
   city_name.innerText = `Enter the City name before you Search`;
   datahide.classList.add('data_hide');
    }
   else{
       try{
          let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=28a739c6d1642c9415f96cb417f08aa7`
        const response = await fetch(url)
        const data = await response.json();
        console.log(data);
        const arrData =[data];

         city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
         temp_real_value.innerText = arrData[0].main.temp;
         
         const tempMood = arrData[0].weather[0].main;
        
        //conditon to check sunny cloudy or rainy
         if(tempMood=="Clear"){
             temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>";
         }
         else if(tempMood=="Clouds"){
            temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
         }
         else if(tempMood=="Rain"){
            temp_status.innerHTML="<i class='fas fa-cloud-showers-heavy' style='color:#a4b0be;'></i>";
         }
         else{
            temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            }  
        datahide.classList.remove('data_hide');
         
    }
       catch{
        city_name.innerText = `Please Enter the correct City name!`; 
        datahide.classList.add('data_hide');
       }
    
   }

}

SubmitBtn.addEventListener('click',getInfo);