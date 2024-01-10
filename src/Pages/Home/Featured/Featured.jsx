import SectionTitle from '../../../Components/SectionTitle'
import featureImg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
  return (
    <div className='feature bg-fixed text-white'>
        <section>
            <SectionTitle subHeading='check it out' heading='from our menu'></SectionTitle>
        </section>

        <div className='md:flex justify-center items-center gap-4 py-8 px-16'>
         <div >
                <img src={featureImg} alt="imgg" />
            </div>

            <div>
                <p>Aug 10, 2023</p>
                <p className='uppercase'>Where can i get some?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eum cum exercitationem doloribus? Ad ea blanditiis, quisquam labore autem, iusto quidem eum necessitatibus veritatis voluptas illo laboriosam fuga commodi eos!</p>
                <button className='btn btn-outline border-0 border-b-4 mt-3'>Order Now</button>
            </div>
        </div>
    </div>
  )
}

export default Featured