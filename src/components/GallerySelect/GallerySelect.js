import React, { Component } from 'react';

const mapStateToProps = state => ({
    user: state.user,
});

class GallerySelect extends Component {
    constructor(props) {
        super(props)

        this.state = {
            galleryList: [{name: "Pretty Painting"}, {name: "A Painting of a Taco"}],
        };
    }

    render() {
        let content = null;

        content = (
            <div className="Galleries">
            <br/>
                {this.state.galleryList.map(gallery => <p>{gallery.name}</p>)}

            </div>
        );

        return (
            <div>
                {content}
            </div>
        );
    }
}

export default (GallerySelect);