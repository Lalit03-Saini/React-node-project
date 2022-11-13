import Road from "./img/Road.jpg";
import Mountain from "./img/mountain.jpg";
import Lakha from "./img/lakenature.jpg";

const SlideShow = () => {
    function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlide");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length){myIndex = 1}
        x[myIndex-1].style.display ="block";
        setTimeout(carousel, 2000);
    }
    return (
        <>
            <div className="Content" style={{ maxWidth: "500px" }}>
                <img className="mySlide" src={Road} style={{ maxWidth: "100%" }} />
                <img className="mySlide" src={Mountain} style={{ maxWidth: "100%" }} />
                <img className="mySlide" src={Lakha} style={{ maxWidth: "100%" }} />
            </div>
        </>
    )
}

export default SlideShow;