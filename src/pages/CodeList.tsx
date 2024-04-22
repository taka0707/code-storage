import { Box, ListItemButton, ListItemText } from '@mui/material'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../components/Loading'

const CodeList = () => {
  const params = useParams()
  const typeId = params.typeId ?? ''
  const [title, setTitle] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [codeList, setCodeList] = useState<{ id: number; title: string }[]>([])

  // const color = import.meta.env.VITE_APP_BACK_COLOR
  // const url = import.meta.env.VITE_APP_URL

  useEffect(() => {
    ;(async () => {
      setIsLoading(true)
      const formData = new FormData()
      formData.append('id', typeId)
      const res = await fetch('../../testData/test2.json')
      const data = await res.json()
      console.log(data)

      setTitle(data.data.title)
      setCodeList(data.data.codeList)
      setIsLoading(false)
    })()
  }, [typeId])

  return (
    <Box
      sx={{
        width: '100%',
        // pr: 30,
        backgroundColor: '#e6e6fa',
        position: 'relative',
      }}
    >
      {isLoading ? <Loading /> : ''}
      <Box sx={{ mx: 4, my: 4 }}>
        <Box fontSize="h4.fontSize" fontStyle="normal">
          {`${title}のコード一覧`}
        </Box>
        {codeList.map((row) => (
          <ListItemButton
            sx={{
              pr: 8,
              backgroundColor: '#fff',
              borderBottom: 'solid 1px #d3d3d3',
            }}
            component={Link}
            to={`/codeType/${typeId}/code/${row.id}`}
            key={row.id}
          >
            <ListItemText primary={row.title} />
          </ListItemButton>
        ))}
      </Box>
    </Box>
  )
}

export default CodeList
