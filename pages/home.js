//react
import React, { useState, useEffect } from 'react'
import router, { useRouter } from 'next/router'


//components
import Footer from '../components/imported/Footer'
import Header from '../components/imported/Header'
import LayoutBanner from 'components/imported/mainLayoutSlicker'
import CardSlider from 'components/imported/cardSlider'
import DataDisplay from 'components/imported/datadisplay'
import Spacer from 'components/imported/misc/spacer'
import Spinner from 'components/imported/misc/Spinner'

//servicios
import { eventService } from '../src/services'

//mui materials
import { Grid } from "@mui/material";
import { set } from 'date-fns'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  
} from "@mui/material";

//para la dimensión
//import useWindowDimensions from '../hooks/useWindowDimensions';

import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from '@react-hook/window-size'


export default function Home() {

  const router = useRouter()

  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);

  const [showVerifiedEmail, setShowVerifiedEmail] = useState(false)
  const [verifiedEmail, setVerifiedEmail] = useState(false)

  const [width, height] = useWindowSize()
  const onlyWidth = useWindowWidth()
  const onlyHeight = useWindowHeight()

  useEffect(() => {
    async function init() {
      setLoading(true);
      const { response, status } = await eventService.getEvents({ page: 1, limit: 10 });
      setLoading(false);
      console.log(response);
      setMatches(response.docs);
      console.log(width, height)
    }
    init()
  }, [])

  useEffect(() => {

    console.log(router.query.valid)

    if (router.query.valid) {
      setShowVerifiedEmail(true)
      if(router.query.valid == 'true'){
      setVerifiedEmail(true)}
      else{setVerifiedEmail(false)}
    }
  
    
    
  }, [router.query.valid])
  console.log(verifiedEmail)
  console.log(showVerifiedEmail)
  
  

  /*   console.log(matches)
  
  
  
    console.log(matches) */

  return (

    <div style={{}}>
      <Header />
      {showVerifiedEmail &&
        
        <Dialog open={showVerifiedEmail} onClose={() => { setShowVerifiedEmail(false) }}>
          <Grid container>
            <Grid item xs={12} sx={{ textAlign: "end", marginRight: "10px" }}>
              {/* <CloseIcon onClick={() => setIsDialogInicioOpen(false)} /> */}
            </Grid>
            <Grid item xs={12}>
              <DialogTitle sx={{ textAlign: "center" }}>
                {`Verificacion ${verifiedEmail? 'Exitosa' : 'Fallida' }`}
              </DialogTitle>
            </Grid>

            <DialogContent>
              <DialogContentText>
                {verifiedEmail? 'Su verificacion de correo electronico fue hecha correctamente' : 'Su Verificacion de correo ha fallado, verifique el enlace de validacion' }
              </DialogContentText>
            </DialogContent>
          </Grid>
        </Dialog>
        
      }

      <Grid container xs={9} style={{ marginLeft: 'auto', marginRight: 'auto' }}>

        {
          width > 500 ?
            <LayoutBanner />
            :
            null
        }

        <CardSlider data={matches} />
        <Spinner loading={loading} />
        <DataDisplay data={matches} />

      </Grid>
      <Footer />
    </div>

  )
}
