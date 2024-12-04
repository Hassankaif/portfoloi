// import '.. /App.css'
import Userinfo from './Userinfo';
import Dashboard from './Dashboard';
function App(){

    return<>
    <div>
    <h1> DASHBOARD</h1>
    <h1> child level 1</h1>
        <Userinfo>
            <Dashboard />
        </Userinfo>
    </div>
    </>
}


export default App
