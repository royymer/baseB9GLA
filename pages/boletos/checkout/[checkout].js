import { useState, useEffect } from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { ButtonGroup } from '@mui/material';
import PaymentIframe from 'components/imported/misc/forms/PaymentIframe';
import { Grid, useMediaQuery } from '@mui/material';
import { useTheme } from "@mui/material";
import Template from 'components/imported/misc/Template';
import Header from 'components/imported/Header';
import Spinner from 'components/imported/misc/Spinner'


import { MatchSelected } from '../../../components/imported/matchSelected';


import Link from "next/link";


import React from 'react'

export default function checkout(item) {




  const buttonccs = {
    width: '255px',
    height: '51px',
    border: 'none',
    color: '#979797',
    '&:hover': { background: '#ffffff', boxShadow: '0px 8px 24px -4px rgba(151, 161, 175, 0.38)', borderRadius: '7px', border: 'none' }
  }

  const activebuttonccs = {
    width: '255px',
    height: '51px',
    border: 'none',
    color: '#979797',
    background: '#ffffff',
    boxShadow: '0px 8px 24px -4px rgba(151, 161, 175, 0.38)',
    borderRadius: '7px',
    border: 'none',
    '&:hover': { background: '#ffffff', boxShadow: '0px 8px 24px -4px rgba(151, 161, 175, 0.38)', borderRadius: '7px', border: 'none' }
  }

  const [is1Active, setIs1Active] = useState(buttonccs)
  const [is3Active, setIs3Active] = useState(buttonccs)

  const [selectedButton, setSelectedButton] = useState('')
  const [openIframe, setOpenIframe] = useState(false)
/*   const [loading, setloading] = useState(false)
 */


  


  const manageClick = (option) => {

    if (option.id == 1) {
      let optionstatus = activebuttonccs

      setIs1Active(optionstatus)

      setIs3Active(buttonccs)

      setOpenIframe(true)

      setSelectedButton('USD')
    }

    else if (option.id == 2) {

      let optionstatus = { currency: 'Pagomovil', ...activebuttonccs }


      setIs1Active(buttonccs)

      setIs3Active(optionstatus)


      setOpenIframe(true)

      setSelectedButton('VES')


    }


  }

  return (

    <>
      <Template>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexWrap: 'wrap', flexDirection: 'column' }}>

          

          <div className='rightBox' >
            <div className='superiorBox'>

              aqui van los detalles del partido

            </div>

            <div className='inferiorBox' style={{ display: 'flex', flexWrap: 'nowrap', flexDirection: 'row', justifyContent: 'space-around' }} >
              <div style={{ minWidth: '950px' }} >
                <ButtonGroup
                  sx={{
                    width: '909px',
                    height: '66px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    marginTop: '174px',
                    marginLeft: '50px',
                    background: '#F8F7FF',
                    borderRadius: '7px 7px 7px 0px'
                  }}
                  variant="outlined"
                  aria-label="outlined button group">
                  <Button sx={is1Active} onClick={() => manageClick({ id: 1, ...is1Active })}  >Zelle</Button>
                  <Button sx={is3Active} onClick={() => manageClick({ id: 2, ...is3Active })} >Pago Movil</Button>
                </ButtonGroup>

                {/* {loading ?
                  <div style={{
                    minWidth: '986px',
                    height: '800px',

                    marginTop: '0px',
                    border: 'none',
                    backgroundColor: 'white',

                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'

                  }} > <Spinner loading={loading} /> </div> : null} */}


                {openIframe ?
                  <PaymentIframe currency={selectedButton} /> : null}


              </div>



              <Card sx={
                {
                  width: '391px',
                  height: '510px',

                  marginTop: '174px',
                  marginRight: '22px',
                  marginBottom: '143px',
                  marginLeft: '40px'
                }}>

                <div style={{
                  display: 'flex',
                  background: '#0D1626',
                  borderRadius: '7px 7px 0px 0px',
                  width: '100%', height: '66px',
                  margin: '0',
                  justifyContent: 'center',
                  alignItems: 'center',

                  fontSize: '24px',
                  lineHeight: '140%',
                  fontWeight: '700',
                  color: '#FFFFFF'
                }} >Orden</div>

                <div style={{ borderBottom: '1px dashed #B1AEAE ' }} >

                  <h1 style={{ fontWeight: '800', fontSize: '20px', lineHeight: '23px', marginTop: '27px', marginLeft: '24px', marginBottom:'23px' }}>Descripcion </h1>

                  <h3 style={{ marginLeft: '24px', fontStyle: 'normal', fontWeight: '600', fontSize: '18px', lineHeight: '21px', color: '#2E2E2E' }} >JORNADA 1 - Gladiadores vs Trotamundos</h3>

                  <h4 style={{ fontWeight: '400', fontSize: '16px', lineHeight: '19px', color: '#2E2E2E', marginLeft: '23px', marginTop: '23px', marginBottom: '16px' }} >09-05-2022 <br /> <br /> 8:00PM <br /> <br /> Gimnasio Luis Ramos </h4>

                </div>

                <div>
                  <h1 style={{ marginBottom: '0px', fontWeight: '800', fontSize: '20px', lineHeight: '23px', marginTop: '27px', marginLeft: '24px' }}>Tickets</h1>

                  <h1 style={{ fontWeight: '400', fontSize: '20px', lineHeight: '23px', marginTop: '14px', marginLeft: '24px', marginBottom:'30px' }}>1 - Asiento 21 - Grada - Fila 4</h1>

                </div>


                <div style={{ display: 'flex', width: '391px', minHeight: '101px', background: '#FECC1D', borderRadius: '0px 0px 7px 7px', alignItems: 'center' }} >
                  <h3 style={{ marginLeft: '24px', fontWeight:'700', fontSize:'16px', lineHeight:'19px',color:'#212323' }} >Total:</h3>
                  <h1 style={{ marginLeft: '28px', fontWeight:'800', fontSize:'20px', lineHeight:'23px',color:'#212323' }} >Bs.D 15.00</h1>
                </div>

              </Card>

            </div>

          </div>

        </div>
        
      </Template>
      </>
  )
}
