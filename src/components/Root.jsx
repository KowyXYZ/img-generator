import React, { useRef, useState } from 'react'
import defImg from '../assets/ai.jpeg'
import zsearch from '../assets/search.png'

function Root() {


    const [imageUrl, setImageUrl] = useState('/')
    let inputRef = useRef(null)

    const handleSubmit = async() => {
        if (inputRef.current.value === ''){
            return 0
        }
        const response = await fetch(
            "https://api.openai.com/v1/images/generations",
            {
                method:'POST',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer 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",

                },
                body: JSON.stringify({
                    prompt: `${inputRef.current.value}`,
                    n:1,
                    size: '512x512'
                }),
            }
            );
            let data  = await response.json()
            console.log(data)
            let data_array = data.data
            console.log(data_array)
            setImageUrl(data_array ? data_array[0].url : '/')
    }

  return (
    <div className='container mx-auto flex items-center justify-center flex-col py-12 gap-8'>
            <p className='text-[34px] font-black'>AI IMAGE <span className='text-[purple]'>GENERATOR</span></p>
            <img src={imageUrl==='/' ? defImg : imageUrl} alt="defimg" className='w-1/2 rounded-3xl' />

            <div className='flex justify-center items-center gap-2 mt-2 '>
                <input ref={inputRef} type="text" className='outline-none rounded-full p-3 w-[500px] h-[60px] text-[18px]' placeholder='What do you want to see...'/>
                <button onClick={() => handleSubmit()} className='border-2 rounded-3xl p-2 border-[purple] bg-[purple]'>
                    <img className='w-8' src={zsearch} alt="search" />
                </button>
            </div>
         
    </div>
  )
}

export default Root
