import Header from "../Header";
import Footer from "../Footer";

export default function Template(props){
    return(
        <>
            <Header/>
            {props.children}
            <Footer/>
        </>
    )
}