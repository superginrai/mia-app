import React, { Component } from 'react';
import GalleryCard from '../GalleryCard/GalleryCard';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

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
            galleryList: [{ name: "Pretty Painting", checked: false, }, { name: "A Painting of a Taco", checked: false }],
            tourList: [],
        };
    }

    //checkbox adds the gallery to the tourList array (but currently continues to add it if you uncheck it)
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

    //sends the tourList array to redux for storage and advances you to finalTour component
    createTour = () => {
        const action = {
            type: 'ADD_TO_TOUR',
            payload: this.state.tourList,
        };
        this.props.dispatch(action);
        this.props.history.push('/finaltour');
    }

    render() {
        const { classes } = this.props;
        let content = null;

        content = (
            <div className="Galleries" >
                <div className={classes.container} >
                    {this.state.galleryList.map(gallery => <div style={{ gridColumnEnd: 'span 3' }}><GalleryCard gallery={gallery} name={gallery.name} checked={gallery.checked} addToTour={this.addToTour} /></div>)}
                </div>
                <button onClick={this.createTour}>ADD TO TOUR</button>
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

export default connect()(withStyles(styles)(GallerySelect));