import React, { useState } from 'react'
import CustomAppBar from '../components/CustomAppBar'
import CustomSidebar from '../components/CustomSidebar'
// import Top from './Top'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'

const Top = () => {
	const [sideBarOpen, setSideBarOpen] = useState(true)
	const toggleDrawer = () => {
		setSideBarOpen(!sideBarOpen)
	}
	return (
		<div>
			<CustomAppBar title='保存コード一覧' toggleDrawer={toggleDrawer} />
			<Box sx={{ display: 'flex' }}>
				<CustomSidebar open={sideBarOpen} />
				<Outlet />
				{/* ここが置き換わる */}
			</Box>
		</div>
	)
}

export default Top