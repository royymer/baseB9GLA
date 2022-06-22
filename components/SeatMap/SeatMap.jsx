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

const SeatMap = ({ hashEvent, numberTicket }) => {
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
        setSelectedSeat(e.target.value)
        const oldSeats = [...selectedSeats]
        oldSeats.push({
            sector: sector._id,
            zone: zone._id,
            section: selectSection._id,
            row: filaElegida,
            seat: e.target.value
        })

        setSelectedSeats([...oldSeats])
    }
    const handleOnChange = (e) => {
        console.log("valores", e)
        if (e[0] !== undefined) {
            setModalIsOpen(true)
            let splitVal = e[0].id.split(" ");
            const sector = sectoresX.find(elem => elem._id === splitVal[0])
            const zone = sector.zones.find(elem => elem._id === splitVal[1]);
            const section = zone.sections.find(elem => elem._id === splitVal[2]);
            setSector(sector)
            setZone(zone)
            setSelectSection(section);
            //vaciar vector

        }
    }

    useEffect(() => {
        async function init() {
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
    }, []);

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
                                onClick={handleClose}
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
                                    <h1>ki</h1>
                                </Grid>
                            </Grid>
                            <Grid container justifyContent="center" spacing={2}>
                                <Grid item md={6}>
                                    <Grid container justifyContent="center" spacing={2}>
                                        <Grid item xs={8}>
                                            <Select
                                                value={filaElegida}
                                                label="Elija su Fila"
                                                onChange={elegirFila}
                                                fullWidth
                                            >
                                                <MenuItem selected value="" >Ninguno seleccionado</MenuItem>
                                                {
                                                    selectSection.rows.map((row, index) => (
                                                        <MenuItem value={row._id} key={index} >{row.rowNumber}</MenuItem>
                                                    ))
                                                }
                                            </Select>
                                        </Grid>
                                        {row.seats.length &&
                                            <Grid item xs={8}>
                                                <Select
                                                    value={selectedSeat}
                                                    label="Elija su asiento"
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
                                                                {seat.seatNumber}
                                                            </MenuItem>
                                                        ))
                                                    }
                                                </Select>
                                            </Grid>}

                                    </Grid>

                                </Grid>
                                <Grid item md={6}>
                                    {selectedSeats.map((seat, index) => (
                                        <Grid>
                                            <p>Sector: {seat.sector}</p>
                                            <p>Zone: {seat.zone}</p>
                                            <p>Section: {seat.section}</p>
                                            <p>Row: {seat.row}</p>
                                            <p>Seat {seat.seat}</p>
                                        </Grid>
                                    ))}
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
                onLocationMouseMove={(e)=>console.log(e.target)}

            />

            {
                FullScreenDialog()
            }


        </div>


    )
}

export default SeatMap;