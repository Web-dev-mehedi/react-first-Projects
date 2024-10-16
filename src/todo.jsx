//to link this file to other file we need to export default
// export default function Todo({note}){
//     return(
//         <>
//           <h1>developer : {note}</h1>
//         </>
//     )
// }


//conditionally rendaring
// export default function Todo({note,isDone}){
//    if(isDone === true){
//     return <h1>Finished : {note}</h1>
//    }
//    else{
//     return <li>Work On : {note}</li>
//    }
// }

// conditionally rendaring option-2 same as before we can write like this
// export default function Todo({note,isDone}){
//     if(isDone === true){
//      return <h1>Finished : {note}</h1>
//     }
//     return <li>Work On : {note}</li>
//  }

 // conditionally rendaring option-3
// export default function Todo({note,isDone}){
   
//      return( 
//      <h1> {isDone ? "Finished" : 'work on'}: {note}</h1>)
   

//  }

 // conditionally rendaring option-4 &&
//  export default function Todo({note,isDone}){
   
//     return( 
//     <h1> {note} {isDone && ": Done" } </h1>) is condition is true than its work
  

// }

 // conditionally rendaring option-5 ||
//  export default function Todo({note,isDone}){
   
//     return( 
//     <h1> {note} {isDone || ": Do it" } </h1>) //is condition is false than its work

// }

 // conditionally rendaring option-6 
 export default function Todo({note,isDone}){
    
    let listItem;
    if(isDone){
      listItem =  <h1>Finished : {note}</h1>
    }
    else{
        listItem =  <h1>Work on : {note}</h1>  
    }
    return listItem;

}