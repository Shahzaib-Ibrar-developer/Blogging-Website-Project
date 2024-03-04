import React, {Route, Routes} from 'react-router-dom';
import * as pages from "../utils/pages";
import { paths } from "../utils/paths";
const App =() =>{
return(
<Routes>
    <Route path={paths.home} element ={<pages.Home/>}/>
    <Route path={paths.login} element = {<pages.Login/>}/>
    <Route path={paths.register} element={<pages.Register/>}/>
    <Route path={paths.blogDetail('id')} element={<pages.BlogDetail/>}/>
    {/* {authors routes} */}
    <Route path={paths.createblog} element={<pages.CreateBlog/>}/>

</Routes>
)
}

export default App;