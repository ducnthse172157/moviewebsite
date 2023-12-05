import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { addUser } from './Users';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { TextField, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Typography, Grid } from '@mui/material';
import { Switch, Button } from 'react-materialize';
import {Container} from 'react-materialize';
import * as Yup from 'yup';
export default function Contact() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            typeoferrors: 0,
            message: "",
            agree: false

        },

        validationSchema: Yup.object({
            name: Yup.string().required("Required.").min(5, "Must be 5 characters or more"),
            email: Yup.string().required("Required.").email("Invalid email"),
            phone: Yup.number().integer().typeError("Please enter a valid number"),
            typeoferrors: Yup.number().integer().typeError("Please select a type of errors."),
            message: Yup.string().required("Required.").min(10, "Must be 10 characters or more"),
            agree: Yup.boolean().oneOf([true], "The terms and conditions must be accepted.")
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },


    });
    useEffect(() => {
        setName(formik.values.name);
        setEmail(formik.values.email);
        setMessage(formik.values.message);
    }, [formik.values.name, formik.values.email, formik.values.message]);
    return (
        <Container className='contact-menu'>
            <form onSubmit={formik.handleSubmit}>
                <Grid container alignItems="center" justify="center" direction="column">
                    <Grid item>
                        <TextField
                            sx={{ m: 1, minWidth: 400 }}
                            id="outlined-multiline-static"
                            label="Name"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}

                        />
                        <br />
                        {formik.errors.name && (<Typography variant="caption" color="red">{formik.errors.name}</Typography>)}
                    </Grid>
                    <Grid item>
                        <TextField sx={{ m: 1, minWidth: 400 }}
                            label="Email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}

                        />
                        <br />
                        {formik.errors.email && (<Typography variant="caption" color="red">{formik.errors.email}</Typography>)}
                    </Grid>
                    <Grid item>
                        <TextField sx={{ m: 1, minWidth: 400 }}
                            label="Phone"
                            name="phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                        />
                        <br />
                        {formik.errors.phone && (<Typography variant="caption" color="red">{formik.errors.phone}</Typography>)}
                    </Grid>
                    <Grid item>
                        <FormControl sx={{ m: 1, minWidth: 400 }}>
                            <InputLabel id="demo-simple-select-autowidth-label">Type of errors</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                label="Type of errors"
                                name="typeoferrors"
                                value={formik.values.program}
                                onChange={formik.handleChange}

                            >
                                <MenuItem value={0}>
                                    <em>Please select error</em>
                                </MenuItem>
                                <MenuItem value={1}>Film Error</MenuItem>
                                <MenuItem value={2}>Title Error</MenuItem>
                                <MenuItem value={3}>Link Error</MenuItem>
                                <MenuItem value={4}>Lagging Error</MenuItem>

                            </Select>

                        </FormControl>
                        <br />
                        {formik.errors.program && (<Typography variant="caption" color="red">{formik.errors.program}</Typography>)}
                    </Grid>
                    <Grid item>
                        <TextField sx={{ m: 1, minWidth: 400 }}
                            id="outlined-multiline-static"
                            label="Message"
                            multiline
                            rows={4}
                            name='message'
                            value={formik.values.message}
                            onChange={formik.handleChange}
                        />
                    </Grid>
                    {formik.errors.message && (<Typography variant="caption" color="red">{formik.errors.message}</Typography>)}
                    <Grid item>
                        <FormControlLabel control={<Switch />} label="Agree to terms and conditions." name='agree'
                            value={formik.values.agree} onClick={formik.handleChange} />
                        {formik.errors.agree && (<Typography variant="caption" color="red">{formik.errors.agree}</Typography>)}
                    </Grid>
                    <Grid item>
                        <Button onClick={() => {
                            dispatch(addUser({ id: 0, name: name, email: email, message: message }));
                        }}
                            className="buttoncontact"
                            type='submit'
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container >

    )
}
