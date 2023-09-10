import React, { useState, useEffect, useMemo, useContext } from "react";
import { Box, Typography, capitalize, grid2Classes } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import Context from "../context/StateContext";
import Skeleton from "@mui/material/Skeleton";
import Animations from "../components/Loading";
import TableActions from "../components/TableActions";
import AddTrainee from "./AddTrainee";
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
  "& .MuiDataGrid-cell": {},
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

const ShowTrainee = ({singleTrainee}) => {
  const { selectedLab } = useContext(Context);
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([]);
  const [update , setUpdate] = useState(false);
  const [params, setParams] = useState(null);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    if(!singleTrainee){
      fetchData();
    }
    else{
      setData(singleTrainee)
    }
  }, []);

  const fetchData = async () => {
    setLoading(true)
    await fetch(`${BASE_URL}/show/${selectedLab}`)
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => {
        setLoading(false)
        setData(data); // Update the state with the received data
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
        field: "fullName",
        headerName: "Full name",
        width: 200,
        valueGetter: (params) =>
          `${params.row.basicDetails.first_name || ""} ${
            params.row.basicDetails.last_name || ""
          }`,
      },
      {
        field: "first_name",
        headerName: "First name",
        width: 200,
        valueGetter: (params) => params.row.basicDetails.first_name,
      },
      {
        field: "last_name",
        headerName: "Last name",
        width: 200,
        valueGetter: (params) => params.row.basicDetails.last_name,
      },
      {
        field: "contact_no",
        headerName: "Contact",
        width: 200,
        valueGetter: (params) => params.row.basicDetails.contact_no,
        sortable: false,
        filterable: false,
      },
      {
        field: "email",
        headerName: "Email",
        width: 200,
        valueGetter: (params) => params.row.basicDetails.email,
        sortable: false,
        filterable: false,
      },
      {
        field: "current_address",
        headerName: "Current Address",
        width: 200,
        valueGetter: (params) => params.row.addressDetails.current_address,
        sortable: false,
        filterable: false,
      },
      {
        field: "permanent_address",
        headerName: "Permanent Address",
        width: 200,
        valueGetter: (params) => params.row.addressDetails.permanent_address,
        sortable: false,
        filterable: false,
      },
      {
        field: "tenth_School",
        headerName: "Tenth School Name",
        width: 200,
        valueGetter: (params) => params.row.academicDetails.tenth_School,
        sortable: false,
      },
      {
        field: "tenth_grades",
        headerName: "Tenth Grades (%)",
        type: "number",
        width: 200,
        valueGetter: (params) => params.row.academicDetails.tenth_grades,
      },
      {
        field: "twelth_School",
        headerName: "Twelth School Name",
        width: 200,
        valueGetter: (params) => params.row.academicDetails.twelth_School,
        sortable: false,
      },
      {
        field: "twelth_grades",
        headerName: "Twelth Grades (%)",
        type: "number",
        width: 200,
        valueGetter: (params) => params.row.academicDetails.twelth_grades,
      },
      {
        field: "btech_institute",
        headerName: "BTech Institute",
        width: 200,
        valueGetter: (params) => params.row.academicDetails.btech_institute,
      },
      {
        field: "btech_yop",
        headerName: "BTech year of passing",
        width: 200,
        valueGetter: (params) => params.row.academicDetails.btech_yop,
      },
      {
        field: "btech_sem1_grades",
        headerName: "SEM1 Grades in %",
        width: 100,
        valueGetter: (params) => params.row.academicDetails.btech_sem1_grades,
      },
      {
        field: "btech_sem2_grades",
        headerName: "SEM2 Grades in %",
        width: 100,
        valueGetter: (params) => params.row.academicDetails.btech_sem2_grades,
      },
      {
        field: "btech_sem3_grades",
        headerName: "SEM3 Grades in %",
        width: 100,
        valueGetter: (params) => params.row.academicDetails.btech_sem3_grades,
      },
      {
        field: "btech_sem4_grades",
        headerName: "SEM4 Grades in %",
        width: 100,
        valueGetter: (params) => params.row.academicDetails.btech_sem4_grades,
      },
      {
        field: "btech_sem5_grades",
        headerName: "SEM5 Grades in %",
        width: 100,
        valueGetter: (params) => params.row.academicDetails.btech_sem5_grades,
      },
      {
        field: "btech_sem6_grades",
        headerName: "SEM6 Grades in %",
        width: 100,
        valueGetter: (params) => params.row.academicDetails.btech_sem6_grades,
      },
      {
        field: "btech_sem7_grades",
        headerName: "SEM7 Grades in %",
        width: 100,
        valueGetter: (params) => params.row.academicDetails.btech_sem7_grades,
      },
      {
        field: "btech_sem8_grades",
        headerName: "SEM8 Grades in %",
        width: 100,
        valueGetter: (params) => params.row.academicDetails.btech_sem8_grades,
      },
      {
        field: "mtech_institute",
        headerName: "MTech Institute",
        width: 200,
        valueGetter: (params) => params.row.academicDetails.mtech_institute,
      },
      {
        field: "mtech_yop",
        headerName: "MTech year of passing",
        width: 200,
        valueGetter: (params) => params.row.academicDetails.mtech_yop,
      },
      {
        field: "mtech_sem1_grades",
        headerName: "SEM1 Grades in %",
        width: 100,
        valueGetter: (params) => params.row.academicDetails.mtech_sem1_grades,
      },
      {
        field: "mtech_sem2_grades",
        headerName: "SEM2 Grades in %",
        width: 100,
        valueGetter: (params) => params.row.academicDetails.mtech_sem2_grades,
      },
      {
        field: "mtech_sem3_grades",
        headerName: "SEM3 Grades in %",
        width: 100,
        valueGetter: (params) => params.row.academicDetails.mtech_sem3_grades,
      },
      {
        field: "mtech_sem4_grades",
        headerName: "SEM4 Grades in %",
        width: 100,
        valueGetter: (params) => params.row.academicDetails.mtech_sem4_grades,
      },
      {
        field: "mentor_name",
        headerName: "Mentor name",
        width: 200,
        valueGetter: (params) => params.row.trainingDetails.mentor_name,
      },
      {
        field: "training_field",
        headerName: "Training Field",
        width: 200,
        valueGetter: (params) => params.row.trainingDetails.training_field,
      },
      {
        field: "training_start",
        headerName: "Training Start",
        width: 200,
        valueGetter: (params) => params.row.trainingDetails.training_start,
      },
      {
        field: "training_end",
        headerName: "Training End",
        width: 200,
        valueGetter: (params) => params.row.trainingDetails.training_end,
      },
      {
        field: "training_period",
        headerName: "Training Period",
        width: 200,
        valueGetter: (params) => params.row.trainingDetails.training_period,
      },
      {
        field: "training_status",
        headerName: "Training Status",
        width: 200,
        valueGetter: (params) => params.row.trainingDetails.training_status,
      },
      {
        field: "name",
        headerName: "Department name",
        width: 200,
        valueGetter: (params) => params.row.departmentDetails.name,
      },
      {
        headerName: 'Actions',
        renderCell: (params) => <TableActions {...{params}} traineeAction={true} departmentAction={false} setUpdate={setUpdate} setParams={setParams}/>,
      },
    ],
    []
  );

  return (
    <>
      {loading && <Animations/>}
      {!update ? (
        <Box sx={{ width: "85%", margin: "auto", height: "auto" }}>
        {!singleTrainee ? (
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
          List of all the trainees in <b>{selectedLab}</b>
        </Typography>
        ) : (
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
          Trainee Found in <b>{selectedLab}</b>
        </Typography>
        )}
        
        <StripedDataGrid
          getRowId={(row) => row._id}
          rows={data}
          columns={columns}
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
            columns: {
              columnVisibilityModel: {
                _id: false,
              },
            },
          }}
          pageSizeOptions={[5, 10, 25]}
          rowHeight={90}
          columnHeaderHeight={90}
          sx={{
            borderRadius: "15px",
            overflow: "scroll",
            width: 1,
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
      ):(
        <AddTrainee update={true} params={params}/>
      )}
    </>
  );
};

export default ShowTrainee;
