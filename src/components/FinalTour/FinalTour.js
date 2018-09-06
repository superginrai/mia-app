import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './FinalTour.css'
import Moment from 'react-moment';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';

const mapReduxStateToProps = (reduxState) => (
    { reduxState }
);

const styles = theme => ({
  card: {
      MaxWidth: 100,
  },
  media: {
      height: 100,
      paddingTop: '56.25%', // 16:9
  },
});

class FinalTour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image1: "https://1.api.artsmia.org/800/4866.jpg",
    };
    }
  
    render() {
      const { classes } = this.props;
      return (
        <div>
            <h1>My Tour</h1>
            <div className="date">
            <h2>Date</h2>
           <Moment format="YYYY/MM/DD" >{this.props.reduxState.date.toString()}</Moment>
            
              </div>
              <div className="time">
              <h2>Time</h2>
            <h2>{this.props.reduxState.startTime}AM-{this.props.reduxState.endTime}AM</h2>
            </div>
            <div className="exhibitions">
              Schedule
              </div>
            
<Table>
  <TableHead>
    <TableRow>
      <TableCell>Time</TableCell>
      <TableCell>Gallery</TableCell>
      </TableRow>
      </TableHead>
      
      <TableBody>

            {this.props.reduxState.tour.map((tourStop, i) => 
            <TableRow key={i} >
            <TableCell>{tourStop.time}</TableCell>
            <TableCell>  <Card className={classes.card}>
                    <CardHeader
                        // avatar={
                        //     <Avatar aria-label="MIA" className={classes.avatar}>
                        //         Mia
                        //     </Avatar>
                        // }
                        title={tourStop.name}
                    />
                    <CardMedia
                        className={classes.media}
                        image={tourStop.image}
                        title="Gallery Picture"
                    />
                    <CardContent>

                    </CardContent>
                </Card> </TableCell>
            </TableRow>
            )}
            </TableBody>
            </Table>
        </div>
      );
    }
  }

  FinalTour.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styling= withStyles(styles)(FinalTour)
  export default connect(mapReduxStateToProps)(styling);