import CardContainer from "../Components/CardContainer";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import ServiceContainer from "../Components/services/ServiceContainer";

const Homepage = () => {
    return (
        <>
        <Header></Header>
        <CardContainer></CardContainer>
        <ServiceContainer></ServiceContainer>
        <LatestNews></LatestNews>
        </>
    );
};

export default Homepage;