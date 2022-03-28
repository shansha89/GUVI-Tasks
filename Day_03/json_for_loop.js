//SAMPLE JSON DATA
const studentDetails = '[{"name":"karthick","gender":"Male","contact_no":"7845858588"},{"name":"Ganesh","gender":"Male","contact_no":"8545858588"},{"name":"Lakshmi","gender":"Female","contact_no":"6645858588"}]';

//CONVERT JSON TO JS OBJECT
const json_object = JSON.parse(studentDetails);

//PRINT USING FOR LOOP
for(let i = 0; i<json_object.length; i++){
    console.log(json_object[i]);
}

/* ####################### OUTPUT ################
{ name: 'karthick', gender: 'Male', contact_no: '7845858588' }
{ name: 'Ganesh', gender: 'Male', contact_no: '8545858588' }
{ name: 'Lakshmi', gender: 'Female', contact_no: '6645858588' }
*/

