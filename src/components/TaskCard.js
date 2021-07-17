import task from '../tasks';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import {CardContent, CardHeader, Container, IconButton, Typography} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import Avatar from '@material-ui/core/Avatar';

const TaskCard = () => {
    const renderTasks = task.map((t)=>{
        return <Grid item md={4}>
        <Card>
        <CardHeader
            avatar = {
                <Avatar>
            R
          </Avatar>
            }
            title = {t.title}
            subheader = {t.issue}
            action = {
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            }
        />
        <CardContent>
            <Typography variant="p">
                {t.description}
            </Typography>
        </CardContent>
           
        
        </Card>
            </Grid>
    })
    return ( 
        <>
        <Container>
        <Grid container spacing={3} >
        {renderTasks}
        </Grid>
        </Container>
        </>
     );
}
 
export default TaskCard;