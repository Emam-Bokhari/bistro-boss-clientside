import Banner from "./Banner";
import FromOurMenu from "./FromOurMenu/FromOurMenu";
import OrderOnline from "./OrderOnline";

const Home = () => {
    return (
        <div>
            <div >
                <Banner />
            </div>

            <OrderOnline />

            <FromOurMenu />



        </div>
    );
};

export default Home;