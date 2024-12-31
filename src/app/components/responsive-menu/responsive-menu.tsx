import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const ResponsiveMenu = ({ open }: any) => {
    return (
    <AnimatePresence mode="wait">

        {open && (
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
               
                className="absolute top-10 left-0 w-full h-screen z-20"
            >
                <div className=" bg-yellow-500  opacity-80 py-10 m-6 rounded-3xl md:hidden">
                <ul className="flex flex-col justify-center items-center gap-10 ">
                    <li className="text-[16px] font-[500] text-primary">
                        <Link href="/" target="_blank"> Home </Link>
                    </li>
                    <li className="text-[16px] font-[500] text-primary">
                        <Link href="/client-side" target="_blank">  Client </Link>
                    </li>
                    <li className="text-[16px] font-[500] text-primary">
                        <Link href="/server-side" target="_blank"> Server </Link>
                    </li>
                </ul>
                </div>
            </motion.div>

        )}


    </AnimatePresence>
    )
}

export default ResponsiveMenu;






// transition={{ duration: 0.5 }}