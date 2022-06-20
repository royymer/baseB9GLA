import React, { useState } from "react";


export default function PaymentIframe({ currency }){


    let iframestyle = {
        minWidth:'986px',
        height:'800px',

        marginTop:'-805px',
        border:'none',
        backgroundColor:'white',
        position:'absolute',

        
    }

    const [renderIframe, setRenderIframe] = useState(iframestyle)

   
    

    
    

    return(
        
        

        <iframe src={`https://b9-ticketing-api.herokuapp.com/api/v1/view/lukapay?r=VG0AOX09IT8&currency=${currency}`} style={renderIframe}></iframe>
        
    )

}

