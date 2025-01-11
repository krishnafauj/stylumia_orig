import React from 'react'
import App from './components/App'
import './App.css'
import Sideblock from './sideblock'

function Page() {
    return (
        <div className='flex' >
            <div>
                <Sideblock />
            </div>
            <div className='flex  mt-10'>
                <div className='flex flex-wrap ml-2 justify-center'>

                    <div style={{ width: 500, height: 320 }} className="card  mr-2  justify-center'" >

                    </div>
                    <div style={{ width: 300, height: 320 }} className="card mr-2  justify-center'" >

                    </div>
                    <div style={{ width: 200, height: 320 }} className="card mr-2  justify-center'" >

                    </div>
                    <div style={{ width: 250, height: 320 }} className="card mr-2  justify-center'" >

                    </div>
                    <div style={{ width: 250, height: 320 }} className="card mr-2  justify-center'" >

                    </div>
                    <div style={{ width: 220, height: 320 }} className="card mr-2  justify-center'" >

                    </div>
                    <div style={{ width: 270, height: 320 }} className="card mr-2  justify-center'" >

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Page

