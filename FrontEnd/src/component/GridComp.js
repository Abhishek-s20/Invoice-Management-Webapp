import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';


// import axios from 'axios';






export const GridComp = (props) => {

  const columns = [
    { field: 'sl_no', headerName: 'Sl no', width: 55 },
    { field: 'business_code', headerName: 'Business Code', width: 120 },
    { field: 'cust_number', headerName: 'Cust Number', width: 120 },
    { field: 'name_customer', headerName: 'Name Customer', width:120},
    { field: 'clear_date',  headerName: 'Clear Date', width: 120 },
    { field: 'buisness_year', headerName: 'Buisness Year', width: 120 },
    { field: 'doc_id', headerName: 'Doc Id', width: 100 },
    { field: 'posting_date', headerName: 'Posting Date', width: 110 },
    { field: 'document_create_date', headerName: 'Document Create Date', width: 170 },
    { field: 'due_in_date', headerName: 'Due In Date', width: 110 },
    { field: 'invoice_currency', headerName: 'Invoice Currency', width: 130 },
    { field: 'document_type', headerName: 'Document Type', width: 120 },
    { field: 'posting_id', headerName: 'Posting Id', width: 110 },
    // { field: 'area_business', headerName: 'Area Business', width: 110 },
    { field: 'total_open_amount', headerName: 'Total Open Amount', width: 140 },
    { field: 'baseline_create_date', headerName: 'Baseline Create Date', width: 150 },
    { field: 'cust_payment_terms', headerName: 'Cust Payment Terms', width: 160 },
    { field: 'invoice_id', headerName: 'Invoice Id', width: 160 },
    { field: 'isOpen', headerName: 'Is Open', width: 110 },
    { field: 'aging_bucket', headerName: 'Aging Bucket', width: 110 },
    { field: 'is_deleted', headerName: 'Is Deleted', width: 110 },
  ];
  
  // var bgColors = {
  //   "background":"#283a46"
  // }
  const {setState, search, avsrch, invoice, toggle, tableData, setTableData} = props;  
  // const [tableData, setTableData] = React.useState([]);
  const [filterModel, setFilterModel] = React.useState({
    items: [
      {
        columnField: 'cust_number',
        operatorValue: 'contains',
        value: '',
      }
    ],
  },);
  
  // const [tableData, setTableData] = useState([])
  
  
  useEffect(()=>{
    console.log('hi');
    if(search.length > 0)
    {
      fetch(`http://localhost:8080/highradius/search?cust_number=${search}`)
      .then((data)=>data.json())
      .then((data)=>setTableData(data));
    }
    if(search.length===0 && avsrch===false)
      fetch("http://localhost:8080/highradius/ExportAll")
      .then((data)=>data.json())
      .then((data)=>setTableData(data));
      
    if(avsrch===true)
    {
      fetch(`http://localhost:8080/highradius/AdvSearch?cust_number=${invoice.cust_number}&buisness_year=${invoice.buisness_year}&invoice_id=${invoice.invoice_id}&doc_id=${invoice.doc_id}`)
      .then((data)=>data.json())
      .then((data)=>setTableData(data));
    }
      
    },[toggle, search, search.length, avsrch, invoice.cust_number, invoice.buisness_year, invoice.doc_id, invoice.invoice_id]);
  
    const [pageSize, setPageSize] = React.useState(5);
    
  return (

    <>
    
    <div style={{ height: 400, width: '100%', backgroundColor: '#283a46' }} className="GridComp">
        
        
        <DataGrid
        getRowId={(row) => row.sl_no}
        rows={tableData}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={[5, 10, 15]}
        onPageSizeChange={(newPage) => setPageSize(newPage)}
        pagination
        {...tableData}
        checkboxSelection
        onSelectionModelChange={(ids) => {

          // const selectedIDs = new Set(ids);
          // const selectedRowData = tableData.filter((row) =>
          //   selectedIDs.has(row.sl_no));
          // console.log(selectedRowData);
          setState(ids);

          }}
        filterModel={filterModel}
        onFilterModelChange={(newFilterModel) => setFilterModel(newFilterModel)}
      

        disableSelectionOnClick
        autoHeight={false}
        headerHeight={80}
        disableColumnMenu={false}
        
        sx={{
          border:'none',
          
          color:'white',
          borderColor:'wheat',
        '& .MuiDataGrid-cell:hover': {
          color: 'primary.main',
        },
        '&.MuiDataGrid-root .MuiDataGrid-iconSeparator':{
          color: 'transparent',
        },
       
        '& .MuiDataGrid-columnHeadersInner':
        {
          backgroundColor:"#283a46",
        },
        '& .MuiDataGrid-virtualScroller':
        {
          backgroundColor:'rgb(43 68 86)',
        },
        ".css-rtrcn9-MuiTablePagination-root": {
      color: "White"},
      '& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon':{color:'White'},
      '.css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root':{color:'white'},
      '.css-1pe4mpk-MuiButtonBase-root-MuiIconButton-root':{
        color:'white',
      },
      
      }}
      
      />
    );
      
    </div>
    </>
  );
}
