import React from 'react';
import ReactDOM from 'react-dom';
import {
        BrowserRouter,
        Route,
        Router,
        Switch,
      } from 'react-router-dom';
import { Button, FormControl, InputLabel, FilledInput, InputAdornment,Paper,InputBase } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import styled from "styled-components"
import { useState } from 'react';
import Graph from './Graph';

function Main() {

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

      

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
                   <Button variant="contained">CREATE WORLD</Button>
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