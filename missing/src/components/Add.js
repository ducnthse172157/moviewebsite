import React, { useState } from 'react';
import { useFormik } from 'formik';
import { TextField, Typography, Grid, Dialog, DialogTitle, DialogContent, DialogContentText, Alert, AlertTitle, DialogActions } from '@mui/material';
import { Button, Container } from 'react-materialize';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

export default function Add() {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const baseUrl = 'https://653740ccbb226bb85dd2fd5c.mockapi.io/films';

    const formik = useFormik({
        initialValues: {
            Title: "",
            Image: "",
            clip: "",
            Year: "",
            Nation: "",
            info: "",
            cost: "",
        },
        validationSchema: Yup.object({
            Title: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
            Image: Yup.string().required("Required.").min(5, "Must be 5 characters or more"),
            clip: Yup.string().required("Required.").min(5, "Must be 5 characters or more"),
            Year: Yup.number().integer().typeError("Please enter a valid number"),
            Nation: Yup.string().required("Required."),
            info: Yup.string().required("Required.").min(5, "Must be 5 characters or more"),
            cost: Yup.number().required("Required."),
        }),
        onSubmit: (values) => {
            fetch(baseUrl, {
                method: 'POST',
                body: JSON.stringify({
                    Title: values.Title,
                    Image: values.Image,
                    clip: values.clip,
                    Year: parseInt(values.Year),
                    Nation: values.Nation,
                    info: values.info,
                    cost: parseInt(values.cost),
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(() => {
                    setOpen(true);
                })
                .catch((error) => console.log(error.message));
        },
    });

    return (
        <div>
            <Container>
                <form
                    onSubmit={formik.handleSubmit}
                    style={{ paddingBottom: "30px", backgroundColor: "wheat", minWidth: 300, margin: 20 }}
                >
                    <Grid container alignItems="center" justify="center" direction="column">
                        <h2 style={{ color: "Black" }}>Add A Film</h2>
                        <Grid item>
                            <TextField
                                sx={{ m: 1, minWidth: 300 }}
                                id="outlined-multiline-static"
                                label="Title"
                                name="Title"
                                value={formik.values.Title}
                                onChange={formik.handleChange}
                            />
                            <br />
                            {formik.errors.Title && formik.touched.Title && (
                                <Typography variant="caption" color="error">
                                    {formik.errors.Title}
                                </Typography>
                            )}
                        </Grid>
                        <Grid item>
                            <TextField
                                sx={{ m: 1, minWidth: 300 }}
                                id="outlined-multiline-static"
                                label="Image"
                                name="Image"
                                value={formik.values.Image}
                                onChange={formik.handleChange}
                            />
                            <br />
                            {formik.errors.Image && formik.touched.Image && (
                                <Typography variant="caption" color="error">
                                    {formik.errors.Image}
                                </Typography>
                            )}
                        </Grid>
                        <Grid item>
                            <TextField
                                sx={{ m: 1, minWidth: 300 }}
                                id="outlined-multiline-static"
                                label="Trailer"
                                name="clip"
                                value={formik.values.clip}
                                onChange={formik.handleChange}
                            />
                            <br />
                            {formik.errors.clip && formik.touched.clip && (
                                <Typography variant="caption" color="error">
                                    {formik.errors.clip}
                                </Typography>
                            )}
                        </Grid>
                        <Grid item>
                            <TextField
                                sx={{ m: 1, minWidth: 300 }}
                                id="outlined-multiline-static"
                                label="Year"
                                name="Year"
                                value={formik.values.Year}
                                onChange={formik.handleChange}
                            />
                            <br />
                            {formik.errors.Year && formik.touched.Year && (
                                <Typography variant="caption" color="error">
                                    {formik.errors.Year}
                                </Typography>
                            )}
                        </Grid>
                        <Grid item>
                            <TextField
                                sx={{ m: 1, minWidth: 300 }}
                                id="outlined-multiline-static"
                                label="Nation"
                                name="Nation"
                                value={formik.values.Nation}
                                onChange={formik.handleChange}
                            />
                            <br />
                            {formik.errors.Nation && formik.touched.Nation && (
                                <Typography variant="caption" color="error">
                                    {formik.errors.Nation}
                                </Typography>
                            )}
                        </Grid>
                        <Grid item>
                            <TextField
                                sx={{ m: 1, minWidth: 300 }}
                                id="outlined-multiline-static"
                                label="Info"
                                multiline
                                rows={4}
                                name="info"
                                value={formik.values.info}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.info && formik.touched.info && (
                                <Typography variant="caption" color="error">
                                    {formik.errors.info}
                                </Typography>
                            )}
                        </Grid>
                        <Grid item>
                            <TextField
                                sx={{ m: 1, minWidth: 300 }}
                                id="outlined-multiline-static"
                                label="Cost"
                                name="cost"
                                value={formik.values.cost}
                                onChange={formik.handleChange}
                            />
                            <br />
                            {formik.errors.cost && formik.touched.cost && (
                                <Typography variant="caption" color="error">
                                    {formik.errors.cost}
                                </Typography>
                            )}
                        </Grid>
                        <Grid item>
                            <Button variant="contained" size="small" type="submit">
                                Add
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Congratulations"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Alert severity="success">
                            <AlertTitle>Adding successful!</AlertTitle>
                        </Alert>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button>
                        <Link to="/dashboard" style={{ textDecoration: "none" }}>
                            Dashboard
                        </Link>
                    </Button>
                    <Button autoFocus onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
