import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const columns = [{
    label: 'BU Number',
    key: 'buNumber'
}, {
    label: 'Name',
    key: 'name'
},{
    label: 'Age',
    key: 'age'
}, {
    label: 'NGO Name',
    key: 'ngoName'
},{
    label: 'Contact',
    key: 'phone'
}, {
    label: 'Alt. Contact',
    key: 'phoneAlt'
}]  
export const PatientList = ({rows = []}) => {
    return (
        <TableContainer component={Paper}>
            <Table className={''} aria-label="simple table">
            <TableHead>
                <TableRow>
                {columns.map(col => <TableCell>{col.label}</TableCell>)}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                <TableRow key={row.name}>
                    {columns.map(col => <TableCell align="">{row[col.key]}</TableCell>)}
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    )
}
