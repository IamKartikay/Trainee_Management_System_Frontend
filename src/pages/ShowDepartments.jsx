import React, { useState, useEffect, useMemo, useContext } from "react";
import { Box, Typography, capitalize, grid2Classes } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import Context from "../context/StateContext";
import Skeleton from "@mui/material/Skeleton";
import Animations from "../components/Loading";
import TableActions from "../components/TableActions";
import AddDepartment from "./AddDepartment";
import BASE_URL from '../components/urlProvider'

const ODD_OPACITY = 0.2;

export const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  "& .MuiDataGrid-columnHeaderTitle": {
    fontWeight: "bold",
  },
  "& .MuiDataGrid-menuIconButton": {
    color: "white",
  },
  "& .MuiDataGrid-sortIcon": {
    color: "white",
  },
  "& .MuiDataGrid-columnHeader": {
    backgroundColor: "#191D88",
    color: "white",
  },
  "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
    borderRight: "1px solid #f0f0f0",
  },
  "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
    borderBottom: "1px solid #f0f0f0",
  },
  "& .MuiDataGrid-cell": {
    textAlign:'center'
  },
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: "#C5DFF8",
    "&:hover, &.Mui-hovered": {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
    "&.Mui-selected": {
      backgroundColor: alpha(
        theme.palette.primary.main,
        ODD_OPACITY + theme.palette.action.selectedOpacity
      ),
      "&:hover, &.Mui-hovered": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY +
            theme.palette.action.selectedOpacity +
            theme.palette.action.hoverOpacity
        ),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  },
}));


const ShowDepartments = () => {
    const { selectedLab , setSelectedLab } = useContext(Context);
    const [loading, setLoading] = useState(false)
    const [update , setUpdate] = useState(false);
    const [params, setParams] = useState(null);
    const [data, setData] = useState([]);


    useEffect(() => {
        fetchData();
    }, []);
  
    const fetchData = async () => {
      if(!selectedLab)
      {
        const lab = JSON.parse(localStorage.getItem('labname'))
        if(lab)
        {
          setSelectedLab(lab)
        }
      }
      setLoading(true)
      await fetch(`${BASE_URL}/showDepartments`,{
        method: 'PUT',
        body: JSON.stringify({selectedLab}),
        headers:{
            'Content-Type': 'application/json'
        }
      })
        .then((response) => response.json()) 
        .then((data) => {
            console.log(data);
            if(data.length == 0){
                alert('no departments found.')
            }
          setLoading(false)
          setData(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    const columns = useMemo(
        () => [
          {
            headerName: 'ID',
            field: '_id',
          },
          {
            field: "name",
            headerName: "Department Name",
            flex:0.8,
            minWidth: 90,
            headerAlign: 'center',
          },
          {
            headerName: 'Actions',
            renderCell: (params) => <TableActions {...{params}} traineeAction={false} departmentAction={true} setUpdate={setUpdate} setParams={setParams}/>,
            flex: 0.2,
            minWidth: 30,
            headerAlign: 'center',
          },
        ],
        []
      );

  return (
    <>
    {loading && <Animations/>}
    {
      update ? (
        <AddDepartment update={true} params={params}/>
      ):(
        <Box sx={{ width: "85%", margin: "auto", height: "auto" }}>
        
        <Typography
          variant="h3"
          component="h3"
          sx={{
            textAlign: "center",
            mt: 10,
            mb: 3,
            textTransform: "capitalize",
          }}
        >
          List of all the departments in <b>{selectedLab}</b>
        </Typography>
        
        <StripedDataGrid
          getRowId={(row) => row._id}
          rows={data}
          columns={columns}
          initialState={{
            columns: {
              columnVisibilityModel: {
                _id: false,
              },
            },
          }}
          rowHeight={90}
          columnHeaderHeight={90}
          
          rowSelection={false}
          pagination={false}
          sx={{
            width:'50%',
            margin:'auto',
            borderRadius: "15px",
            overflow: "scroll",
            fontSize: "20px",
            fontFamily: "sans-serif",
            "& .MuiDataGrid-row:hover": {
              color: "#241468",
              fontWeight: "bold",
            },
          }}
          getRowSpacing={(params) => ({
            top: params.isFirstVisible ? 0 : 5,
            bottom: params.isLastVisible ? 0 : 5,
          })}
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
          }
        />
      </Box>
      )
    }
  </>
  )
}

export default ShowDepartments


