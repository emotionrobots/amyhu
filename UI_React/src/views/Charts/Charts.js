/*eslint-disable*/
import React, { useState, useEffect} from 'react';
// react plugin for creating charts
import ChartistGraph from "react-chartist";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";

// core components
import Heading from "components/Heading/Heading.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import {
  roundedLineChart,
  straightLinesChart,
  simpleBarChart,
  colouredLineChart,
  multipleBarsChart,
  colouredLinesChart,
  pieChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-pro-react/views/chartsStyle.js";

const useStyles = makeStyles(styles);

var h7,h8,h9,h10,h11,h12,h13,h14,h15,h16,h17,h18,h19,h20,h21,h22,h23=0;
var monday = 0, tuesday = 0, wednesday = 0, thursday = 0, friday = 0, saturday = 0, sunday = 0;
var jan=0, feb=0, mar=0, apr=0, may=0, jun=0, jul=0, aug=0, sep=0, oct=0, nov=0, dec=0;
// && (pc[i].time).localeCompare("9")==0 

export default function Charts() {
  const classes = useStyles();
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
  var dateObj = new Date();
  var weekdayNumber = dateObj.getDay();
  if(weekdayNumber==0)
    weekdayNumber = 7;
  //////////////////Preparing Data for the WeekDay Chart////////////////////
  for(var i=pc.length-1; i>=0; i--)
  {
    if(weekdayNumber>=1)
    {
      if((pc[i].datetime).localeCompare("Monday")==0)
     {
       monday = pc[i].enter;
       break;
      }
    } 
    else
      monday = 0;
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(weekdayNumber>=2)
    {
      if((pc[i].datetime).localeCompare("Tuesday")==0)
     {
       tuesday = pc[i].enter;
       break;
      }
    } 
    else
      tuesday = 0;
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(weekdayNumber>=3)
    {
      if((pc[i].datetime).localeCompare("Wednesday")==0)
     {
       wednesday = pc[i].enter;
       break;
      }
    } 
    else
      wednesday = 0;
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(weekdayNumber>=4)
    {
      if((pc[i].datetime).localeCompare("Thursday")==0)
     {
       thursday = pc[i].enter;
       break;
      }
    } 
    else
      thursday = 0;
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(weekdayNumber>=5)
    {
      if((pc[i].datetime).localeCompare("Friday")==0)
     {
       friday = pc[i].enter;
       break;
      }
    } 
    else
      friday = 0;
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(weekdayNumber>=6)
    {
      if((pc[i].datetime).localeCompare("Saturday")==0)
     {
       saturday = pc[i].enter;
       break;
      }
    } 
    else
      saturday = 0;
  }
  for(var i=pc.length-1; i>=0; i--)
  {
    if(weekdayNumber>=7)
    {
      if((pc[i].datetime).localeCompare("Sunday")==0)
     {
       sunday = pc[i].enter;
       break;
      }
    } 
    else
      sunday = 0;
  }
  //////////////Preparing Data for the Month of the Year Chart////////////////////

  
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <Timeline />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>
                Number of People Entered/Exited During Each Hour of the Day <small>- Multiple Bar Chart</small>
              </h4>
            </CardHeader>
            <CardBody>
              <ChartistGraph
                data={multipleBarsChart.data}
                type="Bar"
                options={multipleBarsChart.options}
                listener={multipleBarsChart.animation}
              />
            </CardBody>
            <CardFooter stats className={classes.cardFooter}>
              <h6 className={classes.legendTitle}>Legend</h6>
              <i className={"fas fa-circle " + classes.info} /> Enter{` `}
              <i className={"fas fa-circle " + classes.danger} /> Exit
              {` `}
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="rose">
              <ChartistGraph
                className="ct-chart-white-colors"
                data={{
                  labels: ["M", "T", "W", "T", "F", "S", "S"],
                  series: [[monday, tuesday, wednesday, thursday, friday, saturday, sunday]]
                }}
                type="Line"
                options={roundedLineChart.options}
                listener={roundedLineChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Number of People Entered on Each Day of the Week</h4>
              <p className={classes.cardCategory}>Rounded Line Chart</p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="info">
              <ChartistGraph
                className="ct-chart-white-colors"
                data={simpleBarChart.data}
                type="Bar"
                options={simpleBarChart.options}
                responsiveOptions={simpleBarChart.responsiveOptions}
                listener={simpleBarChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Number of People Entered in Each Month of the Year</h4>
              <p className={classes.cardCategory}>Simple Bar Chart</p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
