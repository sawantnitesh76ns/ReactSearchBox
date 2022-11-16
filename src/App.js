import './App.css';
import Users from './Users';
import ToDos from './ToDos';

function App() {
  return (
    <div className='row'>
      <div className='column'>

        <Users />
      </div>
      <div className='column'>
        <ToDos />
      </div>
    </div>
  );
}

export default App;
