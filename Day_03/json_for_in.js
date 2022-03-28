//SAMPLE JSON DATA
const employee = '{"name":"Karthick","age":"31","contact_no":"8667394559"}';

//COVERT JSON TO JS OBJECT
const json_object = JSON.parse(employee);

for(let x in json_object){
    console.log(x + " : " + json_object[x]);
}

/*
    ############### OUTPUT###################
name:Karthick
age:31
contact_no:8667394559 
*/
