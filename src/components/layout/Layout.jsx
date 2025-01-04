import React from "react"
import SideBar from "../sidebar/SideBar"
import MainContent from "../mainContent/MainContent"

function LayOut() {
	return (
		<div className='flex gap-3 p-2 bg-neutral-400'>
			{/* <SideBar /> */}
			<MainContent />
		</div>
	)
}

export default LayOut
