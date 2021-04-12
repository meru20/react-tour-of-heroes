import {Route, Switch} from 'react-router-dom';
import DashboardPage from '../pages/Dashboard';
import HeroesPage from '../pages/Heroes';
import HeroPage from '../pages/Hero';
import ArchivePage from '../pages/Archive';
import Navbar from '../components/Navbar';

const AppRouter = () => {
    return (
        <div >
        <Navbar/>
        <div className='container'>
        <Switch>
        <Route path='/' exact component={DashboardPage}/>
        <Route path='/heroes' exact component={HeroesPage}/>
        <Route path ='/Archive' exact component={ArchivePage}/>
        <Route path='/heroes/:heroId' component={HeroPage}/>
      </Switch>
      </div>
      </div>
    ) 
};
export default AppRouter;