import { Alert, AlertTitle, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,  Grid, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as Yup from 'yup';

export default function Update() {
    const [APIData, setAPIData] = useState([])
    const baseUrl = 'https://653740ccbb226bb85dd2fd5c.mockapi.io/films';
    const [Title, setTitle] = useState("")
    const [Image, setImage] = useState("")
    const [clip, setClip] = useState("")
    const [Year, setYear] = useState("")
    const [Nation, setNation] = useState("")
    const [info, setInfo] = useState("")
    const [cost, setCost] = useState("")
    const [data, setData] = useState({})
    const name = useParams();


    useEffect(() => {
        fetch(baseUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP Status: ${response.status}`)
                }
                return response.json()
            })
            .then((data) => {
                setAPIData(data)
                const news = data.find(obj => {
                    return obj.id === name.id;
                });
                setData(news)
                setTitle(news.Title)
                setImage(news.Image)
                setClip(news.clip)
                setYear(news.Year)
                setNation(news.Nation)
                setInfo(news.info)
                setCost(news.cost)

            })
            .catch(error => console.log(error.message));

    }, [name.id]);



    const news = APIData.find(obj => {
        return obj.id === name.id;
    });
    console.log(news)
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    console.log(data.length)
    const formik = useFormik({
        initialValues: {
            title: "",
            image: "",
            trailer: "",
            year: "",
            nation: "",
            info: "",
            cost: "",
        },
        
        validationSchema: Yup.object({
            title: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
            img: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
            trailer: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
            year: Yup.number().required("Required.").min(10, "Must be integer"),
            nation: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
            info: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
        }),
    });





    const update = () => {
        let values = { Title , Image,clip,Year,Nation, info,cost }
        fetch(`https://653740ccbb226bb85dd2fd5c.mockapi.io/films/${name.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
            .then((result) => {
                result.json().then((response) => {
                    console.warn(response)
                })
            })
            .then(data => setOpen(true))
    }


    return (
        <div>
            <div className="contact">
                {
                    APIData?.length > 0
                        ? (
                            <Container className="" style={{margin: 10, padding: 20, backgroundColor: "wheat"}}>
                                <Grid container spacing={2} >
                                    <Grid xs={12} md={12} item>
                                        <form onSubmit={formik.handleSubmit}>
                                            <Grid container spacing={1}>
                                                {/* ID */}
                                                <Grid xs={12} sm={12} item>
                                                    <TextField
                                                        color="secondary"
                                                        placeholder="ID"
                                                        label="ID"
                                                        variant="outlined"
                                                        fullWidth
                                                        name="id"
                                                        value={APIData.length + 1}
                                                        onChange={formik.handleChange}
                                                        readonly
                                                        type="hidden"
                                                    />
                                                </Grid>
                                                {/* Title */}
                                                <Grid xs={12} item>
                                                    <TextField
                                                        color="secondary"
                                                        margin="dense"
                                                        name="title"
                                                        label="Title"
                                                        type="text"
                                                        fullWidth
                                                        variant="standard"
                                                        value={Title}
                                                        onChange={(e) => setTitle(e.target.value)}
                                                    />
                                                    <br />
                                                    {formik.errors.title && (<Typography variant="caption" color="red">{formik.errors.title}</Typography>)}
                                                </Grid>
                                                {/* Image */}
                                                <Grid item xs={12}>
                                                    <TextField
                                                        margin="dense"
                                                        name="image"
                                                        label="Image"
                                                        type="text"
                                                        fullWidth
                                                        variant="standard"
                                                        value={Image}
                                                        onChange={(e) => setImage(e.target.value)}
                                                    />

                                                    <br />
                                                    {formik.errors.img && (<Typography variant="caption" color="red">{formik.errors.img}</Typography>)}
                                                </Grid>
                                                {/* Video */}
                                                <Grid item xs={12}>
                                                    <TextField
                                                        margin="dense"
                                                        name="trailer"
                                                        label="Trailer"
                                                        type="text"
                                                        fullWidth
                                                        variant="standard"
                                                        value={clip}
                                                        onChange={(e) => setClip(e.target.value)}
                                                    />
                                                    <br />
                                                    {formik.errors.trailer && (<Typography variant="caption" color="red">{formik.errors.trailer}</Typography>)}
                                                </Grid>
                                                {/* Date */}
                                                <Grid item xs={12}>
                                                    <TextField
                                                        margin="dense"
                                                        name="time"
                                                        label="Time"
                                                        type="text"
                                                        fullWidth
                                                        variant="standard"
                                                        value={Year}
                                                        onChange={(e) => setYear(e.target.value)}
                                                    />
                                                    <br />
                                                    {formik.errors.time && (<Typography variant="caption" color="red">{formik.errors.time}</Typography>)}
                                                </Grid>
                                                 {/* Nation */}
                                                <Grid item xs={12}>
                                                    <TextField
                                                        margin="dense"
                                                        name="Nation"
                                                        label="Nation"
                                                        type="text"
                                                        fullWidth
                                                        variant="standard"
                                                        value={Nation}
                                                        onChange={(e) => setNation(e.target.value)}
                                                    />
                                                    <br />
                                                    {formik.errors.trailer && (<Typography variant="caption" color="red">{formik.errors.trailer}</Typography>)}
                                                    </Grid>
                                                {/* Content */}
                                                <Grid item xs={12}>
                                                    <TextField
                                                        color="warning"
                                                        label="Info"
                                                        multiline
                                                        placeholder="Type your content here"
                                                        variant="outlined"
                                                        fullWidth
                                                        name='info'
                                                        rows={4}
                                                        value={info}
                                                        onChange={(e) => setInfo(e.target.value)}
                                                    />
                                                </Grid>
                                                {/* Date */}
                                                <Grid item xs={12}>
                                                    <TextField
                                                        margin="dense"
                                                        name="cost"
                                                        label="Cost"
                                                        type="text"
                                                        fullWidth
                                                        variant="standard"
                                                        value={cost}
                                                        onChange={(e) => setCost(e.target.value)}
                                                    />
                                                    <br />
                                                    {formik.errors.cost && (<Typography variant="caption" color="red">{formik.errors.cost}</Typography>)}
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Button
                                                        variant="contained" size="small" type='submit'
                                                        onClick={update}
                                                    >
                                                        Save
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </form>
                                    </Grid>
                                </Grid>
                            </Container>
                        ) : (
                            <div className="empty">

                            </div>
                        )
                }
            </div>

            {/* Dialog */}
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
                        <Alert severity="success">
                            <AlertTitle>Update successfully!</AlertTitle>
                        </Alert>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button><Link to='/dashboard' style={{ textDecoration: "none" }}>Dashboard</Link></Button>
                    <Button
                        autoFocus
                        onClick={handleClose}
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

        </div>

    )
}
