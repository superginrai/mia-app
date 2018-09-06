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
            galleryList: [{ name: 'G250: Africa', time: '10:00AM-10:20AM', year: '2001', image: 'https://1.api.artsmia.org/800/4866.jpg', 
            description: 'Highlights of African art at the museum include a ceramic portrait head from the ancient civilization of Ife, a thousand-year-old wooden horse-and-rider from Djenne, and a cast bronze leopard and a carved ivory tusk, both from the eighteenth-century Kingdom of Benin. Other important pieces are a 4,500-year-old funerary door from ancient Egypt, a colorfully illustrated Ethiopian album from around 1700, and a rare Luba mask, one of only three known in the world.', url: 'https://collections.artsmia.org/search/room:%22G256%22', checked: false },
            { name: 'G254: Africa', time: '10:20AM-10:40AM', year: 'c. 1830-1831', image: 'https://1.api.artsmia.org/800/1937.jpg', 
            description: 'A mask sometimes embodies ideals of physical and moral beauty or goodness. Here, the high forehead, downcast eyes, and elaborate coiffure suggest the pinnacle of female attractiveness among the Mende people. One of the very few types of masks worn by women in Africa, it accompanied young girls who had undergone initiation into the Sande association that prepared them for adulthood. The dyed raffia attached to the mask was part of a larger costume that would have entirely covered the dancer.', url: 'https://collections.artsmia.org/search/room:%22G254%22', checked: false },
            { name: 'G259: Americas', time: '10:40AM-11:00AM', year: 'c. 1830-1831', image: 'https://1.api.artsmia.org/800/13621.jpg', 
            description: 'This bag is all that remains of the extensive collection of Indian objects gathered by Major Lawrence Taliaferro, Indian agent at Fort Snelling from 1819 to 1839. Taliaferro tried to keep peace between the Anishinabe and the Dakota who lived in the area and made certain both groups were treated fairly by the whites. This object may have been a gift to him from the Anishinabe. It was made at a time of artistic transition, when established styles of quillwork on leather were being combined with the new beading techniques. The geometric patterns in the beadwork are characteristic of art found in the western Great Lakes region. The bag was most likely used to carry things necessary for smoking, such as flint, a pipe and tobacco.', url: 'https://collections.artsmia.org/search/room:%22G259%22', checked: false },
            { name: 'G260: Americas',  time: '10:40AM-11:00AM', year: 'c. 1830-1831', image: 'https://1.api.artsmia.org/800/5487.jpg', 
            description: 'Cacao - or chocolate - was a sign of wealth and power among the ancient Maya. Cacao seeds were used as currency, and ground cacao mixed with water and chiles was a stimulant consumed at celebrations. Archaeological evidence shows cacao beverages were consumed at least as early as 1000 BCE This example from nearly 2 millennia later is one of only three known of a type of squat jar with screw-on, locking lids. The lid that once fit this vessel has not been preserved. It has four glyphs in the ancient Maya language around the outside, three describe the place of origin, owner, and shape of the vessel; the fourth - illustrated above - is the glyph for "cacao," confirming its ancient function as a chocolate pot.', url: 'https://collections.artsmia.org/search/room:%22G260%22', checked: false },
            { name: 'G261: Americas',  time: '10:40AM-11:00AM', year: 'c. 1830-1831', image: 'https://1.api.artsmia.org/800/2227.jpg', 
            description: 'In the late 1800s, Northwest Coast peoples observed an elaborate calendar of religious and social obligations. Among wealthy families, these observances required special costumes and ornaments. Women wove or decorated dress clothing and dance costumes, while men carved wooden masks and accoutrements.This rattle, made in the shape of a bird, was part of a man\'s ceremonial dress. It represents Raven, who in the mythic past stole the sun from its hiding place and situated it in the heavens, establishing the universe we know today. On the raven\'s back a tiny human figure confronts a smaller bird, his tongue joined to the creature\'s beak. This union implies transition and communication between the human and animal worlds. Filled with small pebbles, the rattle helped keep the rhythm of a sacred dance.', url: 'https://collections.artsmia.org/search/room:%22G261%22', checked: false },
            { name: 'G256: Oceania',  time: '10:40AM-11:00AM', year: 'c. 1830-1831', image: 'https://1.api.artsmia.org/800/2138.jpg', 
            description: 'This is a ritual bis pole created to honor a recently deceased, important member of society. The family commissions an artist to carve a pole out of a single piece of wild nutmeg tree, representing clan members who have passed on. Its shape evokes a canoe, the main mode of transportation for the living and the dead, and a vehicle to take the spirit to the next world. The pole is displayed at a great community ceremony and a mock battle is staged around its base to appease any restless spirits. Then it is ritually disposed of, its purpose complete.', url: 'https://collections.artsmia.org/search/room:%22G256%22', checked: false },
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
                <h1>Choose Your Galleries</h1>
                <div className={classes.container} >
                    {this.state.galleryList.map(gallery => <div style={{ gridColumnEnd: 'span 3' }}>
                    <GalleryCard gallery={gallery} addToTour={this.addToTour} /></div>)}
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