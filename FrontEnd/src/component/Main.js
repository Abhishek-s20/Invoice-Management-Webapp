import React, { useState } from 'react'
import HRCLogo from '../Assests/hrc.svg';
import ABCLogo from '../Assests/abc.svg';
import { Invoice } from './Invoice';
import { GridComp } from './GridComp';
import AddInvoiceComp from './AddInvoiceComp';
import Footer from './Footer';
import EditComp from './EditComp';
import DeleteComp from './DeleteComp';
import PredictComp from './PredictComp';
import AnalysisComp from './AnalysisComp';
import AdvSearch from './AdvSearch';
import { Srch } from './Srch';
import { Button } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

const Main = () => {
    const [state, setState] = useState([]);
    const [sendRequest, setSendRequest] = useState(true);
    const [search, setSearch] = useState('');
    const [avsrch, setAvsrch] = useState(false);
    const [invoice, setInvoice] = React.useState({business_code:"",cust_number:'200769623', clear_date:'', buisness_year:'2019-01-01', doc_id:'1930438491', posting_date:'', document_create_date:'', due_in_date:'', invoice_currency:'', document_type:'', posting_id:'', area_business:'', total_open_amount:'', baseline_create_date:'', cust_payment_terms:'', invoice_id:'1930438491', isOpen:'', aging_bucket:'', is_deleted:''})
    const [toggle, setToggle] = useState(false);
    const [tableData, setTableData] = React.useState([]);
    const refreshhojao=()=>
    {
        setSearch('');
        setAvsrch(false);
        (toggle===true)?setToggle(false):setToggle(true);

    }
  return (
    <>
    <div className='App'>
        <div className='header'>
            <img src={ABCLogo} alt="ABC" className='abclogo'/>
            <img src={HRCLogo} alt="HRC" className='hrclogo' />     
        </div>
        <div className="container">
            <Invoice/>
        </div>
    
        <div className="buttnSectn">
            <div className='leftSide'>
                <PredictComp state={state} tableData={tableData} toggle={toggle} setToggle={setToggle}/>
                <AnalysisComp/>
                <AdvSearch invoice={invoice} setInvoice={setInvoice} setAvsrch={setAvsrch}/>
                <Button variant="outlined" startIcon={<RefreshIcon/>}
                onClick={refreshhojao} 
                sx={{
                borderTopLeftRadius: '16px',
                borderBottomLeftRadius: '16px',
                borderTopRightRadius: '16px',
                borderBottomRightRadius: '16px',
                color:'white',
                borderColor:'transparent',
                }}
                >
                </Button>
                
            </div>
            <div className='cnter'>
                <Srch setSearch={setSearch} search={search} setSendRequest={setSendRequest} />        
            </div>
            <div className="rightSide">
                <AddInvoiceComp/>
                <EditComp state={state} toggle={toggle} setToggle={setToggle} />
                <DeleteComp state={state} toggle={toggle} setToggle={setToggle} />
            </div>        


            
        </div>
        
        <div className='MainContainer'>
            <div className="grid">
                <GridComp setState={setState} search={search} avsrch={avsrch} invoice={invoice} toggle={toggle} tableData={tableData} setTableData={setTableData}/>
                <Footer/>
            </div>
            
        </div>
        </div>
    </>

    
  )
}
export default Main;
