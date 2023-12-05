import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Dialog, DialogTitle, DialogContent, DialogContentText, AlertTitle, DialogActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { useEffect, useState } from 'react';
import ModalCase from './ModalCase';
import { Link } from 'react-router-dom';
import Icon from '@mui/material/Icon';


export default function Dashboard() {
    const [filmData, setFilmData] = useState(false); // Track the film data to pass to ModalCase
  const [isOpen, setIsOpen] = useState(false);
  const [deleteFilmId, setDeleteFilmId] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

    const [APIData, setAPIData] = useState([])
    const baseURL = `https://653740ccbb226bb85dd2fd5c.mockapi.io/films`;
    useEffect(() => {
        getMovies()
    },)
    const getMovies = () => {
        fetch(baseURL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP Status: ${response.status}`)
                }
                return response.json()
            })
            .then((data) => {
                setAPIData(data)
            })
            .catch(error => console.log(error.message));
    }
    const handleDeleteClick = (id) => {
        setDeleteFilmId(id); // Set the ID of the movie to delete
        setOpen(true); // Open the delete confirmation dialog
    }
    const deleteMovies = () => {
        if (deleteFilmId) {
            fetch(`https://653740ccbb226bb85dd2fd5c.mockapi.io/films/${deleteFilmId}`, {
                method: 'DELETE'
            })
                .then((result) => {
                    result.json().then((response) => {
                        console.warn(response)
                        getMovies(); // Refresh the movie list after deletion
                    });
                })
                .then(() => {
                    setOpen(false);
                    setDeleteFilmId(null); // Clear the ID of the movie to delete
                });
        }
    }
    return (
        <div>

            <div className="dashboard">
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow style={{ backgroundColor: '#ff5500' }}>
                                <TableCell>ID</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell>Trailer</TableCell>
                                <TableCell>Year</TableCell>
                                <TableCell>Nation</TableCell>
                                <TableCell>Info</TableCell>
                                <TableCell>Cost</TableCell>
                                <TableCell style={{ paddingLeft: '30px' }}>Action</TableCell>
                                <TableCell><Link style={{ paddingLeft: '20px', textDecoration: 'none', color: 'green' }} to='/add'><Icon>add</Icon></Link></TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {APIData.map((data) => (
                                <TableRow
                                    key={data.id}
                                >
                                    <TableCell component="th" scope="row">
                                        {data.id}
                                    </TableCell>
                                    <TableCell>{data.Title}</TableCell>
                                    <TableCell>
                                        <img src={data.Image} alt={data.Title} style={{ width: '100px', height: '150px'}} />
                                    </TableCell>
                                    <TableCell>
                                        <a
                                            onClick={() => {
                                                setFilmData(data);
                                                setIsOpen(true);
                                            }}
                                        >
                                            Open
                                        </a>
                                    </TableCell>
                                    <TableCell>{data.Year}</TableCell>
                                    <TableCell>{data.Nation}</TableCell>
                                    <TableCell>{data.info}</TableCell>
                                    <TableCell>{data.cost}</TableCell>


                                    <TableCell><Link to={`/update/${data.id}`}><Button><EditIcon style={{ color: 'green' }} /></Button></Link></TableCell>
                                    <TableCell><Button><DeleteIcon style={{ color: 'red' }}  onClick={() => handleDeleteClick(data.id)} /></Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                {/* </Container> */}
                {APIData.map((film) => (
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Congraturation"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <AlertTitle>Do you want to delete this movie?</AlertTitle>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={deleteMovies} style={{ color: 'red' }}>Yes</Button>
                            <Button autoFocus onClick={handleClose}>
                                Close
                            </Button>
                        </DialogActions>
                    </Dialog>
                ))}

            </div>
            {filmData && (
        <ModalCase isOpen={isOpen} setIsOpen={ setFilmData} film={filmData} />
      )}
        </div>
    )
}