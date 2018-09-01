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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Checkbox from '@material-ui/core/Checkbox';
import mia from '../../images/mia.png'

const styles = theme => ({
    card: {
        MaxWidth: 550,
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
        backgroundColor: '#4F4F4F',
    },
});

class GalleryCard extends React.Component {
    state = {
        gallery: this.props.gallery,
        checkedForTour: this.props.gallery.checked,
        expanded: false
    };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
        console.log('ccccccc', this.state.checkedForTour)
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Card className={classes.card}>
                    <CardHeader
                        // avatar={
                        //     <Avatar aria-label="MIA" className={classes.avatar}>
                        //         Mia
                        //     </Avatar>
                        // }
                        action={

                            <Checkbox checked={this.state.checkedForTour} onChange={this.handleChange('checkedForTour')} onClick={() => this.props.addToTour(this.props.gallery)} />
                        }
                        title={this.props.gallery.name}
                    />
                    <CardMedia
                        className={classes.media}
                        image={this.props.gallery.image}
                        title="Gallery Picture"
                    />
                    <CardContent>

                    </CardContent>
                    <CardActions className={classes.actions} disableActionSpacing>

                        <IconButton
                            className={classnames(classes.expand, {
                                [classes.expandOpen]: this.state.expanded,
                            })}
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.expanded}
                            aria-label="Show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph variant="body2">
                                {this.props.gallery.description}
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </div>
        );
    }
}

GalleryCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GalleryCard);