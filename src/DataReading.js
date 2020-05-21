import React from "react";
import Papa from "papaparse";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const styles = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  borderRadius: 3,
  border: 0,
  color: "white",
  height: 48,
  padding: "0 30px",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
};

export class ReadingCSV extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };

    this.updateData = this.updateData.bind(this);
  }

  UNSAFE_componentWillMount() {
    const data = Papa.parse(
      "https://docs.google.com/spreadsheets/d/1LLR8xxxO7LUFMvEzuAz_hA-t25MT7LmF_zpgvjJ-Yjs/gviz/tq?tqx=out:csv&&range=a:h",
      {
        header: false,
        download: true,
        // skipEmptyLines: true,
        complete: this.updateData
      }
    );
  }

  componentDidMount() {
    window.RW.render();
  }

  updateData(result) {
    const data = result.data;
    // console.log(data);
    this.setState({ data: data });
  }

  getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTableBodyCell: {
          root: {
            backgroundColor: "#FFD2D2",
            fontFamily: "Muli",
            fontSize: 15,
            fontWeight: "bold"
          },
          header: {
            fontFamily: "Muli",
            backgroundColor: "red"
          }
        },
        MuiTableCell: {
          root: {
            // backgroundColor: "red"
            // fontFamily: "Muli"
          },
          head: {
            backgroundColor: "#FFD2D2",
            fontFamily: "Muli",
            fontSize: 14,
            fontWeight: "bold",
            color: "white"
            // borderRadius: 2
            // color: "green"
          }
        },
        MUIDataTableHeadCell: {
          fixedHeaderCommon: {
            backgroundColor: "#1d3557"
          }
        }
      }
    });

  // .MUIDataTableHeadCell-fixedHeaderCommon-2259

  render() {
    let occNameBro = this.props.name;
    let expBro = this.props.years;
    let locoBro = this.props.loc;

    const options = {
      responsive: "scrollFullHeight",
      download: false,
      print: false,
      filter: true,
      search: false,
      // sort: false,
      selectableRows: "none",
      rowsPerPage: 15
    };

    const columnsList = this.state.data[0];
    const dataList = this.state.data.splice(1);
    const dataList1 = dataList.map(row => {
      return row.push(
        <Link to={`/${row[0]}/${row[1]}`}>
          <button class="glow-on-hover">{`View ${row[1]}'s Profile`}</button>
        </Link>
      );
    });

    const showTable = dataList.map(rows => {
      return rows.splice(0, 1);
    });

    console.log(showTable);

    const columnsTest = [
      {
        name: "Name",
        options: {
          filter: false
        }
      },
      {
        name: "Occupation",
        options: {
          // filter: true,
          filterList: [occNameBro]
        }
      },
      {
        name: "Experience",
        options: {
          filter: true,
          filterList: [expBro],
          sort: true
        }
      },
      {
        name: "Location",
        options: {
          filter: true,
          filterList: [locoBro]
        }
      },
      {
        name: "Relocate",
        options: {
          filter: false,
          sort: false
        }
      },
      {
        name: "LinkedIn",
        options: {
          filter: false,
          sort: false,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <a href={value} target="blank">
                {value}
              </a>
            );
          }
        }
      },
      {
        name: "Last Company",
        options: {
          filter: false,
          sort: false
        }
      },
      {
        name: "Share",
        options: {
          filter: false,
          sort: false
        }
      }
    ];

    return (
      <div>
        <h2>
          Your results for [{occNameBro}s with {expBro} experience out of{" "}
          {locoBro}]
        </h2>
        {
          <MuiThemeProvider theme={this.getMuiTheme()}>
            <MUIDataTable
              title={`Talent List`}
              columns={columnsTest}
              data={dataList}
              options={options}
            />
          </MuiThemeProvider>
        }
        {/* </Route> */}
        <br />

        <div class="rw-ui-container" />
      </div>
    );
  }
}

// ReadingCSV.propTypes ={
// occNameBro: PropTypes.any,
// }
