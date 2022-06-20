//react
import React, { useState, useEffect } from 'react'

//components
import Footer from '../components/imported/Footer'
import Header from '../components/imported/Header'
import LayoutBanner from 'components/imported/mainLayoutSlicker'
import CardSlider from 'components/imported/cardSlider'
import DataDisplay from 'components/imported/datadisplay'
import Spacer from 'components/imported/misc/spacer'

//servicios
import { eventService } from '../src/services'

//mui materials
import { Grid } from "@mui/material";


export default function Home() {

    const [matches, setMatches] = useState([])
    
    useEffect(() => {
     
      async function init(){
        const { response, status } = await eventService.getEvents({page: 1, limit: 10})
        console.log(response)
        setMatches(response.docs)
      }
      init()
    }, [])

    
    
    

    console.log(matches)

  return (
    
    <div style={{}}>
      <Header/>
          <Grid container xs={9} style={{marginLeft:'auto', marginRight:'auto'}}>
              
              <LayoutBanner/>
              
              <CardSlider data={matches} />
              <DataDisplay data = {matches} />
              
          </Grid>
      <Footer/>
    </div>
    
  )
}
    