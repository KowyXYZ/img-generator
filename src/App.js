
import {BrowserRouter} from 'react-router-dom'
import Root from './components/Root';

function App() {
  return (
    <BrowserRouter>
      <div className='w-full'>
        <Root/>
      </div>
    </BrowserRouter>
  );
}

export default App;
