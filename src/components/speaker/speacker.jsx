import { Button } from "flowbite-react"
import { FastForward, PauseIcon, RadioIcon, ShuffleIcon } from "lucide-react"
import React from "react"

export const Speaker = () => {
	return (
		<div className='relative flex flex-col items-center justify-between w-full h-full p-6 bg-gray-200'>
			{/* Top Section */}
			<div className='flex items-center justify-between w-full'>
				<div>
					<div className='flex items-center gap-3'>
						<h2 className='text-lg font-bold'>Speakers</h2>{" "}
					</div>
					<p className='text-sm text-gray-500'>Playing</p>
				</div>
				<div className='bg-white rounded-full w-11 max-w-11'>
					<div className='p-3 bg-black rounded-full max-w-5 place-self-end'></div>
				</div>
			</div>

			{/* Grid Layout for Image and Navigation */}
			<div className=' absolute z-20 font-bold -translate-x-1/2 bg-gray-200 min-w-40 flex items-center justify-center left-1/2 top-[22%] '>
				<span className='mr-2 text-gray-700'>0:34 </span>{" "}
				<span className='text-gray-300'>|</span>{" "}
				<span className='ml-2'>2:27</span>{" "}
			</div>

			<div className='relative flex items-center justify-center p-3 border border-gray-400 rounded-full w-52 h-52'>
				{/* <svg
					xmlns='http://www.w3.org/2000/svg'
					version='1.1'
					className='absolute inset-0 w-52 h-52'
				>
					<defs>
						<linearGradient id='GradientColor'>
							<stop offset='100%' stop-color='#e91e63' />
							<stop offset='100%' stop-color='#673ab7' />
						</linearGradient>
					</defs>
					<circle cx='80' cy='80' r='70' stroke-linecap='round' id='cc' />
				</svg> */}
				{/* <div
					style={{ translate: "-105px " }}
					className='absolute inset-0 m-auto overflow-hidden bg-red-400 rounded-full size-5'
				></div> */}
				<div className='relative overflow-hidden bg-gray-300 rounded-full size-44'>
					<img
						src='/img/disk.png'
						alt=''
						className='absolute inset-0 object-cover object-center w-full h-full'
					/>
				</div>
			</div>

			{/* Bottom Section */}
			<div className='flex items-center justify-between'>
				<Button
					color='gray'
					size='sm'
					className='py-2 bg-transparent border-none rounded-full focus:ring-0 focus:bg-gray-300 focus:outline-none '
				>
					<ShuffleIcon className='text-black size-4' />
				</Button>
				<Button
					color='gray'
					size='sm'
					className='py-2 bg-transparent border-none rounded-full focus:ring-0 focus:bg-gray-300 focus:outline-none '
				>
					<FastForward className='text-black rotate-180 size-4 fill-black' />
				</Button>
				<Button
					color='gray'
					size='sm'
					className='py-2 border-none rounded-full focus:ring-0 focus:bg-gray-300 focus:outline-none '
				>
					<PauseIcon className='text-black size-4 fill-black' />
				</Button>
				<Button
					color='gray'
					size='sm'
					className='py-2 bg-transparent border-none rounded-full focus:ring-0 focus:bg-gray-300 focus:outline-none '
				>
					<FastForward className='text-black size-4 fill-black' />
				</Button>
				<Button
					color='gray'
					size='sm'
					className='py-2 bg-transparent border-none rounded-full focus:ring-0 focus:bg-gray-300 focus:outline-none '
				>
					<RadioIcon className='text-black size-4' />
				</Button>
			</div>
		</div>
	)
}
export default Speaker
