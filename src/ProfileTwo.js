import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Papa from "papaparse";
import { useEffect } from "react";
import copy from "copy-to-clipboard";

export const PostCard02 = props => {
  const [data, setData] = useState(null);

  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/1LLR8xxxO7LUFMvEzuAz_hA-t25MT7LmF_zpgvjJ-Yjs/gviz/tq?tqx=out:csv&&range=a:i",
      {
        header: false,
        download: true,
        // skipEmptyLines: true,
        complete: data => {
          console.log(data);
          const rowToFind = props.match.params.id; //ID
          data.data.forEach(row => {
            if (row[0] === rowToFind) {
              setData(row);
            }
          });
          // setData(data.data[17]);
        }
      }
    );
  }, []);

  function shareURL() {
    copy(window.location.href);
  }

  if (data == null) {
    return null;
  }

  function userImage(occupation) {
    if (occupation === "Software Engineer") {
      return "https://inteng-storage.s3.amazonaws.com/img/iea/nR6bkXZxwo/sizes/software-engineering-skills_md.jpg";
    } else if (occupation === "Marketer") {
      return "https://storage.needpix.com/rsynced_images/digital-marketing-1527799_1280.png";
    } else if (occupation === "Designer") {
      return "https://www.designer-daily.com/wp-content/uploads/2019/02/graphic-designer.jpg";
    }
  }

  return (
    <MuiThemeProvider
      theme={createMuiTheme({
        typography: {
          useNextVariants: true
        },
        overrides: PostCard02.getTheme(createMuiTheme())
      })}
    >
      <Card className={"MuiPostCard--02"}>
        <CardMedia className={"MuiCardMedia-root"} image={userImage(data[2])} />
        <CardContent className={"MuiCardContent-root"}>
          <Typography
            className={"MuiTypography--date"}
            variant={"overline"}
            style={{ fontFamily: "Muli", color: "#457b9d" }}
          >
            {`Vetted ${data[2]}`}
          </Typography>
          <Typography
            className={"MuiTypography--heading"}
            variant={"h6"}
            gutterBottom
          >
            {`${data[1]}`}
          </Typography>
          <Typography className={"MuiTypography--subheading"}>
            Experience: {data[3]}
            <br />
            Location: {data[4]}
            <br />
            Email: {data[8]}
          </Typography>
          <a href={data[6]} target="blank" style={{ textDecoration: "none" }}>
            <Button className={"MuiButton--readMore"}>LinkedIn</Button>
          </a>
          <Button className={"MuiButton--readMore"} id="url" onClick={shareURL}>
            Copy URL
          </Button>
        </CardContent>
      </Card>
    </MuiThemeProvider>
  );
};

PostCard02.getTheme = muiBaseTheme => ({
  MuiCard: {
    root: {
      "&.MuiPostCard--02": {
        borderRadius: muiBaseTheme.spacing.unit * 2, // 16px
        transition: "0.3s",
        boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
        width: "95%",
        position: "relative",
        maxWidth: 1000,
        marginLeft: "auto",
        margin: "auto",
        overflow: "initial",
        background: "white",
        display: "flex",
        alignItems: "center",
        padding: `${muiBaseTheme.spacing.unit * 2}px 0`,
        "&:hover": {
          transform: "translateY(3px)",
          boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)"
        },
        "& .MuiCardMedia-root": {
          flexShrink: 0,
          fontFamily: "Muli",
          width: "28%",
          paddingTop: "28%",
          transform: "translateX(-15%)",
          boxShadow: "4px 4px 20px 1px rgba(252, 56, 56, 0.2)",
          borderRadius: muiBaseTheme.spacing.unit * 2, // 16
          backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
          backgroundColor: muiBaseTheme.palette.common.white,
          overflow: "hidden",
          "&:after": {
            content: '" "',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "linear-gradient(147deg, #e63946 0%, #a8dadc 74%)",
            borderRadius: muiBaseTheme.spacing.unit * 2, // 16
            opacity: 0.5
          }
        },
        "& .MuiCardContent-root": {
          textAlign: "left",
          paddingLeft: 0,
          padding: muiBaseTheme.spacing.unit * 2
        },
        "& .MuiTypography--heading": {
          fontWeight: "bold",
          fontFamily: "Muli"
        },
        "& .MuiTypography--subheading": {
          marginBottom: muiBaseTheme.spacing.unit * 2,
          fontFamily: "Muli"
        },
        "& .MuiButton--readMore": {
          backgroundImage: "linear-gradient(147deg, #e63946 0%, #1d3557 64%)",
          boxShadow: "0px 4px 32px rgba(252, 56, 56, 0.4)",
          borderRadius: 100,
          paddingLeft: 24,
          paddingRight: 24,
          color: "#ffffff",
          marginRight: 10,
          fontFamily: "Muli"
        }
      }
    }
  }
});
PostCard02.metadata = {
  name: "Post Card II",
  description: "Personal Post",
  credit: "https://codemyui.com/gradient-card-ui-image-info-slider/"
};
