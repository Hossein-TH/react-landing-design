import React from "react";
import Header from "../Components/Header/Header";
import IntroBox from "../Components/Sections/IntroBox";
import ExploreCards from "../Components/Sections/ExploreCards";
import Description from "../Components/Sections/Description";
import Analyze from "../Components/Sections/Analyze";
import PictureCards from "../Components/Sections/PictureCards";
import Comment from "../Components/Sections/Comment";
import Footer from "../Components/Footer/Foorter";

function HomePage() {
    return(
        <>
            <Header/>
            <IntroBox/>
            <ExploreCards/>
            <Description/>
            <Analyze/>
            <PictureCards/>
            <Comment/>
            <Footer/>
        </>
    )
}

export default HomePage