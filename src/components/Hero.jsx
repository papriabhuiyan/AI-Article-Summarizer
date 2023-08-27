import React from 'react'
import { logo } from "../assets";
const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        {/* <img src={} alt='sumz_logo' className='w-28 object-contain' /> */}
          <button
            type='button'
            onClick={() =>
              window.open("https://github.com/papriabhuiyan", "_blank")
            }
            className='black_btn'
        >
          GitHub
        </button>
      </nav>
      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Make reading quicker and easier! Paste a link of an article you would like
        to summarize. You can then read a clear and concise summary.
      </h2>
    </header>
  )
}

export default Hero