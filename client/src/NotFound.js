import React from "react";
import { Link } from "react-router-dom";
import compass from './images/compass.png'


function NotFound(){

    return (
        <div className="not_found_div">
            <img className="not_found_background" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/820fd980-9eb5-4ab2-91cb-2c110d134383/d403y6e-9e2c683e-adc9-45fa-ad07-655116252d3e.png/v1/fill/w_1024,h_1448,q_80,strp/westeros_map_by_7narwen_d403y6e-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ0OCIsInBhdGgiOiJcL2ZcLzgyMGZkOTgwLTllYjUtNGFiMi05MWNiLTJjMTEwZDEzNDM4M1wvZDQwM3k2ZS05ZTJjNjgzZS1hZGM5LTQ1ZmEtYWQwNy02NTUxMTYyNTJkM2UucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4CvmZVAmYGbv6M0EAQm64u7gL_zJGLTV_HnQyGhlFrI" />
            <div className="div_404">
                <p className="not_found_header"><strong>404</strong> Not Found</p>
                <img className="not_found_compass" src={compass} />
                <p className="not_found_p">You've journeyed beyond the known world.</p>
                <p className="not_found_p2">Return from wence ye came.</p>
                <Link to="/"><button className="not_found_home">Home</button></Link>
            </div>
        </div>
    )
}


export default NotFound