import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Home from "../Home";
import Error404 from "../paginas/404";
const Basico = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/*" element={<Error404 />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};



export default Basico;