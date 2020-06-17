import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardActions, Button, CardMenu } from 'react-mdl';


class Projects extends Component {
  render() {

      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80) center / cover'}} >House-Hunter</CardTitle>
            <CardText style={{fontSize: 'large', backgroundColor:'#9BC53D', color:'black'}}>
             HouseHunter is real-estate website developed using php and sql.
            </CardText>
            <CardActions border>
             <a href='https://github.com/DevanshDW/House-Hunters'><Button className="btn-color" style={{fontSize: 'large', backgroundColor:'#DC4D49', color:'black'}}>GitHub</Button></a>

            </CardActions>
            <CardMenu style={{color: '#fff'}}>

            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://cdn.moreappslike.com/ru.appforge.durak-header.png) center / cover'}} >Durak</CardTitle>
            <CardText style={{fontSize: 'large', backgroundColor:'#9BC53D', color:'black'}}>
              Durak is a Russian card game developed with C#.
            </CardText>
            <CardActions border>
            <a href='https://github.com/DevanshDW/Durak'><Button className="btn-color" style={{fontSize: 'large', backgroundColor:'#DC4D49', color:'black'}}>GitHub</Button></a>


            </CardActions>
            <CardMenu style={{color: '#fff'}}>

            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://durhamcollege.ca/wp-content/uploads/DC-logo-700-by-400-1.jpg) center / cover'}} >College Database</CardTitle>
            <CardText style={{fontSize: 'large', backgroundColor:'#9BC53D', color:'black'}}>
              This is the college database witch holds the data of students, courses and faculties using java and sql.
            </CardText>
            <CardActions border>
            <a href='https://github.com/DevanshDW/CollegeDatabase'><Button className="btn-color" style={{fontSize: 'large', backgroundColor:'#DC4D49', color:'black'}}>GitHub</Button></a>


            </CardActions>
            <CardMenu style={{color: '#fff'}}>

            </CardMenu>
          </Card>
        </div>


      )

  }

}

export default Projects;
