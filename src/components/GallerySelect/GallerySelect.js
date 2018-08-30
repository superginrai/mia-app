import React, { Component } from 'react';
import GalleryCard from '../GalleryCard/GalleryCard';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: `${theme.spacing.unit * 3}px`,
    },
    button: {
        boxShadow: 'none',
        width: 175,
        height: 40,
    },
});

class GallerySelect extends Component {
    constructor(props) {
        super(props)

        this.state = {
            galleryList: [{ name: "Pretty Painting", checked: false }, { name: "A Painting of a Taco", checked: false }],
            tourList: [],
            finalTour: []
        };
    }

    addToTour = (gallery) => {
        console.log(gallery.checked, gallery);
        // if (gallery.checked === true) {
        console.log('taco click');
        this.state.tourList.push(gallery);
        console.log(this.state.tourList);
        // } else {
        //    console.log('No stops kids')
        // }
    };

    createTour = () => {
        console.log('I made a tour');
        this.setState({
            finalTour: [
                ...this.state.tourList
            ]
        })
        console.log('my tour is', this.state.finalTour);
    };

    componentDidUpdate() {
        console.log('my tour is', this.state.finalTour);
    }

    render() {
        const { classes } = this.props;
        let content = null;

        content = (
            <div>
            <div className="Galleries" >
                <div className={classes.container} >
                    {this.state.galleryList.map(gallery => <div style={{ gridColumnEnd: 'span 3' }}><GalleryCard gallery={gallery} name={gallery.name} checked={gallery.checked} addToTour={this.addToTour} /></div>)}
                </div>
                <Button color="primary" variant="contained" className={classes.button} onClick={this.createTour}>ADD TO TOUR</Button>
            </div>
            <div>
                <ul>
                    {this.state.finalTour.map(tourStop => <li>12:00 - {tourStop.name}</li>)}
                </ul>
            </div>
            </div>
        );

        return (
            <div>
                {content}
            </div>
        );
    }
}

GallerySelect.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GallerySelect);