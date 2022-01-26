
import { Grid, Box} from '@material-ui/core';
import RoomItem from './RoomItem';
function Graph({rooms}) {


    const renderedRooms =  rooms.map((room) => {
        return <RoomItem  room={room} />
       
    });


    return (
     
         <Grid container spacing={6}>{renderedRooms}</Grid>

            
    );
}

export default Graph;



