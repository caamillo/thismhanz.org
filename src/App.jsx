function App() {

  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black'>
      <div className="md:w-[80%] md:h-[70%] w-[80%] h-[40%] max-h-[680px] max-w-[1340px] flex flex-col items-center justify-center space-y-3">
        <div className="text-center">
          <h1 className='font-bold text-[40px] text-white'>Mhanz</h1>
          <h2 className="text-white">Ciao bibbienesi ...</h2>
        </div>
        <iframe className='w-full h-full' src="https://www.youtube.com/embed/hfybIKt_b44?autoplay=1" title="Mhanz" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div className="grid md:grid-cols-2 md:gap-x-3 grid-cols-1 gap-y-3 w-full">
          <a href="https://www.instagram.com/caaamillo/" target='_blank' rel="noreferrer" className='flex justify-center items-center bg-white text-black font-bold text-[20px] py-2 rounded-md'>camillo</a>
          <a href="https://www.instagram.com/cornelio_puttana/" target='_blank' rel="noreferrer" className='flex justify-center items-center bg-white text-black font-bold text-[20px] py-2 rounded-md'>puiatti</a>
        </div>
      </div>
    </div>
  )
}

export default App
