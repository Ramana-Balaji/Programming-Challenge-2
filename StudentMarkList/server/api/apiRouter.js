 const express =require('express');
 const router=express.Router();

 let students =[
     {
         studentid : '1',
         student_name : 'Test1',
         mark1: '100',
         mark2: '98',
         mark3: '76',
         mark4: '82',
         mark5: '92'
     },
     {
        studentid : '2',
        student_name : 'Test2',
        mark1: '92',
        mark2: '100',
        mark3: '98',
        mark4: '76',
        mark5: '82'
     },
     {
        studentid : '3',
        student_name : 'Test3',
        mark1: '76',
        mark2: '92',
        mark3: '100',
        mark4: '98',
        mark5: '76'
     },
     {
        studentid : '4',
        student_name : 'Test4',
        mark1: '82',
        mark2: '76',
        mark3: '92',
        mark4: '100',
        mark5: '98'
     }
 ];

 router.get('/studentlist',(Request,Response)=>{
Response.json(students);
 });

 router.post('/add',(request,response)=>{
   let student ={
      studentid : request.body.studentid,
      student_name : request.body.student_name,
      mark1: request.body.mark1,
      mark2: request.body.mark2,
      mark3: request.body.mark3,
      mark4: request.body.mark4,
      mark5: request.body.mark5
   }
   students.push(student);
   response.json({msg:'Post request is success'});
});


router.delete('/delete/:studentid',(request,response)=>{
let stuid=request.params.studentid;
students=students.filter((student)=>{
   return student.studentid !== stuid;
});

response.json({msg:'delete request is success'});
});





 module.exports=router;