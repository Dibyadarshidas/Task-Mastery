import React from 'react';
import {Typography} from '@material-ui/core';
import TaskCard from '../components/TaskCard';
export default function Notes() {
  return (
    <div>
      <Typography variant="p">
     <TaskCard/>
    </Typography>
    </div>
  )
}
