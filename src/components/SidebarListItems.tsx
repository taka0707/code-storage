import * as React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
// import HtmlIcon from '@mui/icons-material/Html'
// import CssIcon from '@mui/icons-material/Css'
// import JavascriptIcon from '@mui/icons-material/Javascript'
// import PhpIcon from '@mui/icons-material/Php'
import { FaHtml5 } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'
import { FaCss3Alt } from 'react-icons/fa'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'

// import DashboardIcon from '@mui/icons-material/Dashboard'
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link, useParams } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

type TData = {
  id: number
  name: string
}

const UserMode = () => {
  const [rows, setRows] = useState<TData[]>([])
  const params = useParams()
  const subjectId = params.subjectId

  // const url = import.meta.env.VITE_APP_URL

  // const setSubjectList = async () => {
  //   const res = await fetch('../../testData/test1.json')
  //   const data = await res.json()
  //   console.log(data)
  //   setRows(data.data)
  // }

  // useEffect(() => {
  // 	; (async () => {
  // 		await setSubjectList()
  // 		console.log(params)
  // 	})()
  // }, [])

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    ;(async () => {
      const res = await fetch('../../testData/test1.json')
      const data = await res.json()
      console.log(res)
      setRows(data.data)
    })()
  }, [])

  return (
    <>
      {rows.map((row) => (
        <ListItemButton
          sx={{ pr: 8 }}
          component={Link}
          to={`/codeType/${row.id}`}
          key={row.id}
          selected={subjectId === row.id.toString()}
        >
          <ListItemIcon>
            <Icons name={row.name} />
          </ListItemIcon>
          <ListItemText primary={row.name} />
        </ListItemButton>
      ))}
    </>
  )
}

const Icons = (props: { name: string }) => {
  switch (props.name) {
    case 'HTML':
      return <FaHtml5 />
    case 'CSS':
      return <FaCss3Alt />
    case 'JavaScript':
      return <SiJavascript />
    case 'TypeScript':
      return <SiTypescript />
    default:
      return <IntegrationInstructionsIcon />
  }
}

const MainListItems = () => {
  // const pathname = useLocation().pathname
  // const isAdmin = pathname.indexOf('admin') === 1
  return (
    <React.Fragment>
      <UserMode />
    </React.Fragment>
  )
}

export default MainListItems
