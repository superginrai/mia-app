import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    card: {
        height: 250,
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    button: {
        backgroundColor: '#fff',
        color: '#231f20',
        opacity: '8',
        borderBottom: '1px solid rgba(35,31,32, 0)',
        transition: 'all .2s ease-in-out',
        width: 250,
        height: 70,
    }
});

class DepartmentCard extends React.Component {
    state = {
        expanded: false
    };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Card className={classes.card}>

                    <CardMedia
                        className={classes.media}
                        image={this.props.department.image}
                        title="Department Picture"
                    />
                    <CardActions className={classes.actions} disableActionSpacing>
                        <Button className={classes.button} onClick={() => this.props.chooseGallery()}>{this.props.department.name}</Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

DepartmentCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DepartmentCard);