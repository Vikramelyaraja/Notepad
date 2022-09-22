import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {Button, } from "@mui/material";
import Container from '@mui/material/Container';
import {useNavigate} from 'react-router-dom'


const Accordion = styled((props) => (

  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({

  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem',height:70, }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

function Faq() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const navigate =useNavigate();
  const back = () => {
       
      navigate('/');
}

  return (
    
     <div className='faq'>
         <div className='b2'>
          <Button style={{marginLeft:30,marginTop:50}} variant="contained"  onClick={() => back()}>Back</Button>
         </div>
 <Container className='slide1' >
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" style={{backgroundColor:'pink'}}>
          <Typography>1. How can I see my to-dos in Outlook Tasks?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          To-Do app can be integrated into the Outlook tasks easily. 
               All your to-do lists and Outlook tasks are stored on the Exchange Online servers. If you want to check your to-do lists from your Outlook app, 
               you need to sign in to both services with the same Microsoft account.
               Once logged in, you can check all to-do lists with your Outlook tasks.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" style={{backgroundColor:'pink'}}>
          <Typography>2. Why are there differences between my tasks in Outlook and To-Do?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          While To-Do can be integrated with Outlook, there are still many features that are not supported; this is the reason you may find some differences between your To-Do lists and Outlook tasks. Some of the Outlook tasks not supported by Microsoft To-Do app include- the option to format text in notes, priority levels of tasks, workhouse, task status, start and end dates, task completion status, and file attachments. While all your tasks and to-dos are stored safely on the servers, you might not see some of your task details like date, time, task priorities, etc., in Outlook tasks.
                Microsoft is working on the app and will soon be adding these features.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" style={{backgroundColor:'pink'}}>
          <Typography>3. How can I sync my account?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          While using the same Microsoft account will automatically sync your data between your devices, you can also do it manually. Go to the account settings of your To-Do app account and tap on Sync. To-Do updates the data after every 5 seconds, 
               and all changes are automatically updated and displayed on all your synced devices.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" style={{backgroundColor:'pink'}}>
          <Typography>4. What can I use To-Do for?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          To-Do is moreover like your digital daily diary where you can plan your entire day systematically. You can add the tasks list of anything you want, may it be your groceries list, your work project, a list of movies you want to watch, your travel itinerary, school homework, or anything else. The app helps you keep track of your to-do lists by adding reminders, due dates, and more. It is a free app, and you can add as many lists as you want. With every task, you can add a separate reminder and due dates and mark them done when completed.
      Furthermore, you can add extra notes to each of your tasks.
          </Typography>
        </AccordionDetails>
      </Accordion>

     
</Container>
      

    </div>
  );
}
export default Faq;
