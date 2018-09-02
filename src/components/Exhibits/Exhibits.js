import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DepartmentCard from '../DepartmentCard/DepartmentCard.js'

const styles = theme => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: `${theme.spacing.unit * 3}px`,
    },
});

class Exhibits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departments: [{ name: 'Art of Africa and the Americas', image: 'https://1.api.artsmia.org/800/4866.jpg' },
            { name: 'Chinese, South and Southeast Asian Art', image: 'https://3.api.artsmia.org/800/12134.jpg' },
            { name: 'Contemporary Art', image: 'https://3.api.artsmia.org/800/1704.jpg' },
            { name: 'Decorative Arts, Textiles and Sculpture', image: 'https://2.api.artsmia.org/800/8024.jpg' },
            { name: 'Japanese and Korean Art', image: 'https://1.api.artsmia.org/800/7505.jpg' },
            { name: 'Paintings', image: 'https://4.api.artsmia.org/800/1348.jpg' },
            { name: 'Photography and New Media', image: 'https://4.api.artsmia.org/800/89324.jpg' },
            { name: 'Prints and Drawings', image: 'https://3.api.artsmia.org/800/9194.jpg' },
            ],
        };
    }

    chooseGallery = () => {
        this.props.history.push('/gallery');
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <h1>Departments</h1>
                <div className={classes.container}>
                    {this.state.departments.map(department => <div style={{ gridColumnEnd: 'span 3' }}><DepartmentCard department={department} chooseGallery={this.chooseGallery}/></div>)}
                </div>
            </div>
        );
    }
}

Exhibits.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Exhibits)