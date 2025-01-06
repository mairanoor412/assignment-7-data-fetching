import Image from "next/image";



interface Products {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}



const Products =async ({params}:any)=>{
const response = await fetch(`https://fakestoreapi.com/products/${params.slug}`)
const ParsedResponse:Products = await response.json()
console.log(ParsedResponse);

    return(
        <div className="bg-white mb-10 flex flex-col px-3 sm:px-7  lg:px-52 xl:px-72 gap-3 lg:gap-5">
           <Image src={ParsedResponse.image} alt={ParsedResponse.title} width={250} height={250} className="w-[250px] h-[250px] m-auto mt-12 mb-6" />
           <p className="text-[30px] font-[600]">{ParsedResponse.title} </p>
          <p className="text-[16px]">{ParsedResponse.description}</p>
          <p className="text-[25px] font-[600] text-green-600"> ${ParsedResponse.price}</p>
          <button className="w-[250px] sm:w-[280px] py-[8px] text-[12px] lg:text-[14px] bg-yellow-500 hover:bg-yellow-600 rounded-[10px] text-white mt-3"> Add To Card </button>
         
        </div>
    )
}

export default Products;


