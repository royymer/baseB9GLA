import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material";
import { useMediaQuery, Box, Container, Button } from "@mui/material";

import { useEffect, useState } from "react";

import MatchSelected from "../../components/imported/matchSelected";

import SeatMapMain from "../../components/imported/seatMapMain";
import ResumenDeCompra from "components/imported/resumenDeCompra";
import TicketPicker from "components/imported/TicketPicker";
import Header from "components/imported/Header";
import Footer from "components/Footers/Footer";
import Template from "components/imported/misc/Template";
import Spinner from 'components/imported/misc/Spinner'


import { eventService } from "src/services";


const drawerStyle = {};

const Details = ({ juegos }) => {
  
  
  const [matchinfo, setMatchinfo] = useState(null)
  const [loading, setLoading] = useState(false)
  const [userSession, setUserSession] = useState({})


  const router = useRouter();
  const boletosID = router.query.TicketsID;
  console.log(boletosID)
  const itemFiltrado = []
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  const matchesmd = useMediaQuery(theme.breakpoints.up("md"));

   useEffect(() => {
     
    async function init(){
      setLoading(true)
      const { response, status } = await eventService.getEvent({id:boletosID})
      setLoading(false)
      console.log(response)
      
      if (status === 200){
        setMatchinfo(response)
      }
    }
    init()
  }, []) 

  useEffect(() => {
    // Perform localStorage action
     let user = localStorage.getItem('user')
    setUserSession(user)
    
  }, []) 


  return (
    <>
    <Template>
      <div>
        <Grid container>
          <Grid item xs={3} sx={{ borderRightColor: "black" }}>
            
              <div style={{marginLeft: '50px', marginTop: '50px'}} >
                <TicketPicker userSession={userSession} />
              </div>
            
          </Grid>
          <Spinner loading={loading}/>

          {matchinfo&&
          <Grid item xs={matches ? 9 : 12}>
            <MatchSelected event={matchinfo} />
            
            <SeatMapMain />
            <ResumenDeCompra matchid={boletosID} />
          </Grid>}
        </Grid>
      </div>
    </Template>
    
    </>
  );
};
 /* export async function getServerSideProps(context) {
    

  const res = await fetch(
    `https://b9-ticketing-api.herokuapp.com/api/v1/events/?page=1&limit=10`
  );
  const data = await res.json();

  return {
    props: { juegos: data },
  };
}  */



export default Details;
