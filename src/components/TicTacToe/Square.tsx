import { Button, Grid } from '@mui/material'

export default function Square(props:any) {
    return (
        <Grid item>
            <Button 
            variant="text"
            onClick={props.onClick}
            sx={{margin:"auto", padding:"50%"
            }}
            >
                {props.value? props.value: ""}
            </Button>
        </Grid>
    )
}