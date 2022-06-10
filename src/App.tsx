import React from 'react';
import {taikyokuSonoIchi} from "./katas/katas";
import {Card, CardContent} from "@mui/material";

function App() {
    return (
        <>
            <h1 className="text-3xl m-4">
                {taikyokuSonoIchi.name} ({taikyokuSonoIchi.grade})
            </h1>
            <main>
                <section className="flex flex-wrap">
                    {
                        taikyokuSonoIchi.steps.map((step, index) =>
                            <Card variant="outlined" className="basis-1/3 m-4">
                                <img
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
