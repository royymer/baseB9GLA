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

//imagenes de las secciones
import Zona1 from "./zonas/zona1";
import Zona2 from "./zonas/zona2";
import Zona3 from "./zonas/zona3";

//para modal
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

var zonaSeleccionada;

const SeatMap = () => {
    const [seleccion, setSeleccion] = useState(false);
    const [loc, setLoc] = useState();
    const [xr, setXr] = useState()
    const locations = [];

    //zona seleccionada que zona es
    const [queZ, setQueZ] = useState();

    //para consulta de la disponibilidad
    var arrayConsultaOrdenada = [];
    const [arrayAreglado, setArrayArreglado] = useState();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    //emigrado
    const [open, setOpen] = React.useState(true);

    const handleOnChange = (e) => {
        if (e[0] !== undefined) {
            setQueZ(e[0].id)
        }
        setModalIsOpen(!modalIsOpen)
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

    function FullScreenDialog(opcion, queZ) {
        const handleClose = () => {
            setOpen(false)
            setModalIsOpen(false)
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
                            <div
                                style={{
                                    aligItem: "center"
                                }}
                            >
                                {
                                    queZ === "test_21" ?
                                        <Zona1 />
                                        : queZ === "test_22" ?
                                            <Zona2 />
                                            :
                                            queZ === "test_23" ?
                                            <Zona3 />
                                            :
                                            null
                                }

                            </div>

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
            {modalIsOpen && FullScreenDialog(open, queZ)}
        </div>


    )
}

export default SeatMap;