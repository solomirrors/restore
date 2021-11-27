import React from "react";
import {motion} from "framer-motion/dist/framer-motion"

export const appLogotype = (nameLeft, nameRight) => {
    return(
        <h3 className='px-3 m-0 re-store-name d-flex align-items-center'>
            <p className='re-store-name-part p-0 m-0'>{nameLeft}</p>
            <motion.h3
                className="re-motion-logotype p-0 m-0"
                animate={{ rotate: 180 }}
                transition={{
                    repeat: 2,
                    repeatType: "reverse",
                    duration: 3
                }}
            >
                <h1 className='px-2 re-logotype material-icons'>auto_stories</h1>
            </motion.h3>
            <p className='re-store-name-part p-0 m-0'>{nameRight}</p>
        </h3>
    )
}