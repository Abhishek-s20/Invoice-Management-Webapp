import * as React from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function PredictComp(props) {
  const {state, tableData, toggle, setToggle} = props;
  const [result, setResult] = React.useState([]);
  const handleSubmit = ()=>{
    result.map((curElement) =>{      
      fetch(`http://localhost:8080/highradius/PredictServ?aging_bucket=${curElement.aging_bucket}&doc_id=${curElement.doc_id}`)
      
    });
    toggle===true?setToggle(false):setToggle(true);    
  }
  const handleClickOpen = async ()=> {
    try {
      const selectedIDs = new Set(state);
    // console.log(tableData.filter((row) => state.has(row.sl_no)));
    const selectedRowData = tableData.filter((row) =>
    selectedIDs.has(row.sl_no));
    // console.log(selectedRowData);
      const response = await axios.post(`http://127.0.0.1:5000/predict`, selectedRowData);
      // console.log(response.data);
      setResult(response.data);
      console.log(result);
      handleSubmit();
    } catch (err) {
      console.log(err);
    }
  }

  // const handleClickOpen = () => {
  //   // axios.post(`http://127.0.0.1:5000/`)
  //   const selectedIDs = new Set(state);
  //   // console.log(tableData.filter((row) => state.has(row.sl_no)));
  //   const selectedRowData = tableData.filter((row) =>
  //   selectedIDs.has(row.sl_no));
  //   console.log(selectedRowData);
  //   const response = await axios.post('http://127.0.0.1:5000', selectedRowData)
  //   console.log(response.data);
  //   // console.log(selectedIDs); 

  // };
  return (
    <div>
      <span className='addBttn'>
      <Button variant="outlined" onClick={handleClickOpen} disabled={props.state.length===0}
      sx={{
        borderTopLeftRadius: '16px',
        borderBottomLeftRadius: '16px',
        color:'white',
        borderColor:'#14aff1',
        width:'160px',
        backgroundColor:'#14aff1',
        
      }}
      style={{
        borderTopRightRadius:'1px',
        borderBottomRightRadius:'1px',
      }}>
        PREDICT
      </Button>
      </span>
    </div>
  );
}
