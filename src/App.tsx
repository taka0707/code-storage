import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Admin from './pages/admin/Admin'
// import SubjectMaster from './pages/admin/master/SubjectMaster'
// import RegistTask from './pages/admin/master/RegistTask'
import Top from './pages/Top'
import CodeList from './pages/CodeList'
import CodeForm from './pages/CodeForm'
// import Lesson from './pages/Lesson'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Top />}>
					<Route
						path='/codeType/:typeId'
						element={<CodeList />}
					/>
					<Route path='codeType/:typeId/code/:codeId' element={<CodeForm />} />
					
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App