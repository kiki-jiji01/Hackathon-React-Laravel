import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
        BrowserRouter,
        Route,
        Router,
        Switch,
      } from 'react-router-dom';
import { Button, FormControl, InputLabel, FilledInput, InputAdornment,Paper,InputBase, Box,TextField,Modal } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import styled from "styled-components"
import { useState } from 'react';
import Graph from './Graph';
import { useFormik } from 'formik';
import axios from 'axios';


function Main() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [rooms, setRooms] = useState([]);
  

  useEffect(() => {

    getRoomsData();
},[])

  const handleSubmit = function handleSubmit(values) {
    console.log(values)
    const data = new FormData()
    data.append('title', values.title)
    data.append('body', values.body)
    data.append('user_id', user_id)
    
    

    axios.post('/api/chatRooms/create',data)
        .then(res => {
            handleClose
            console.log(res.data)
        })
        .catch(error => {
          
          console.log(error);
         });
        return () => null
  }


  const getRoomsData = () => {
    axios
        .get('/api')
        .then(res => {
          console.log(res.data)
          setRooms(res.data);
        })
        .catch(() => {
            console.log('通信に失敗しました');
        });
}





  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      body: '',
    },
    // validationSchema: validationSchema,
    onSubmit: handleSubmit
  });

      

    return (
      <MainWrapper>
          <SearchWrapper>
              <SearchWrapper1>
                  <Search>
                  <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                    >
                    <SearchIcon />
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search"
                    />
                  </Paper>
                  </Search>
                  <Create>
                   <Button variant="contained" onClick={handleOpen}>CREATE WORLD</Button>
                   <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                          <form onSubmit={formik.handleSubmit}>
                              <TextField
                              fullWidth
                              id="title"
                              name="title"
                              label="title"
                              value={formik.values.title}
                              onChange={formik.handleChange}
                              error={formik.touched.title && Boolean(formik.errors.title)}
                              helperText={formik.touched.title && formik.errors.title}
                              />
                              <TextField
                              fullWidth
                              id="body"
                              name="body"
                              label="body"
                              // type="password"
                              value={formik.values.body}
                              onChange={formik.handleChange}
                              error={formik.touched.body && Boolean(formik.errors.body)}
                              helperText={formik.touched.body && formik.errors.body}
                              />
                              <Button  variant="contained" fullWidth type="submit" sx={{ marginTop: 36}}>
                              Submit
                              </Button>
                          </form>
                       </Box>
                    </Modal>
                  </Create>
              </SearchWrapper1>
          </SearchWrapper>
          <RoomWrapper>
            <Graph/>
          </RoomWrapper>
      </MainWrapper>
       
    );
}

export default Main;


const MainWrapper = styled.div`

margin-top: 50vh;

`

const SearchWrapper = styled.div`

position: relative;
padding: 21px 82px;
margin-bottom: 5vh;
`

const SearchWrapper1 = styled.div`

margin-left: 30%;
padding: 21px 82px;
display: flex;
position:relative;
`

const Search = styled.div`
width: 50%;

`

const Create = styled.div`
position: absolute;
right:0;

`


const RoomWrapper = styled.div`

width: 100%;
height: 100%;

`