/*
Programmwe Name : Twinke Ignasius - TP054187,  Bachelor in Infomation Technology with a specialism of Mobile Technology (APU3F2105IT-MBT)
Program Name    : styles.js
Description     : this is another way of beautify the content using .JS file. This file is mainly only used in productList.js styling
First Written on: Saturday, 20-Nov-2021
Edited on       : Tuesday, 04-Jan-2022
*/

import { makeStyles } from "@material-ui/core/styles";

//css in js way
export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
  },

  media: {
    height: 0,
    paddingTop: "56.25%", //16:9
  },

  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },

  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
