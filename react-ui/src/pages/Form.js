import { Button, Icon, InputAdornment, Link, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { isBUValid, createPatientRequest } from '../utils/api';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
    root: {
      padding: '30px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    buNumber: {
        display: 'flex',
    },
    loader: {

    },
    button: {
        height: 40
    },
    form: {
        width: 600
    },
    input: {
        marginBottom: 25
    },
    heading: {
        marginBottom: 40
    },
    button: {
        marginRight: 10,
        marginLeft: 10,
        width: '40%'
    }
  });

const states = {
    NO: 'no',
    DONE: 'done',
    PROGRESS: 'progress'
}

export const Form = () => {
    const classes = useStyles();
    const [buNumberValidated, setBuNumberValidated] = useState(states.NO)
    const [isBuNumberDuplicate, setIsBuNumberDuplicate] = useState(false)
    const [submitting, setSubmitting] = useState(states.NO)
    const [formData, setFormData] = useState({})
    const validate = async bu => {
        setBuNumberValidated(states.PROGRESS)
        try {
            await isBUValid(bu)
            setBuNumberValidated(states.DONE)
            setIsBuNumberDuplicate(false)
        } catch(err) {
            setBuNumberValidated(states.DONE)
            setIsBuNumberDuplicate(true)
        }
    }

    const submit = async () => {
        setSubmitting(states.PROGRESS)
        try {
            await createPatientRequest(formData)
            setSubmitting(states.DONE)
        } catch (err) {
            console.error(err)
            setSubmitting(states.DONE)
        }
        setTimeout(() => setSubmitting(states.NO), 3000)
        setFormData({
            name: "",
            age: "",
            buNumber: "",
            phone: "",
            phoneAlt: "",
            ngoName: "",
            remarks: "",
        })
    }
    const onChange = field => event => setFormData(data => ({ ...data, [field]: event.target.value }))
    const { name, age, phone } = formData

    return  <div className={classes.root}>
        <Typography className={classes.heading} variant="h5">
            Register a request
        </Typography>
        <form className={classes.form} onSubmit={e => e.preventDefault()} autoComplete="off">
        <div className={classes.buNumber}>
            <TextField 
                className={classes.input}
                error={isBuNumberDuplicate}
                helperText={isBuNumberDuplicate && 'BU Number is already registered'} 
                id="buNumber" 
                name="buNumber" 
                label="BU Number" 
                variant="outlined" 
                onBlur={e => validate(e.target.value)}
                onChange={onChange('buNumber')}
                value={formData.buNumber}
                fullWidth
            />
            { buNumberValidated === states.PROGRESS && <CircularProgress size={20}/>}
        </div>
        <div>
                <TextField 
                    className={classes.input}
                    id="name" 
                    name="name" 
                    label="Name" 
                    variant="outlined" 
                    onChange={onChange('name')}
                    value={name}
                    fullWidth
                />
                 <TextField 
                    className={classes.input}
                    id="age" 
                    name="age" 
                    label="Age" 
                    variant="outlined" 
                    onChange={onChange('age')}
                    value={age}
                    fullWidth
                />
                 <TextField 
                    className={classes.input}
                    id="phone" 
                    name="phone" 
                    label="Phone" 
                    variant="outlined" 
                    onChange={onChange('phone')}
                    value={phone}
                    fullWidth
                />
                 <TextField 
                    className={classes.input}
                    id="phoneAlt" 
                    name="phoneAlt" 
                    label="Alternate Phone" 
                    variant="outlined" 
                    onChange={onChange('phoneAlt')}
                    value={formData.phoneAlt}
                    fullWidth
                />
                 <TextField 
                    className={classes.input}
                    id="ngoName" 
                    name="ngoName" 
                    label="NGO Name" 
                    variant="outlined" 
                    onChange={onChange('ngoName')}
                    value={formData.ngoName}
                    fullWidth
                />
                 <TextField 
                    className={classes.input}
                    id="remarks" 
                    name="remarks" 
                    label="Remarks" 
                    variant="outlined" 
                    onChange={onChange('remarks')}
                    value={formData.remarks}
                    fullWidth
                />
                <div>
                    <Link href="/"><Button className={classes.button} variant="contained" size="large" color="tertiary">Cancel</Button></Link>
                    <Button  onClick={submit} type="submit" disabled={isBuNumberDuplicate} className={classes.button} variant="contained" size="large" color="primary"
                     endIcon={<>
                     {submitting === states.PROGRESS && <CircularProgress size={20}/>}
                    {submitting === states.DONE && <Icon>done</Icon>}
                    </>}
                    >Create</Button>
                    
                </div>
            </div>
           
        </form>
    </div>
}