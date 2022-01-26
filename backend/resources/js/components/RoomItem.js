import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
import styled from "styled-components"
import { Grid, Box} from '@material-ui/core';




function RoomItem ({room}) {
    return(

        <Grid item xs={3} >
                <div style={{height: "20%", width: "20%"}}>
                    <CircularProgressbar
                    background
                    styles={buildStyles({
                        backgroundColor: "#00C2D1",
                        // textColor: "#fff",
                        // pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                    />
                    <p>{room.title}</p>
                </div>
            </Grid>

    )
}

export default RoomItem