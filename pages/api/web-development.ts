// Note to self ==> Gonna try to define the type in a different way in 
// every component or module to practise and learn more 
// import type { NextApiRequest, NextApiResponse } from 'next'

// type WebNotes = {
//   webdevnotes: object[]
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<WebNotes>
// ) {
//     // let webdevnotes: { 
//     //     title: string, 
//     //     description: string, 
//     //     notes: string, 
//     //     source: string
//     // }
//     // trying to find a solution for the serialize error
//   //   let webdevnotes: { 
//   //     title: string, 
//   //     description: string, 
//   //     notes: string, 
//   //     source: string
//   // }[]
//   // let webdevnotes: object[]
//     res.status(200).json({ webdevnotes: [
//       { title: 'book1', description: 'desc1', notes: 'notes1', source: 'source1' }, 
//       { title: 'book2', description: 'desc2', notes: 'notes2', source: 'source2' }, 
//       { title: 'book3', description: 'desc3', notes: 'notes3', source: 'source3' }, 

//     ] 
// })}

// just commeting instead of deleting to be able to see the what I ahve already tried to fix the error
import type { NextApiRequest, NextApiResponse } from 'next'

type WebNotes = {
  webdevnotes: object[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<WebNotes>
) {
    // let webdevnotes: { 
    //     title: string, 
    //     description: string, 
    //     notes: string, 
    //     source: string
    // }
    // trying to find a solution for the serialize error
  //   let webdevnotes: { 
  //     title: string, 
  //     description: string, 
  //     notes: string, 
  //     source: string
  // }[]
  // let webdevnotes: object[]
    res.status(200).json({ webdevnotes: [
      { title: 'book1', description: 'desc1', notes: 'notes1', source: 'source1' }, 
      { title: 'book2', description: 'desc2', notes: 'notes2', source: 'source2' }, 
      { title: 'book3', description: 'desc3', notes: 'notes3', source: 'source3' }, 

    ] 
})}
 