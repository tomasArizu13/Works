import { shoe8 } from "../assets/images";
import Button from "../components/Button"


const SuperQuality = () => {
  return (
    <section
    id="about-us"
    className="flex justify-between items-center 
    max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">

      <h2 className="font-palanquin text-4xl capitalize font-bold">

          We Provide You
          <br/>
          <span className='text-purple-600'> Super </span> 
          <span className='text-purple-600'> Quality </span> Shoes
         
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        The superior quality of Nike shoes is evident in every aspect of its design and construction. From the premium materials used to the meticulous attention to detail, Nike consistently delivers excellence. Whether it's the durable yet lightweight construction, the responsive cushioning for optimal comfort and support, or the innovative technologies incorporated for enhanced performance, Nike shoes stand out for their unmatched quality.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">

          Our dedication to detail and excellence ensures your satisfaction

        </p>

        <div className="mt-11">
        <Button label = "View details"
        />
        </div>  
      </div>

      <div className="flex-1 flex justify-center items-center">

        <img
        src={shoe8}
        alt= "shoe8"
        width={570}
        height={522}
        className="object-contain"
        
        />



      </div>



    </section>
  )
}

export default SuperQuality