import React, { useState, useEffect } from "react";
import Spinner from 'components/imported/misc/Spinner';
import { useRouter } from "next/router";




export default function PaymentIframe({ currency }) {

    const [loading, setloading] = useState(false)
    const router = useRouter()


    useEffect(() => {
        window.addEventListener('message', getMessage)
    }, [])


    function getMessage(e) {
        const data = e.data
        console.log(data)

        if (data.type === 'loading') {

            setloading(data.response.loading)

        }

        else if (data.type === 'response') {
            if (data.status === 200) {
                console.log('pago exitoso')
                router.push('/checkout/completado')

            }
            else {
                setloading(false)
                setOpenIframe(true)

            }
        } else if (data.type === 'back') {
            props.goback()
        }

    }

    let iframestyle = {
        width: '100%',
        minHeight:'786px',
        height: 'auto',

        marginTop: '0px',
        border: 'none',
        /* backgroundColor: 'white', */
        


    }

    const [renderIframe, setRenderIframe] = useState(iframestyle)







    return (


        <div style={{  width:'100%' }} >
            <Spinner loading={loading} />

            <iframe src={`https://b9-ticketing-api.herokuapp.com/api/v1/view/lukapay?r=VG0AOX09IT8&currency=${currency}`} style={renderIframe}></iframe>
        </div>
    )

}

