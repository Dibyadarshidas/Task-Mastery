import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Tasks from './pages/Tasks';
import Create from './pages/Create';
import Layout from './components/Layout';

const theme = createMuiTheme({
palette:{
  primary:{
    main : "#9A30F7"
  }
},
typography : {
  fontFamily : 'Montserrat'
}
})

function App() {
  return (
    <ThemeProvider theme={theme} >
    <Router>
    <Layout>
    <Switch>
        <Route exact path="/">
          <Tasks/>
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </Layout>
    </Router>
    </ThemeProvider>
  );
}

export default App;
