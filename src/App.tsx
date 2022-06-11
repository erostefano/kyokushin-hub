import React, {useState} from 'react';
import {katas, taikyokuSonoIchi} from "./katas/katas";
import {
    AppBar,
    Card,
    CardContent,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListSubheader,
    Toolbar
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

function App() {
    const [drawer, setDrawer] = useState(false);
    return (
        <>
            <Drawer
                open={drawer}
                onClose={() => setDrawer(false)}
            >
                <List>
                    <ListSubheader>Katas</ListSubheader>
                    {katas.map(kata =>
                        <ListItem>
                            <ListItemButton
                                onClick={() => setDrawer(false)}
                            >
                                <ListItemText>{kata.name}</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    )}
                </List>
            </Drawer>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={() => setDrawer(true)}
                    >
                        <MenuIcon/>
                        <h1 className="text-xl ml-4">
                            {taikyokuSonoIchi.name}
                        </h1>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <main>
                <section className="flex flex-wrap m-2 print:block">
                    {
                        taikyokuSonoIchi.steps.map((step, index) =>
                            <Card
                                variant="outlined"
                                className="basis-[300px] grow shrink m-2 print:break-inside-avoid print:w-[50%] print:float-left"
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
