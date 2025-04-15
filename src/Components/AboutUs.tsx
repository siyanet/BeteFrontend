

const AboutUs = () => {
  return (
    <div className="flex flex-col m-5 justify-between items-center">
        <h1 className="font-lato font-bold gradient-text">About Us</h1>
        
            <div className="flex justify-between items-center">
                <div className="w-1/2 h-full">
                    <img src = "/agree.png" alt="agree"/>
                </div>

                <div className="flex justify-center  w-1/2 flex-col items-center gap-10">
                <div className="flex justify-center items-center flex-col gap-3">
                    <h1 className="gradient-text font-bold font-lato">Who We Are</h1>
                    <p className="font-lato text-center text-black">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat </p>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-center"><i className="fa fas-certified"/> Certified Company</h1>
                        <p className="font-lato text-gray-400 ">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula e</p>
                        
                    </div>
                    <div>
                        <h1 className="text-center"><i className="fa fas-certified"/> Certified Company</h1>
                        <p className="font-lato text-gray-400 ">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula e</p>
                        
                    </div>

                </div>
                </div>


               
               
            </div>

        
      
    </div>
  )
}

export default AboutUs
