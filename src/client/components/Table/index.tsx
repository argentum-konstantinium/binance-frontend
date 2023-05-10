import * as React from 'react';
import {Table as TableKit} from "@mui/material";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import s from './style.scss'


interface ITableCell {
    content: string | Element,
}

interface ITableBody {
    rows: ITableCell[][]
}

interface ITableWithListProps {
    label: string,
    head: ITableCell[],
    body: ITableBody,
}

const mapCell = (item: ITableCell, index: number) => {
    if (typeof item.content === 'string') {
        return <TableCell key={index}>{item.content}</TableCell>
    }
    const {content: Content} = item
    // @ts-ignore
    return <TableCell key={index}><Content/></TableCell>
}


export const Table = (props: ITableWithListProps) => {
    const {label, head, body} = props
    const headContent = head.map(mapCell);
    const bodyContent = body.rows.map((row, index) => {
        const rowContent = row.map(mapCell)
        return <TableRow key={index}>{rowContent}</TableRow>
    })
    return (
        <TableContainer component={Paper}>
            <TableKit sx={{minWidth: 650}} size="small" aria-label={label}>
                <TableHead>
                    <TableRow>
                        {headContent}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {bodyContent}
                </TableBody>
            </TableKit>
        </TableContainer>

    )
}