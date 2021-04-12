import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    media: {
        height: 140
    }
})

const Workout = ({workout}) => {
    const classes = useStyles();

    return (
        (workout &&
            <Card className={classes.root}>
                <CardActionArea>
                    {/*<CardMedia className={classes.media}>*/}
                    {/*</CardMedia>*/}
                    <CardContent>
                        {/*<Typography gutterBottom variant="h5" component="h2">*/}
                            {/*{workout.wod.}*/}
                        {/*</Typography>*/}
                        <Typography variant="body2" color="textSecondary" component="p">
                            {workout.wod ? workout.wod.workout : "-"}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn more
                    </Button>
                </CardActions>
            </Card>
        )
    )
};

export default Workout;

