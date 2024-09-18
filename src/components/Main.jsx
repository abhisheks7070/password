import React, { useState } from 'react'
const Main = () => {

    
    const [verify, setVerify] = useState({ "pass": "", "long":false, "lc": false, "uc": false, "sc": false })


    const handleChange = (event) => {
        setVerify((values) => ({ ...values, ["pass"]: (event.target.value).trim() }))

        ((verify.pass.length) >= 8) ? setVerify((values) => ({ ...values, ["long"]: true })) : setVerify((values) => ({ ...values, ["long"]: false }))
        
        verify.pass.split().forEach((e) => {
            (e == e.toLowerCase()) ? setVerify((values) => ({ ...values, ["lc"]: true })) : setVerify((values) => ({ ...values, ["lc"]: false }))
                (e == e.toUpperCase()) ? setVerify((values) => ({ ...values, ["uc"]: true })) : setVerify((values) => ({ ...values, ["uc"]: false }))
        })
    }


    
            
    console.log(verify.pass)
    console.log(verify.long)

    return (
        <>
            <div className='mt-4 flex flex-col gap-2 justify-center items-center'>
                <input className='border-black border-2 rounded-lg w-[30vw] h-16 placeholder:px-2' placeholder='Enter the password' onChange={handleChange} type="text" name="" id="" />
                <div className='flex w-[29vw] justify-between font-extrabold text-xl'>
                    <span className={`${verify.lc == true ? "text-green-700" : "text-red-700"}`}>Lowercase</span>
                    <span className={`${verify.uc == true ? "text-green-700" : "text-red-700"}`}>Uppercase</span>
                    <span>Special</span>
                    <span className={`${verify.long == true ? "text-green-700" : "text-red-700"}`}>length</span>
                </div>
                <div className='mt-8'>
                    Your password is:
                </div>
            </div>
        </>
    )
}

export default Main
