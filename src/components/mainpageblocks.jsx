import React from 'react'
import './mainpage2.css'
function MainpageBlock() {
  return (
    <div>
        <div className='flex pl-20 bg-gradient-to-r pt-5 from-gray-900 via-gray-800 to-black h-[88vh]'>
                <div className='flex flex-wrap w-1/2 space-x-6'>
                    <div className='p-1'>
                    <div class="card" id="card">
                            <div class="content">
                            <iframe src="http://localhost:3000/d-solo/ce8vrgqfnb1moe/new-dashboard?from=1577577600000&to=1578182400000&timezone=browser&showCategory=Panel%20options&orgId=1&panelId=1&__feature.dashboardSceneSolo" width="450" height="200" frameborder="0"></iframe>
                            </div>
                        </div >

                        <div>
                            <div class="card" id="card">
                                <div class="content">
                                    <span>HOVER ME</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div class="card" id="card">
                                <div class="content">
                                    
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="card" id="card">
                                <div class="content">
                                    <span>HOVER ME</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-1/2'>
                    
                </div>
            </div>

    </div>
  )
}

export default MainpageBlock