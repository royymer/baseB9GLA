//react
import React, { useState, useEffect } from 'react'

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


export default function Home() {

    const [matches, setMatches] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
     
      async function init(){  
        setLoading(true)
        const { response, status } = await eventService.getEvents({page: 1, limit: 10})
        setLoading(false)
        console.log(response)
        setMatches(response.docs)
      }
      init()
    }, [])

    console.log(matches)
    
    

    console.log(matches)

  return (
    
    <div style={{}}> 
      <Header/>
          <Grid container xs={9} style={{marginLeft:'auto', marginRight:'auto'}}>
              
              <LayoutBanner/>
              
              <CardSlider data={matches} />
              <Spinner loading={loading}/>
              <DataDisplay data = {matches} />
              
          </Grid>
      <Footer/>
    </div>
    
  )
}
    