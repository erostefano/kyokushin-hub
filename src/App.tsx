import React from 'react';
import {taikyokuSonoIchi} from "./katas/katas";
import {AppBar, Card, CardContent, IconButton, Toolbar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

function App() {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <header>
                <h1 className="text-3xl m-4">
                    {taikyokuSonoIchi.name} ({taikyokuSonoIchi.grade})
                </h1>
            </header>
            <main>
                <section className="flex flex-wrap print:block">
                    {
                        taikyokuSonoIchi.steps.map((step, index) =>
                            <Card
                                variant="outlined"
                                className="basis-[300px] grow shrink p-4 print:break-inside-avoid print:w-[50%] print:float-left"
                            >
                                <img
                                    alt=''
                                    src="https://www.sonova.com/sites/default/files/styles/header_image_tablet/public/2019-07/shutterstock_253580635_square.jpg?itok=TwBeTHTY"
                                />
                                <CardContent>
                                    <p>
                                        <b>{index + 1}</b> {step.direction} {step.stance} {step.limb} {step.level} {step.type}
                                    </p>
                                </CardContent>
                            </Card>
                        )
                    }
                </section>
            </main>
        </>
    );
}

export default App;
