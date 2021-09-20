// import type { NextApiRequest, NextApiResponse } from 'next'
// // gonna establish database connection on this page instead 
// // of doing it on every api call again and again
// import connecter from '../../libraries/connection'

// connecter()

// type Data = {
//   message: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ message: 'Stuff will be indexed in this page' })
// }