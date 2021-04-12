import React from "react";
import Workout from "@src/component/Workout";
import useSWR from "swr";

function Crossfit() {
    const {data: workouts} = useSWR(`/test/mock/workouts`)

    return (
        <>
            {workouts && workouts.map(workout => (
                <Workout key={workout.id} workout={workout}></Workout>
            ))}
        </>
    )
}

export default Crossfit;