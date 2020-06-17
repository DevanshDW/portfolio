import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>


            <div className="banner-text">
              <h1 style={{color: 'black'}}>Devansh Patel</h1>

            <hr/>

          <p style={{color: 'black'}}>Full Stack Web Developer</p>

        <div className="social-links">

            {/* Email */}
            <a href="mailto:devanshpatel9300@gmail.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-envelope" aria-hidden="true" />
            </a>

            {/* Phone Number*/}
            <a href="tel:289-943-5049" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-phone-square" aria-hidden="true" />
            </a>



          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/devansh-patel93/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/DevanshDW" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>




        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
