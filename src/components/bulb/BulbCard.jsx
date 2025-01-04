import { ChevronDownIcon, SunIcon } from "lucide-react"
import React, { useState } from "react"

function BulbCard() {
	const [rangeValue, setRangeValue] = useState(70)

	return (
		<div className='relative flex flex-col justify-between w-full h-full bg-gray-400'>
			{/* Top Section */}
			<div className='z-20 flex items-center justify-between p-6 mb-4'>
				<div className='flex items-center gap-3'>
					<h2 className='text-lg font-bold text-white'>Living room</h2>{" "}
					<ChevronDownIcon className='text-gray-100 size-4' />
				</div>

				<div>
					<svg
						className='w-5 h-5 text-gray-200 rotate-180 dark:text-white'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth={2}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
						/>
					</svg>
				</div>
			</div>

			{/* Grid Layout for Image and Navigation */}
			{/* <div className='grid items-center grid-cols-3 gap-10 mb-4'> */}
			<div className='flex items-center justify-between w-full h-full p-6 mb-4'>
				<div className='flex justify-center'>
					<svg
						className='w-5 h-5 text-gray-100 dark:text-white'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth={2}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='m15 19-7-7 7-7'
						/>
					</svg>
				</div>
				<div className='absolute z-10 w-full h-full -translate-x-1/2 -top-8 left-[50%] lg:left-[50%] '>
					<img
						src='/img/bulb.png'
						alt='Bulb'
						className='object-contain object-center w-[80vw] lg:w-[50vw] '
					/>
				</div>
				<div className='flex justify-center'>
					<svg
						className='w-5 h-5 text-gray-100 dark:text-white'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth={2}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='m9 5 7 7-7 7'
						/>
					</svg>
				</div>
			</div>

			{/* Bottom Section */}
			<div className='z-30 flex flex-col gap-4 p-4 py-4 bg-white/20 backdrop-blur-sm rounded-3xl'>
				<div className='flex items-center justify-between w-full'>
					<div>
						<div className='flex items-center gap-3'>
							<h2 className='text-lg text-white'>Smart Lamp</h2>{" "}
						</div>
						<p className='text-sm text-gray-200'>3 device</p>
					</div>
					<div className='bg-white rounded-full w-11 max-w-11'>
						<div className='p-3 bg-black rounded-full max-w-5 place-self-end'></div>
					</div>
				</div>

				{/* Slider */}
				<div className='relative h-16 w-[100%] border rounded-full flex justify-between items-center px-3 overflow-hidden'>
					<SunIcon className='size-4' />
					<div
						style={{ width: `${rangeValue}%` }}
						className='absolute inset-0 bg-gray-100 rounded-full -z-10'
					></div>
					<input
						type='range'
						min='0'
						max='100'
						value={rangeValue}
						onChange={(e) => setRangeValue(e.target.value)}
						className='absolute inset-0 bg-transparent rounded-full appearance-none cursor-pointer'
					/>
					<span className='text-gray-100'>{rangeValue}%</span>
				</div>
			</div>
		</div>
	)
}

export default BulbCard
