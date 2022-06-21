import React, { useEffect, useState } from "react";
import ty from "./svgs/ty";
import ty1 from "./svgs/ty1";
import { CheckboxSVGMap } from "react-svg-map";
import Modal from "react-modal";


//test de svg preprocesado
import TodoNuevo from "../SeatMap/svgs/TodoNuevo";
//import unoAh from "../SeatMap/svgs/unoAh";


//service
import { eventService } from "../../src/services";
//import generateSVGmap from "./functions/generateSVGmap";

import foto from "./zonas/medioa1.png"

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)"
    }
}

const SeatMap = () => {
    const [seleccion, setSeleccion] = useState(false);
    const [loc, setLoc] = useState();
    const [xr, setXr] = useState()
    const locations = [];

    //para modal
    let subtitulo;
    const [modalIsOpen, setModalIsOpen] = useState(false);


    function openModal(props) {
        console.log("id  pasar", props);
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    const renderModal = () => {
        return (
            <Modal
                //appElement={"#Modal"}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel=""
            >
                <div
                    style={{
                        width: "600px",
                    }}
                >

                    <button onClick={closeModal}>Cerrar</button>
                </div>

            </Modal>
        )
    }


    const handleOnChange = (e) => {
        setSeleccion(!seleccion);
        for (let i in e) {
            console.log("valor", e[i].id);
            openModal(e[i].id)
        }
    }

    const buscarDisponibilidad = (sec) => {
        for (let x in sec) {
            console.log("_*_", sec[x].zones);
        }
    }

    useEffect(() => {
        async function init() {
            let request0 = await eventService.getSeatMap({ id: "629a66712383372c770c64a8", ticket: "1" });
            console.log("Disponibilidad", request0);

            //let aTransformar = generateSVGmap(ty1, "ty1", "ty1_");

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
            {
                renderModal()
            }
        </div>


    )
}

export default SeatMap;