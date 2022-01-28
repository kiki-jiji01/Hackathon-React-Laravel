import { Button,TextField } from '@material-ui/core';
import styled from "styled-components"
import {Grid,Paper,Typography} from '@material-ui/core';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useFormik } from 'formik';
import { useHistory, useParams } from 'react-router-dom';
import { API } from './api';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Message from './Message';


function Chatroom() {

    const [messages, setMessages] = useState([]);
    const history = useHistory();
    const { id } = useParams()


    useEffect(() => {
        getMessageData();
    },[])

    
    
    const handleSubmit = function handleSubmit(values) {
        console.log(values)
       
        const data = new FormData()
        data.append('message', values.message)
        data.append('chat_room_id', id)
        data.append('user_id', user_id)
        axios.post('/api/chatMessages/create',data)
        
        .then(res => {
            console.log(res.data)
        })
        .catch(error => {
          console.log(error);
         })
    //     .then(res => {
    //       history.push(`/`)
    //  　　 })
        return () => null
    }


    const formik = useFormik({
        initialValues: {
          message: '',
       
        },
      
        onSubmit: handleSubmit
      });


      const getMessageData = () => {
        axios
            .get(API.chatrooms.retrieve(id))
            .then(res => {
              console.log(res.data)
              setMessages(res.data[1]);
            })
            .catch(() => {
                console.log('通信に失敗しました');
            });
    }
    

    return (
        <Card sx={{ maxWidth: 1220, borderRadius:0, boxShadow: 0}} >
      
          <CardContent>
           <Message messages={messages}/>
          </CardContent>
          <CardContent sx={{ backgroundColor: "gray"}}>
            <form onSubmit={formik.handleSubmit}>
                    <TextField
                    fullWidth
                    id="message"
                    name="message"
                    label="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    error={formik.touched.message && Boolean(formik.errors.message)}
                    helperText={formik.touched.message && formik.errors.message}
                    />
                    <Button  variant="contained" fullWidth type="submit" >
                    Send
                    </Button>
                </form>
          </CardContent>
      
      </Card>
    );
}

export default Chatroom;

