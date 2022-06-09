import React from 'react';
import {taikyokuSonoIchi} from "./katas/katas";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";

function App() {
    return (
        <main>
            <Typography variant="h2" component="div" gutterBottom>
                {taikyokuSonoIchi.name} ({taikyokuSonoIchi.grade})
            </Typography>
            <TableContainer>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nr.</TableCell>
                            <TableCell>Direction</TableCell>
                            <TableCell>Stance</TableCell>
                            <TableCell>Technique</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {taikyokuSonoIchi.steps.map((step, index) =>
                            <TableRow>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{step.direction}</TableCell>
                                <TableCell>{step.stance}</TableCell>
                                <TableCell>{step.limb} {step.level} {step.type}</TableCell>
                            </TableRow>)}
                    </TableBody>
                </Table>
            </TableContainer>
        </main>
    );
}

export default App;
