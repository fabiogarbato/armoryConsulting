import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Estrutura from './estrutura'

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home/>}/>
                <Route path='/estrutura' element={ <Estrutura/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;