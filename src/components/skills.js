import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Skills extends Component {
  render() {
    return(
      <Grid>
          <Cell col={5}>
              <h4>Programming Languages</h4>
              <h5>
                  <Cell col={11}>
                  <li>{this.props.skill1}</li>
                  <li>{this.props.skill2}</li>
                  <li>{this.props.skill3}</li>
                  <li>{this.props.skill4}</li>
                  <li>{this.props.skill5}</li>
                  <li>{this.props.skill6}</li>
                  <li>{this.props.skill7}</li>
                  <li>{this.props.skill8}</li>
                  <li>{this.props.skill9}</li>
                  <li>{this.props.skill10}</li>
                  <li>{this.props.skill11}</li>
                   </Cell>
              </h5>
          </Cell>
          <Cell col={4}>

              <h4>Frameworks</h4>
              <h5>
                  <li>{this.props.f1}</li>
                  <li>{this.props.f2}</li>
                  <li>{this.props.f3}</li>
                  <li>{this.props.f4}</li>
              </h5>
          </Cell>
          <Cell col={3}>
              <h4>Database Management</h4>
              <h5>
                  <li>{this.props.d1}</li>
                  <li>{this.props.d2}</li>

              </h5>
          </Cell>

      </Grid>
    )
  }
}

export default Skills;
