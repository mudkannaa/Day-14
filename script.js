document.addEventListener("DOMContentLoaded", function(event) {

let i =1;


const form  = document.getElementById('form');

form.addEventListener('submit', (event) => {
   

    event.preventDefault();
    
    let fname= document.querySelector('#first-name');
    let lname= document.querySelector('#last-name');
    let address = document.querySelector('#address');
    let pincode = document.querySelector('#pincode');
    let gender = document.querySelectorAll('input[name="inlineRadioOptions"]');
    let genderdefine;
    let foods =  document.querySelectorAll('#foods');
    var selected = [];
    let state =  document.querySelector('#state');

    let country =  document.querySelector('#country');
    

            for (const radioButton of gender) {
                if (radioButton.checked) {
                    genderdefine = radioButton.value;   // gender
                    break;
                }
            }


    
   
foods[0].forEach(element => {

if(element.selected){

    selected.push(element.value);     // foods detail in selected
    
}



  });

  if(selected.length<2)
{

alert("Select minimum 2 out of 5 food items")
    
}
else{


let k = (document.querySelector('#headtable'));
let b = (document.querySelector('#body'));

if(i==1)
{




            let hrow=document.createElement('tr');
            let th0 =document.createElement('th');
            let th1=document.createElement('th');
            let th2=document.createElement('th');
            let th3=document.createElement('th');
            let th4=document.createElement('th');
            let th5=document.createElement('th');
            let th6=document.createElement('th');
            let th7=document.createElement('th');
            let th8=document.createElement('th');
            let th9=document.createElement('th');


            th0.innerHTML="S.No:";
            th1.innerHTML="First-Name";
            th2.innerHTML="Last-Name";
            th3.innerHTML="Address";
            th4.innerHTML="Pincode";
            th5.innerHTML="Gender";
            th6.innerHTML="Foods";
            th7.innerHTML="State";
            th8.innerHTML="Country";

            hrow.appendChild(th0);
            hrow.appendChild(th1);
            hrow.appendChild(th2);
            hrow.appendChild(th3);
            hrow.appendChild(th4);
            hrow.appendChild(th5);
            hrow.appendChild(th6);
            hrow.appendChild(th7);
            hrow.appendChild(th8);



            k.appendChild(hrow);

            let hrow1=document.createElement('tr');
            let td0=document.createElement('td');
            let td1=document.createElement('td');
            let td2=document.createElement('td');
            let td3=document.createElement('td');
            let td4=document.createElement('td');
            let td5=document.createElement('td');
            let td6=document.createElement('td');
            let td7=document.createElement('td');
            let td8=document.createElement('td');

            td0.innerHTML=i++;
            td1.innerHTML=fname.value;
            td2.innerHTML=lname.value;
            td3.innerHTML=address.value;
            td4.innerHTML=pincode.value;
            td5.innerHTML=genderdefine;
            td6.innerHTML=selected.join(",");
            td7.innerHTML=state.value;
            td8.innerHTML=country.value;

            hrow1.appendChild(td0);
            hrow1.appendChild(td1);
            hrow1.appendChild(td2);
            hrow1.appendChild(td3);
            hrow1.appendChild(td4);
            hrow1.appendChild(td5);
            hrow1.appendChild(td6);
            hrow1.appendChild(td7);
            hrow1.appendChild(td8);



            b.appendChild(hrow1);
           

}
else{

    let hrow1=document.createElement('tr');

    let td0=document.createElement('td');
    let td1=document.createElement('td');
    let td2=document.createElement('td');
    let td3=document.createElement('td');
    let td4=document.createElement('td');
    let td5=document.createElement('td');
    let td6=document.createElement('td');
    let td7=document.createElement('td');
    let td8=document.createElement('td');

    td0.innerHTML=i++;
    td1.innerHTML=fname.value;
    td2.innerHTML=lname.value;
    td3.innerHTML=address.value;
    td4.innerHTML=pincode.value;
    td5.innerHTML=genderdefine;
    td6.innerHTML=selected.join(",");
    td7.innerHTML=state.value;
    td8.innerHTML=country.value;


hrow1.appendChild(td0);
    hrow1.appendChild(td1);
    hrow1.appendChild(td2);
    hrow1.appendChild(td3);
    hrow1.appendChild(td4);
    hrow1.appendChild(td5);
    hrow1.appendChild(td6);
    hrow1.appendChild(td7);
    hrow1.appendChild(td8);

    b.appendChild(hrow1);
    
}

document.getElementById("form").reset();
}
});














});