import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
import styled from "styled-components"
import { Grid} from '@material-ui/core';

function Graph() {


    const color =   "#ef476f"


    return (
     
         <Grid container spacing={6}>
           <Grid item xs={3}>
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
                </div>
            </Grid>
            <Grid item xs={3}>
             <div style={{height: "20%", width: "20%"}}>
                    <CircularProgressbar
                    background
                    styles={buildStyles({
                        backgroundColor: "#05698B",
                        // textColor: "#fff",
                        // pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                    />
                </div>
            </Grid>
            <Grid item xs={3}>
            <div style={{height: "80%", width: "80%"}}>
                    <CircularProgressbar
                    background
                    styles={buildStyles({
                        backgroundColor: "#F8CC33",
                        // textColor: "#fff",
                        // pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                    />
                </div>
            </Grid>
            <Grid item xs={3}>
            <div style={{height: "50%", width: "60%"}}>
                    <CircularProgressbar
                    background
                    styles={buildStyles({
                        backgroundColor: "#F9E900",
                        // textColor: "#fff",
                        // pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                    />
                </div>
            </Grid>
            <Grid item xs={3}>
            <div style={{height: "100%", width: "100%"}}>
                    <CircularProgressbar
                    background
                    styles={buildStyles({
                        backgroundColor: "#0A1045",
                        // textColor: "#fff",
                        // pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                    />
                </div>
            </Grid>
            <Grid item xs={3}>
            <div style={{height: "30%", width: "30%"}}>
                    <CircularProgressbar
                    background
                    styles={buildStyles({
                        backgroundColor: "#7DD669",
                        // textColor: "#fff",
                        // pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                    />
                    </div>
            </Grid>
            <Grid item xs={3}>
            <div style={{height: "10%", width: "10%"}}>
                    <CircularProgressbar
                    background
                    styles={buildStyles({
                        backgroundColor: "#ED33B9",
                        // textColor: "#fff",
                        // pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                    />
                </div>
            </Grid>
            <Grid item xs={3}>
            <div style={{height: "20%", width: "20%"}}>
                    <CircularProgressbar
                    background
                    styles={buildStyles({
                        backgroundColor: "#0A1045",
                        // textColor: "#fff",
                        // pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                    />
                    </div>
            </Grid>
         </Grid>
                
          
          
              
     
     

      
      
       
    );
}

export default Graph;



