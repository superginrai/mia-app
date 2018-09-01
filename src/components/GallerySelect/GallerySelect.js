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
            galleryList: [{ name: 'Teahouse', year: '2001', image: 'https://2.api.artsmia.org/800/59614.jpg', description: `Japan's ruling warrior elite first held lavish tea gatherings in their formal reception halls. As tea masters like Murata Shukō (1422-1502), Takeno Jōō (1502-1555) and Sen Rikyū (1520-1591) began to advocate the practice of wabi (rustic) tea in the 16th century, separate, specially designed teahouses began to be built. Shukō introduced an architectural style called sōan, literally "grass hut." Sōan teahouses were small and constructed from humble materials including roughly milled lumber, bamboo, thatch, and earthen walls. In its simplicity, soan teahouses were meant to suggest a monk's retreat in the wilderness. The low entranceway required all participants to humble themselves as they entered the tearoom from the garden. Although a built-in alcove for the display of art was adopted from more formal structures, its size was greatly reduced--sufficient only to display a small painting or simple floral arrangement. The museum's teahouse is based on the Sa-an, an 18th century teahouse within the Zen monastery of Daitokuji in Kyoto that is now designated as one of Japan's "Important Cultural Properties." A small, carved signboard under the eaves of the museum's teahouse reads "Zenshin-an," Hermitage of the Meditative Heart -- a name bestowed on the structure by Fukushima Keidō, the current abbot of Tofukuji temple in Kyoto.`, checked: false },
            { name: 'Fine Wind, Clear Weather', year: 'c. 1830-1831', image: 'https://1.api.artsmia.org/800/7505.jpg', description: 'Woodblock print (nishiki-e); ink and color on paper', checked: false },
            { name: 'Tiger Emerging', year: 'early 18th century', image: 'https://6.api.artsmia.org/800/45653.jpg', description: `Tigers as a subject for painting became popular among Japanese artists as early as the 15th century when Chinese examples were brought to Japan. Within Zen monasteries, they became symbols of the earthbound spirit and were often paired with images of dragons, emblems of the soaring enlightened spirit. Among Japan's military elite, they were symbols of power, and artists often painted them among thick trunks of bamboo, a plant admired for its strength and resiliency. Within the context of an impressive reception hall, such large scale paintings contributed to the grandeur of the setting. Since tigers were not native to Japan, artists had to conjecture how they actually looked based on imported hides. As a result, they often appear to be overgrown domestic cats. As a teenager Kano Tsunenobu succeeded his father Naonobu (1607–1650) to become head of the Kobikichō atelier, the highest ranking of several branch studios of the prominent Kano House of painters. As such, Tsunenobu served as painter-in-attendance (goyō-eshi) to the ruling Tokugawa shoguns in the Japanese capital Edo (now Tokyo). One of the foremost painters of his day, Tsunenobu was also known for his vast knowledge of old Chinese and Japanese paintings and was widely active as an authenticator.`, checked: false },
            ],
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
                    {this.state.galleryList.map(gallery => <div style={{ gridColumnEnd: 'span 3' }}><GalleryCard gallery={gallery} addToTour={this.addToTour} /></div>)}
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