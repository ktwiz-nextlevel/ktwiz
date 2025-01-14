// import { NextApiRequest, NextApiResponse } from 'next'

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse,
// ) {
//   const { team, name } = req.query

//   if (typeof team !== 'string' || typeof name !== 'string') {
//     return res.status(400).json({ error: 'Invalid query parameters' })
//   }

//   const apiUrl = `http://54.180.228.165/api/player_img?team=${encodeURIComponent(team)}&name=${encodeURIComponent(name)}`

//   try {
//     const response = await fetch(apiUrl)
//     if (!response.ok) {
//       throw new Error('Failed to fetch player image')
//     }

//     const buffer = await response.arrayBuffer()
//     res.setHeader('Content-Type', 'image/jpeg')
//     res.status(200).send(Buffer.from(buffer))
//   } catch (error) {
//     console.error('Error fetching player image:', error)
//     res.status(500).json({ error: 'Failed to fetch player image' })
//   }
// }
