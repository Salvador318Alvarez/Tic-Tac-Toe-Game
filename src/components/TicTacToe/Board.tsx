import { Grid } from '@mui/material';
import { Component } from 'react';
import Square from './Square';

export default class Board extends Component {
    renderSquare(i:any){
        return <Square value={this.props.squares[i]}
        onClick={()=>this.props.onClick(i)}
        />
    }
    render() {
        return (
            <Grid container spacing={0} >
            
                <Grid item xs={4} sx={{borderRight:'solid', borderBottom:'solid'}}>
                    {this.renderSquare(0)}
                </Grid>

                <Grid item xs={4} sx={{borderRight:'solid', borderBottom:'solid'}}>
                    {this.renderSquare(1)}
                </Grid>

                <Grid item xs={4} sx={{borderBottom:'solid'}}>
                    {this.renderSquare(2)}
                </Grid>
                
                <Grid item xs={4} sx={{borderRight:'solid', borderBottom:'solid'}}>
                    {this.renderSquare(3)}
                </Grid>

                <Grid item xs={4} sx={{borderRight:'solid', borderBottom:'solid'}}>
                    {this.renderSquare(4)}
                </Grid>

                <Grid item xs={4} sx={{borderBottom:'solid'}}>
                    {this.renderSquare(5)}
                </Grid>

                <Grid item xs={4} sx={{borderRight:'solid'}}>
                    {this.renderSquare(6)}
                </Grid>

                <Grid item xs={4} sx={{borderRight:'solid'}}>
                    {this.renderSquare(7)}
                </Grid>

                <Grid item xs={4}>
                    {this.renderSquare(8)}
                </Grid>
                
            </Grid>
        )
    }
}