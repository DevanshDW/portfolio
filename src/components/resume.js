import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Skills from './skills';



class Resume extends Component {
  render() {
    return(
  <div className="bg-for-resume">
        <Grid>
          <Cell col={4}>


            <h2 style={{paddingTop: 'em'}}>Devansh Patel</h2>
            <h4 style={{color: '#061161'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #061161', width: '50%'}}/>
            <h5>Dedicated and efficient full stack web developer with 3+ years’ experience and exceptional troubleshooting skills for developing innovative solution. </h5>

            <h5 style={{color: '#061161'}}>Phone</h5>
            <hr style={{borderTop: '3px solid #061161', width: '50%'}}/>
            <h5> (289)-943-5049</h5>
            <h5 style={{color: '#061161'}}>Email</h5>
            <hr style={{borderTop: '3px solid #061161', width: '50%'}}/>
            <h5>devanshpatel9300@gmail.com</h5>


          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2 style={{color: '#9BC53D'}}>Education</h2>


            <Education
              startYear={2018}
              endYear={2020}
              schoolName="Durham College"
              schoolDescription="Computer Programmer"
               />
            <hr style={{borderTop: '3px solid #BFC0C0'}} />

              <h2 style={{color: '#9BC53D'}}>Skills</h2>
              <Skills
                  skill1="C#"
                  skill2="C++"
                  skill3="VB"
                  skill4="JAVA"
                  skill5="Python"
                  skill6="PHP"
                  skill7="COBOL"
                  skill8="HTML"
                  skill9="CSS"
                  skill10="JavaScript"
                  skill11="MySQL"
                  f1="ReactJS"
                  f2="NodeJS"
                  f3="JQuery"
                  f4="ASP.NET"
                  d1="SQL Server"
                  d2="MS Access"

              />



          </Cell>
        </Grid>
 </div>
    )
  }
}

export default Resume;
