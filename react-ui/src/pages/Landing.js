import { Button, makeStyles, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import {PatientList} from '../components/PatientList'
import { getPatientInfo } from '../utils/api'
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
    root: {
      padding: '30px',
    },
    topBar: {
        display: 'flex',
        marginBottom: 30
    },
    searchBarContainer: {
        flex: 1,
        paddingRight: 20
    },
    searchBar: {
        height: 20
    },
    button: {
        height: 40
    }
  });


export const Landing = () => { 
    const classes = useStyles();
    const [patientList, setPatientList] = useState([])
    const [searchText, setSearchText] = useState('')
    useEffect(async () => {
        const { data } = await getPatientInfo();
        setPatientList(data)
    }, [])

return <div className={classes.root}>
        <div id='#seacrh-action-box' className={classes.topBar}>
            <div className={classes.searchBarContainer}>  
                <TextField size="small" className={classes.searchBar} id="outlined-basic" label="Search" variant="outlined" fullWidth onChange={(e) => setSearchText(e.target.value || "")}/>
            </div>
            <div className='action'>
                <Button className={classes.button} variant="contained" size="medium" color="primary">
                    Add new
                </Button>
            </div>
        </div>
        <div id='#table-box'>
            {patientList.length == 0 && <LinearProgress />}
            <PatientList rows={patientList.filter(item => {
                return item.buNumber.toLowerCase().includes(searchText.toLowerCase()) || 
                    item.name.toLowerCase().includes(searchText.toLowerCase()) || 
                    item.phone.toLowerCase().includes(searchText.toLowerCase()) ||
                    item.phonealt.toLowerCase().includes(searchText.toLowerCase()) || 
                    item.age == searchText ||
                    item.ngoName.toLowerCase().includes(searchText.toLowerCase()) 
            })}/>
        </div>
    </div>
}