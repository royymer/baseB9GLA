import React, { useEffect, useState } from "react";
import ty from "./svgs/ty";
import ty1 from "./svgs/ty1";
import { CheckboxSVGMap, SVGMap, RadioSVGMap } from "react-svg-map";
//test de svg preprocesado
import TodoNuevo from "../SeatMap/svgs/TodoNuevo";
//service
import { eventService } from "../../src/services";
//import generateSVGmap from "./functions/generateSVGmap";
import organizarConsultas from "./functions/organizarConsulta";

//para moda
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function FullScreenDialog(opcion) {
    const [open, setOpen] = React.useState(opcion);

    React.useEffect(() => {
        console.log(open)
    }, [])

    const handleClickOpen = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
    };

    return (
        <div>
            <Dialog
                fullScreen
                open={open}
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
                <List>
                    <ListItem>
                        <ListItemText primary="Aquí va la imagen" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText
                            primary="Aquí va la disponibilidad"
                            secondary="Tethys"
                        />
                    </ListItem>
                </List>
            </Dialog>
        </div>
    )
}


const SeatMap = () => {
    const [seleccion, setSeleccion] = useState(false);
    const [loc, setLoc] = useState();
    const [xr, setXr] = useState()
    const locations = [];

    //para consulta de la disponibilidad
    var arrayConsultaOrdenada = [];
    const [arrayAreglado, setArrayArreglado] = useState();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleOnChange = (e) => {
        setModalIsOpen(!modalIsOpen)
        setSeleccion(!seleccion);
    }

    useEffect(() => {
        async function init() {
            let request0 = await eventService.eventGetSeatMap({ id: "629a66712383372c770c64a8", ticket: "1" });

            let sectores = request0.response.seatMap.sectors;
            arrayConsultaOrdenada = organizarConsultas(sectores)
            setArrayArreglado(arrayConsultaOrdenada);

            for (let i in ty) {
                let obj = {
                    path: ty[i],
                    name: `seccion_${i}`,
                    id: `seccion_${i}`
                }
                locations.push(obj);
            }

            let obj1 = {
                "label": "Parco",
                "viewBox": "0 0 261 171",
                "locations": locations
            }
            setLoc(obj1);
        }
        init();
    }, []);

    return (
        <div
            style={{
                height: "400px",
                width: "400px"
            }}
        >
            <CheckboxSVGMap
                map={TodoNuevo}
                onChange={(e) => handleOnChange(e)}
            />
           {  modalIsOpen && <FullScreenDialog />}
        </div>


    )
}

export default SeatMap;