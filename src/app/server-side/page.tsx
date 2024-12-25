
interface Books {
    id: number;
    name: string;
    type: string;
    available: boolean;
}



const ServerSide = async()=>{

    const response = await fetch("https://simple-books-api.glitch.me/books/");
    const parsedresponse:Books[] = await response.json();
    console.log(parsedresponse);
    
    return(
        <div className="overflow-x-hidden mt-28 w-full bg-white">
        <div className = "grid grid-cols-1  gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 rounded-[5px]">{parsedresponse.map((books , index)=>(
            <div className="w-[285px] h-[150px] sm:w-[350px] md:w-[300px] md:h-[150px] bg-white shadow-xl py-5 px-5 flex flex-col gap-3 m-auto rounded-[10px]" key={index}>
                
                <p className="text-[25px] font-[600] text-black"> {books.name}</p>
                <p className="text-[18px] text-black"> {books.type}</p>
                
            </div>
        ))}</div>
        </div>
    )
}

export default ServerSide;