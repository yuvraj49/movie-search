import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const styles = {
  card: {
    maxWidth: 345,
    paddingTop: '3%'

  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
};

class Display extends Component {

  constructor(props){
      super(props);
      this.handleClick = this.handleClick.bind(this);

  }


  handleClick(){
    //   this.props.goSearch()
  }

  render(){

    const { classes } = this.props;
  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} >
      <Card className={classes.card} style={{ alignItems:'center'}}>
        <img src={this.props.Poster} />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {this.props.Title}
          </Typography>
          <Typography component="p">
            {this.props.Plot}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick= {this.handleClick}>
            Back
          </Button>
        </CardActions>
      </Card>
    </div>
  );

  }



  
}

Display.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Display);
