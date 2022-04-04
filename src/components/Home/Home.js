
import './Home.css'
import banner from '../../images/banner.jpg'
import CardReview from '../CardReview/CardReview';
import useProduct from '../../hook/useProduct';

const Home = () => {
    const [review, setReview] = useProduct()
    return (
        <div>
            <div className='home-container'>
                <div className="info-container">
                    <h2>Bike My Love</h2>
                    <h2 className='info'>Bike My Dream</h2>
                    <p>Riding a bike is healthy, fun and a low-impact form of exercise for all ages. Cycling is easy to fit into your daily routine by riding to the shops, park, school or work.i love bike and a like bike.</p>
                    <button>LIVE DEMO</button>

                </div>
                <div className="bike-container">
                    <img src={banner} alt="" />
                </div>

            </div>
            <h1>Review Bike</h1>

            <div className='home-review'>
                {
                    review.map(review => <CardReview key={review.id} review={review}></CardReview>)
                }
            </div>
            <button className='allbikes'>See All bikes</button>


        </div>

    );
};

export default Home;