
import React from 'react';
import { useState} from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { deleteUser, updateUsername } from './Users';
import { ListItem, ListItemText, TextField, IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';

export default function User() {
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.users.value);
    const [newName, setNewName] = useState('');

    return (
        <>
            {userList.map((user) => (
                <ListItem key={user.id} className="listitem" style={{backgroundColor: 'wheat'}}>
                    <AccountCircle fontSize="large" style={{ marginRight: '5px', color: 'black'}} />
                    <ListItemText style={{ color: 'black'}} primary={user.name} secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="black"
                            >
                                {user.email}
                                <br/> {user.message}
                            </Typography>
                            
                        </React.Fragment>
                    } />
                    <TextField
                        sx={{ m: 1, minWidth: 350, p:1 }}
                        style={{ marginRight: '20px', backgroundColor:'whitesmoke', borderRadius: '10px'}}
                        InputProps={{ disableUnderline: true, color: 'white' }}
                        id="standard-basic" variant="standard"
                        placeholder='Type new name...'
                        onChange={(e) => setNewName(e.target.value)}
                    />
                    <Button variant="contained"
                        onClick={() => {
                            dispatch(updateUsername({ id: user.id, name: newName }));
                        }}>
                        Update
                    </Button>
                    <IconButton aria-label="delete" color="error"
                        onClick={() => {
                            dispatch(deleteUser({ id: user.id }));
                        }}>
                        <DeleteIcon />
                    </IconButton>
                </ListItem>
            ))}
        </>
    );

}

