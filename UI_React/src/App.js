import React, { useState, useEffect} from 'react';
import "./styles.css"
import Heading from "components/Heading/Heading.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Charts from './views/Charts/Charts'
import Card from './components/Card/Card'
import CardHeader from './components/Card/CardHeader'
import CardBody from './components/Card/CardBody'
import CardText from "components/Card/CardText.js";
//const { useState } = React;
const ppl = 10

const App = () => {
 
  const [pc, setPc] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/testdynamo")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPc(data);
        //console.log("USE EFFECT: " + pc.length);
      });
  }, []);
  
  //console.log('OUTSIDE = ' + pc.length);
  /*, function() {
          console.log("TRY" + pc.length);
        }*/
  
  return (
    <>
    <div>{console.log("pc.length " + pc.length)}</div>
    <Heading title="People Counter Report" textAlign="center" />
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
        <Card>
            <CardHeader color="info" text>
              <CardText color="info">
                <h3>Name of the Building: School</h3>
              </CardText>
            </CardHeader>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
        <Card>
            <CardHeader color="warning" text>
              <CardText color="warning">
                <h3>Current Number of People Inside the Building: {ppl}</h3>
              </CardText>
            </CardHeader>
          </Card>
        </GridItem>
      </GridContainer>
    <Charts/>
    {/*console.log(pc.length)*/}
    </>
  );
}

export default App;