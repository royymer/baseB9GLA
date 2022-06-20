import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material";
import { useMediaQuery, Box, Container, Button } from "@mui/material";

import MatchSelected from "../../components/imported/matchSelected";

import SeatMapMain from "../../components/imported/seatMapMain";
import ResumenDeCompra from "components/imported/resumenDeCompra";
import TicketPicker from "components/imported/TicketPicker";
import Header from "components/imported/Header";
import Footer from "components/Footers/Footer";
import Template from "components/imported/misc/Template";


const drawerStyle = {};

const Details = ({ juegos }) => {
  // const [age, setAge] = useState("");

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  const router = useRouter();
  const boletosID = router.query.boletosID;
  const itemFiltrado = juegos.docs.filter((item) => {
    return item._id == boletosID;
  });
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  const matchesmd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
    <Template>
      <div>
        <Grid container>
          <Grid item xs={3} sx={{ borderRightColor: "black" }}>
            
              <div style={{marginLeft: '50px', marginTop: '220px'}} >
                <TicketPicker />
              </div>
            
          </Grid>
          <Grid item xs={matches ? 9 : 12}>
            {itemFiltrado.map((item) => {
              return <MatchSelected event={item} />;
            })}
            <SeatMapMain />
            <ResumenDeCompra />
          </Grid>
        </Grid>
      </div>
    </Template>
    
    </>
  );
};
export async function getServerSideProps(context) {
  const res = await fetch(
    "https://b9-ticketing-api.herokuapp.com/api/v1/events/629a64142383372c770c64a2?page=1&limit=10"
  );
  const data = await res.json();

  return {
    props: { juegos: data },
  };
}

export default Details;
