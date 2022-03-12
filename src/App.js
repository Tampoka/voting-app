import './App.css';
import {ProductsList} from './components/ProductsList/ProductsList';

function App() {
    return (
        <div className="App">
            <header>
                <h1>Popular Products</h1>
            </header>
            <ProductsList/>
        </div>
    );
}

export default App;
