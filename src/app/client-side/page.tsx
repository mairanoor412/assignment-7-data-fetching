"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";




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


const ClientSide = () => {

    const [data, setdata] = useState<Products[]>([]);
    const [loading, setloading] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            setloading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            const parsedresponse = await response.json();
            console.log(parsedresponse);
            setdata(parsedresponse);
            setloading(false);

        };
        fetchData();
    }, [])

    return (
        <div>
            <div className="mt-12 grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 rounded-[5px] bg-white ">
                {loading ? (
                    <div className="h-[100vh] flex justify-center items-center col-span-4">
                        <div className="w-8 h-8 border-4 border-t-4 border-gray-300 border-t-yellow-500 rounded-full animate-spin"></div>
                    </div>
                ):( data.map((products, index) => (
                    <div key={index} className="transition-transform transform hover:scale-105 hover:translate-y-2 duration-500 ease-out">
                        {/* container */}

                        {/* card */}
                        <div className="w-[285px] sm:w-[320px] h-auto bg-white shadow-xl rounded-[10px] px-3 py-5">
                        <Link href={`/products/${products.id}`} target="_blank">
                            <Image src={products.image} alt={products.title} width={250} height={200} className="w-[250px] h-[200px] m-auto py-2" />
                            <h1 className="text-[20px]  font-[600] mt-4 line-clamp-1 text-black"> {products.title} </h1>
                            <div className="h-[20px] mt-2 flex justify-between items-center">
                                <p className="text-[12px] text-zinc-900  "> {products.category}</p>
                                <p className="text-[12px] text-yellow-500 ">{products.rating.rate} ({products.rating.count} reviews)</p>
                            </div>
                            <p className="my-3 text-[16px] line-clamp-2 text-black"> {products.description} </p>
                            <div className="flex items-center justify-between">
                                    <p className="text-[20px] font-[500] text-green-700"> ${products.price} </p>

                                    <p className="hover:font-[600] pr-5 text-black"> Detail </p>

                                </div>
                            </Link>
                            <button className="w-[250px] sm:w-[280px] py-[8px] text-[12px] lg:text-[14px] bg-yellow-500 hover:bg-yellow-600 rounded-[10px] text-white mt-3"> Add To Card </button>

                        </div>
                       
                    </div>


                  ))
                )}
            </div >
           

        </div>
    )
}

export default ClientSide;


