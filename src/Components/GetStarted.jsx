
function GetStarted() {
  return (
      <div className="container  relative">
        <div className="bg-[#1c2230]
 absolute left-1/2
 -translate-x-1/2 top-[-160px] rounded-[5px] w-[865px]
 min-h-[275px] max-w-full text-white element-center
 flex-col gap-[30px] p-[30px] text-center">
          <h3 className="text-[25px] md:text-[35px] font-semibold mb-[15px]">Get early access today</h3>
          <p className="w-[620px] max-w-full mx-auto mb-[30px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, libero, voluptas molestias
              nostrum quae inventore eligendi consequatur iusto aspernatur officia iste consectetur 
          </p>
          <form className="w-full flex justify-between items-center flex-wrap md:px-[60px] gap-[30px]">
              <input type="email" placeholder="email@example.com" className="w-full md:flex-1 h-[50px] rounded-[30px] pl-[30px] outline-none border-none text-sm text-black font-medium"/>
              <button type="submit" className="w-full md:w-[200px] h-[50px] bg-[#42b0d1] hover:bg-[#8cdae4] transition-all duration-200 rounded-[30px]">Get started For Free </button>
              </form>
              </div>
    </div>
  )
}

export default GetStarted
