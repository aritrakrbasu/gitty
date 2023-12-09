import React from 'react'
import {Powerpoint} from 'pdf-powerpoint'

function test() {
    const p = new Powerpoint()
    p.convertPDFToPowerpoint('input.pdf', (err, result) => {
        console.log(result)
      })
    return (
        <div>
            
        </div>
    )
}

export default test
