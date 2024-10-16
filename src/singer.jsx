export default function Singer({singer}){
    console.log(singer);
    const {name , age} = singer
    return (
        
        <div>
            <h3>singer:{name}</h3>
            <p>age:{age}</p>
        </div>
    )

}