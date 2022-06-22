import React, { useEffect, useMemo, useState } from "react";
import { CheckboxSVGMap, SVGMap, RadioSVGMap } from "react-svg-map";

//service
import { eventService } from "../../src/services";
import organizarConsultas from "./functions/organizarConsulta";

//para modal
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Grid from '@material-ui/core/Grid';

//elementos del select
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { set } from "date-fns";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const SeatMap = ({ hashEvent, numberTicket, setSeatMapInfo }) => {
    //zona seleccionada que zona es
    //const [queZ, setQueZ] = useState();
    
    const [arrayAreglado, setArrayArreglado] = useState();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [arrayConsultaOrdenada, setArrayConsultaOrdenada] = useState({
        label: "",
        viewBox: "",
        locations: []
    });

    const [sectoresX, setSectoresX] = useState([]);
    const [selectSection, setSelectSection] = useState({ rows: [] });

    //estados del select
    const [filaElegida, setFilaElegida] = useState("");
    const [row, setRow] = useState({
        seats: []
    });
    const [selectedSeat, setSelectedSeat] = useState("")
    const [selectedSeats, setSelectedSeats] = useState([])
    const [sector, setSector] = useState({})
    const [zone, setZone] = useState({});

    const [seatLimit, seatLimitSeat] = useState(numberTicket)

    const [onZone, setOnZone] = useState()

    const elegirFila = (event) => {
        setRow(selectSection.rows.find(row => row._id === event.target.value))
        setFilaElegida(event.target.value)
    }
    const selectSeat = (e) => {
        //setSelectedSeat(e.target.value)
        const seatsSelectAux= [...selectedSeats]
        if(seatsSelectAux.find(elem=>elem.seat._id===e.target.value)){
            return;
        }
        if(seatsSelectAux.length<numberTicket){
            seatsSelectAux.push({
                sector: {
                    _id: sector._id,
                    name: sector.sectorClass.name
                },
                zone: {
                    _id: zone._id,
                    name: zone.zoneClass.name
                },
                section: {
                    _id:selectSection._id,
                    name: selectSection.sectionClass.name
                },
                row: {
                    _id: filaElegida,
                    name: row.rowNumber
                },
                seat: {
                    _id: e.target.value,
                    name: row.seats.find(seat=>seat._id===e.target.value).seatNumber
                },

            })
            setSeatMapInfo({
                sector: sector._id,
                zone: zone._id,
                section: selectSection._id,
                seats:seatsSelectAux.map(ele=>{return{seat:ele.seat._id, row:ele.row._id}})
            })
            setSelectedSeats([...seatsSelectAux])
        }
        
    }
    const handleOnChange = (e) => {
        if (e[0] !== undefined) {
            setModalIsOpen(true)
            let splitVal = e[0].id.split(" ");
            const sector = sectoresX.find(elem => elem._id === splitVal[0])
            const zone = sector.zones.find(elem => elem._id === splitVal[1]);
            const section = zone.sections.find(elem => elem._id === splitVal[2]);
            setSector(sector)
            setZone(zone)
            setSelectSection(section);

        }
    }

    useEffect(() => {
        async function init() {
            console.log(numberTicket)
            let request0 = await eventService.eventGetSeatMap({ id: hashEvent, ticket: numberTicket });

            let sectores = await request0.response.seatMap.sectors;
            setSectoresX(sectores);
            let tr = organizarConsultas(sectores)
            setArrayConsultaOrdenada({
                label: "test",
                viewBox: "0 0 958 989",
                locations: [
                    ...tr
                ]
            });
        }
        init();
    }, [numberTicket]);
    const SeatDetails = (props) =>{
        return (
            <div>
                <p>Sector: {props.sector.name}</p>
                <p>Zone: {props.zone.name}</p>
                <p>Section: {props.section.name}</p>
                <p>row: {props.row.name}</p>
                <p>seat: {props.seat.name}</p>
            </div>
        )
    }
    function FullScreenDialog(opcion, queZ) {
        const handleClose = () => {
            setModalIsOpen(false)
        }

        return (
            <div>
                <Dialog
                    fullScreen
                    open={modalIsOpen}
                    onClose={handleClose}
                    TransitionComponent={Transition}
                >
                    <AppBar sx={{ position: 'relative' }}>
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleClose}Resumen
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                Salir
                            </Typography>
                            <Button autoFocus color="inherit" onClick={handleClose}>
                                Guardar
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Grid container justifyContent="center" spacing={2}>
                                <Grid key={`r07`} item>
                                    <h1></h1>
                                </Grid>
                            </Grid>
                            <Grid container justifyContent="center" spacing={2}>
                                <Grid item md={6}>
                                    <Grid container justifyContent="center" spacing={2}>
                                        <Grid item xs={8}>
                                            <h1>Selecciona tu fila</h1>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Select
                                                value={filaElegida}
                                                onChange={elegirFila}
                                                fullWidth
                                            >
                                                <MenuItem selected value="" >Ninguno seleccionado</MenuItem>
                                                {
                                                    selectSection.rows.map((row, index) => (
                                                        <MenuItem value={row._id} key={index} >Fila {row.rowNumber}</MenuItem>
                                                    ))
                                                }
                                            </Select>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <h1>Selecciona tu asiento</h1>
                                        </Grid>
                                        {row.seats.length &&
                                            <Grid item xs={8}>
                                                <Select
                                                    value={selectedSeat}
                                                    onChange={selectSeat}
                                                    fullWidth
                                                >
                                                    <MenuItem selected value="" >Ninguno seleccionado</MenuItem>
                                                    {
                                                        row.seats.map((seat, index) => (
                                                            <MenuItem
                                                                onClick={() => console.log(seat.isAvailableSeat)}
                                                                value={seat._id} key={index}
                                                                style={{
                                                                    backgroundColor: seat.isAvailableSeat === false ? "red" : "white"
                                                                }}
                                                            >
                                                              Asiento  {seat.seatNumber}
                                                            </MenuItem>
                                                        ))
                                                    }
                                                </Select>
                                            </Grid>}
                                            {selectedSeats.length&&
                                            <Grid item md={8}>
                                                <h1>Seleccion de asientos</h1>
                                                {selectedSeats.map((seat, index) => (
                                                    <Grid>
                                                        <SeatDetails {...seat}/>
                                                    </Grid>
                                                ))}
                                            </Grid>}
                                    </Grid>
                                    
                                </Grid>
                                <Grid item md={6}>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Dialog>
            </div>
        )
    }

    return (
        <div
            style={{
                height: "400px",
                width: "400px"
            }}
        >

            <CheckboxSVGMap
                map={arrayConsultaOrdenada}
                onChange={(e) => handleOnChange(e)}

            />

            {
                FullScreenDialog()
            }


        </div>


    )
}

export default SeatMap;