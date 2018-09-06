import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DepartmentCard from '../DepartmentCard/DepartmentCard.js'
import axios from 'axios';
import { connect } from 'react-redux';

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
            departments: [{ name: 'Art of Africa and the Americas', image: 'https://1.api.artsmia.org/800/4866.jpg', description: 'The Arts of Africa and the Americas Department is dedicated to the immense creativity of Native peoples across the world, from prehistory to the present. The collection has grown significantly since the department was founded more than 30 years ago, and now numbers more than 5,500 objects, including masterworks of sculpture, ceramics, textiles, metalsmithing, painting, basketry, and bead-, shell-, and quillwork, reflecting the diversity of these regions and cultures. Highlights of African art at the museum include a ceramic portrait head from the ancient civilization of Ife, a thousand-year-old wooden horse-and-rider from Djenne, and a cast bronze leopard and a carved ivory tusk, both from the eighteenth-century Kingdom of Benin. Other important pieces are a 4,500-year-old funerary door from ancient Egypt, a colorfully illustrated Ethiopian album from around 1700, and a rare Luba mask, one of only three known in the world. The Native American galleries are equally rich in examples of the highest quality art, including a rare Woodlands man’s shirt from the 1700s, an unparalleled 3,000-year old Olmec jade mask, and a beaded man’s shoulder pouch made in Minnesota in the early 1800s. Additional masterworks include the finely worked gold earspools from the ancient Andes, and a pair of Christian Louboutin heels covered with exquisite bead and quillwork by contemporary Native American artist Jamie Okuma (Luiseño/Shoshone-Bannock). The Oceanic collection contains world-class pieces, including a Maori post figure created in the 1840s, three funerary Malagan figures, and a 14-foot-tall ancestor pole from the Asmat.' },
            { name: 'Chinese, South and Southeast Asian Art', image: 'https://3.api.artsmia.org/800/12134.jpg', description: 'd'},
            { name: 'Contemporary Art', image: 'https://3.api.artsmia.org/800/1704.jpg', description: 'dsf' },
            { name: 'Decorative Arts, Textiles and Sculpture', image: 'https://2.api.artsmia.org/800/8024.jpg', description: 'as'},
            { name: 'Japanese and Korean Art', image: 'https://1.api.artsmia.org/800/7505.jpg', description: 'asdf'},
            { name: 'Paintings', image: 'https://4.api.artsmia.org/800/1348.jpg' },
            { name: 'Photography and New Media', image: 'https://4.api.artsmia.org/800/89324.jpg', description: 'sd'},
            { name: 'Prints and Drawings', image: 'https://3.api.artsmia.org/800/9194.jpg', description: 'asdf'},
            ],
            exhibitList: [],
        };
    }
    getDepartments = () => {
        axios.get('/api/exhibits')
          .then((response) => {
            console.log(response.data);
            this.setState({
              departments: response.data,
            });
          })
          .catch((error) => {
            console.log('error on get: ', error);
          })
      };

      chooseExhibit = () => {
        const action = {
            type: 'ADD_EXHIBIT',
            payload: this.state.exhibitList,
        };
        this.props.dispatch(action);
        this.props.history.push('/gallery');
    }

      addExhibit = (department) => {
        console.log("department": department);
        // if (gallery.checked === true) {
        console.log('taco click');
        this.state.exhibitList.push(department);
        console.log(this.state.exhibitList);
        this.chooseExhibit();
        // } else {
        //    console.log('No stops kids')
        // }
    };

    //sends the tourList array to redux for storage and advances you to finalTour component
  
    
      componentDidMount = () => {
        axios.get('https://search.artsmia.org/%20department:Photography%20and%20New%20Media')
        .then(json => console.log("json", json.data.hits))
      }
        // this.getDepartments();

    // chooseGallery = () => {
    //     this.props.history.push('/gallery');
    // };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <h1>Departments</h1>
                <div className={classes.container}>
                    {this.state.departments.map(department => <div style={{ gridColumnEnd: 'span 3' }}><DepartmentCard department={department} addExhibit={this.addExhibit}/></div>)}
                </div>
            </div>
        );
    }
}

Exhibits.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect()(withStyles(styles)(Exhibits))