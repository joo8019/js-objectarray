let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] 


          let result=[];
          for(let arr of studentRecords){
            result.push(arr.name.toUpperCase());
          }
          console.log(result);


    let marks=[];
    for(let arr of studentRecords){
        if(arr.marks>50){
    marks.push(arr);
        }
    }
    console.log(marks);

    let id=[];
    for(let arr of studentRecords){
        if(arr.marks>50 && arr.id>120){
    id.push(arr);
        }
    }
    console.log(id);


    let sum=0;
    for(let arr of studentRecords){
if(arr.marks>50 && arr.id>120){
    sum +=arr.marks;
}
    }
    console.log(sum);


let name=[];
for(let arr of studentRecords){
    if(arr.marks>50){
        name.push(arr.name);
    }
}
console.log(name);

let idsum=0;
for(let arr of studentRecords){
    if(arr.id>120){
        idsum+=arr.marks;
    }
}
console.log(idsum);


let result1=[];
for(let arr of studentRecords){
    if(arr.marks<50){
        arr.marks+=15;
    }
    if(arr.marks>50){
        result1.push(arr.marks);
    }
}
console.log(result1);


let ar = [];
            let obj1 = {
              name: "jyothsna",
              class: "Js",
              rollno: "1"
            }
            let obj2 = {
              name: "salman",
              class: "Js",
              rollno: "2"
            }
            let obj3 = {
              name: "kiran",
              class: "Js",
              rollno: "3"
            }
            let obj4 = {
              name: "shashi",
              class: "Js",
              rollno: "4"
            }
            let obj5 = {
              name: "harshu",
              class: "Js",
              rollno: "5"
            }
            let obj6 = {
              name: "rajiv",
              class: "Js",
              rollno: "6"
            }
            ar.push(obj1, obj2, obj3, obj4, obj5, obj6);
            console.log(ar);



    