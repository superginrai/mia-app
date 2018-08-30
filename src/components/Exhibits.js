import React, { Component } from 'react';
import { connect } from 'react-redux';

class Exhibits extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }
    render() {
        return (
          <div>
    <h1>Exhibits</h1>
   <h2>Art of Africa and the Americas</h2>
   <h2>Chinese, South and Southeast Asian Art</h2>
   <h2>Contemporary Art</h2>
   <h2>Decorative Arts, Textiles and Sculpture</h2>
   <h2>Japanese and Korean Art</h2>
   <h2>Paintings</h2>
   <h2>Photography and New Media</h2>
   <h2>Prints and Drawings</h2>
          </div>
        );
      }
}

export default Exhibits