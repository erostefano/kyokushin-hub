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
import TwitterIcon from '@mui/icons-material/Twitter';

function App() {
    const [drawer, setDrawer] = useState(false);
    return (
        <>
            <Drawer
                open={drawer}
                onClose={() => setDrawer(false)}
                className="h-full"
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
                <span className="grow"></span>
                <nav className="sticky">
                    <IconButton href="https://twitter.com/StefanoEro" target="_blank">
                        <TwitterIcon/> KickinDev
                    </IconButton>
                </nav>
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
                                    src={`/taikyokuSonoIchi/vlcsnap-${index}.png`}
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
