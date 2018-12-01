// function loadJSON(file) {
// return new promise((resolve,reject)=>{
//   return fetch(file).then(response=>{
//     if(response.ok){
//       resolve(response.json());
//     }
//     else{
//       reject(new Error('error'));
//   }
//   })
// })
// }
// var fetchData=loadJSON("dynamic.json")
// fetchData.then(data=>{
//   console.log(data);
// })
// var child2=document.querySelector("#child2")
// //Carrier
//
// function Carrier(car){
//   var h2=document.createElement("h1");
//   h2.textContent="Carrier Objective";
//   child2.appendchild(h2);
//
//   var heading=document.createElement("hr")
//     child2.appendchild(heading);
//
//     var p=document.createElement("p");
//     p.textContent=car.info;
//     child2.appendchild(p);
// }



function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadyStatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }

  };
  xhr.send(null);
}

getfile("dynamic.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
Career(data.Career);

})


var child2=document.querySelector(".rightchild")
function Career(c){
  var chead=document.createElement("h2");
  chead.textContent="carrier objective";
  child2.appendchild(chead);

  var chr=document.createElement("hr")
  child2.appendchild(chr);

  var cp=document.createElement("p")
  cp.textContent=c.info;
  child2.appendChild(cp);

}
//
// function education(edu){
//   var ehead=document.createElement("h2")
//   ehead.textContent="EDUCATIONAL DETAILS";
//   child2.appendChild(ehead);
//
//   var ehr=document.createElement("hr")
//   child2.appendChild(ehr);
//
//
//   Let etable=document.createElement("table");
//   etable.border="1";
//
//   var tr1="<tr><td>degree</td><td>Institution</td><td>YOP</td><td>percentage</td></tr>";
//   var tr2="";
//   for(i=0;i<edu.length;i++){
//     tr2=tr2+"<tr><td>"+edu[i].degree+"</td><td>"+edu[i].Institution+"</td><td>"+edu[i].YOP+0"</td><td>"+edu[i].percentage+"</td></tr>";
//
//
//   }
//   etable.innerHTML=tr1+tr2;
//   child2.appendchild(etable);
//
// }
//
// }
