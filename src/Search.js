import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';


const styles = theme => ({
    button: {
        margin: 4,
      },
      input: {
        display: 'none',
      },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  }
});


class Search extends React.Component {
  state = {

  };

  constructor(props){
      super(props);
      this.state = {
        year: '',
        type: '',
        title: '',
        response: []
      }
  }

  handleClick =e => {
    this.apiCall()
}


goHome = () => {
    this.props.displayRes(this.state.response)

}






apiCall = () => {
    fetch(`https://www.omdbapi.com/?apikey=43bca0a4&y=${this.state.year}&type=${this.state.type}&t=${this.state.title}`)
.then(results => {
  return results.json()
})
.then(data => {
    // console.log(data)
//     if(data.Response === 'False'){
//         this.setState({response: data.Error})
//         this.setState({results: []})
//         // fiveMovies = ''
//     }else{
//             this.setState({results: data})
//             this.setState({responseObject: data})
//             console.log(this.state.responseObject)

//         // fiveMovies = ''
//         this.setState({response: ''})
//         this.setState(prevState => ({
//           dataResults: [...prevState.dataResults, data.Title]
//   }))
//    }

    this.setState({response: data})
    return data;
})
.then(data => {
    this.goHome()

    
})
.catch(function() {
    console.log("error");
});

}

  handleKeyUp = name => event => {
    this.setState({
      [name]: event.target.value
    });
    console.log(this.state)
  };

  render() {
    const { classes } = this.props;

    return (
        <div >
        <h2> OMDB SEARCH </h2>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop:'150px'}}>
            <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="title"
          label="Title"
          type="search"
          onKeyUp={this.handleKeyUp('title')}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="year"
          label="Year"
          type="search"
          onKeyUp={this.handleKeyUp('year')}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="type"
          label="Type"
          type="search"
          onKeyUp={this.handleKeyUp('type')}
          className={classes.textField}
          margin="normal"
        />
      </form>
      
      </div>
      <div >
      <Button variant="contained" color="primary" className={classes.button} onClick={this.handleClick}>
        Search
      </Button>
      
          </div>
          <div>
          <Button variant="contained" color="secondary" className={classes.button}>
        Last Five Search
      </Button>
      </div>

        </div>
      
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Search);
