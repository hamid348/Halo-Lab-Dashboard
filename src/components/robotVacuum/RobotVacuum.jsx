import { ChevronDownIcon } from "lucide-react"
import React from "react";
import './RobotVacuum.css'

function RobotVacuum() {
	return (
		<div className='relative flex flex-col items-center justify-between w-full h-full p-6 bg-gradient-to-br from-gray-200 '>
			{/* Header */}
			<div className='flex items-center justify-between w-full'>
				<div>
					<div className='flex items-center gap-3'>
						<h2 className='text-lg font-bold'>Bedroom</h2>{" "}
						<ChevronDownIcon className='size-4' />
					</div>
					<p className='text-sm text-gray-500'>Robot vacuum cleaner</p>
				</div>
				<div className='bg-white rounded-full w-11 max-w-11'>
					<div className='p-3 bg-black rounded-full max-w-5 place-self-end'></div>
				</div>
			</div>
			{/* Image */}
			<div className='z-30 hidden lg:absolute top-4 left-1/2'>
				<svg
					className='w-full h-full'
					xmlns='http://www.w3.org/2000/svg'
					version='1.1'
					// xmlns:xlink='http://www.w3.org/1999/xlink'
					// xmlns:svgjs='http://svgjs.dev/svgjs'
					viewBox='0 0 800 800'
				>
					<g
						stroke-width='10'
						stroke='white'
						fill='none'
						stroke-linecap='round'
						stroke-linejoin='round'
					>
						<polyline
							points='308,371 492,371 492,429'
							marker-end='url(#SvgjsMarker1169)'
						></polyline>
					</g>
					<defs>
						<marker
							markerWidth='1.5'
							markerHeight='1.5'
							refX='0.75'
							refY='0.75'
							viewBox='0 0 1.5 1.5'
							orient='auto'
							id='SvgjsMarker1169'
						>
							<polygon
								points='0.5,1.5 0,0.75 0.5,0 1.5,0.75'
								fill='white'
							></polygon>
						</marker>
					</defs>
				</svg>
			</div>
			<div className='left-0 z-30 hidden rotate-180 lg:absolute top-11'>
				<svg
					className='w-full h-full'
					xmlns='http://www.w3.org/2000/svg'
					version='1.1'
					// xmlns:xlink='http://www.w3.org/1999/xlink'
					// xmlns:svgjs='http://svgjs.dev/svgjs'
					viewBox='0 0 800 800'
				>
					<g
						stroke-width='10'
						stroke='white'
						fill='none'
						stroke-linecap='round'
						stroke-linejoin='round'
					>
						<polyline
							points='308,371 492,371 492,429'
							marker-end='url(#SvgjsMarker1169)'
						></polyline>
					</g>
					<defs>
						<marker
							markerWidth='1.5'
							markerHeight='1.5'
							refX='0.75'
							refY='0.75'
							viewBox='0 0 1.5 1.5'
							orient='auto'
							id='SvgjsMarker1169'
						>
							<polygon
								points='0.5,1.5 0,0.75 0.5,0 1.5,0.75'
								fill='white'
							></polygon>
						</marker>
					</defs>
				</svg>
			</div>
			<div className="robot-vacuum-content">
          <img src="/img/disk.png" alt="Robot Vacuum" className="robot-image" />
          <div className="status-box left">
            <p>
              90% <span>Filter status</span>
            </p>
          </div>
          <div className="status-box right">
            <p>
              10:00 AM <span>Next cleaning</span>
            </p>
          </div>
        </div>

			{/* Footer */}
			<div className='w-full mt-2'>
				<ul className='grid items-center justify-between w-full grid-cols-3 gap-2 mt-6 text-xs lg:grid-cols-3'>
					<li class=''>
						<div class='flex items-center  space-x-4 p-2 bg-gray-300 rounded-full lg:pr-5 w-full'>
							<div class='flex-shrink-0 bg-white rounded-full lg:p-2'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
									class='text-gray-600 size-5 lg:size-6 dark:text-white lucide lucide-box'
								>
									<path d='M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z' />
									<path d='m3.3 7 8.7 5 8.7-5' />
									<path d='M12 22V12' />
								</svg>
							</div>
							<div class='flex-1 min-w-0 '>
								<p class=' font-bold text-gray-900 truncate dark:text-white'>
									75 m<sup>2</sup>
								</p>
								<p class='hidden lg:block text-sm text-gray-500  dark:text-gray-400 '>
									Area Cleaned
								</p>
							</div>
						</div>
					</li>
					<li class=''>
						<div class='flex items-center justify-between space-x-4 p-2 bg-gray-300 rounded-full lg:pr-5'>
							<div class='flex-shrink-0 bg-white rounded-full lg:p-2'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
									class='text-gray-600 size-5 lg:size-6 dark:text-white lucide lucide-clock'
								>
									<circle cx='12' cy='12' r='10' />
									<polyline points='12 6 12 12 16 14' />
								</svg>
							</div>
							<div class='flex-1 min-w-0'>
								<p class=' font-bold text-gray-900 dark:text-white'>30 min</p>
								<p class='hidden lg:block text-sm text-gray-500  dark:text-gray-400'>
									Cleaning time
								</p>
							</div>
						</div>
					</li>
					<li class=''>
						<div class='flex items-center justify-between space-x-4 p-2 bg-gray-300 rounded-full lg:pr-5'>
							<div class='flex-shrink-0 bg-white rounded-full lg:p-2'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
									class='text-gray-600 size-5 lg:size-6 dark:text-white lucide lucide-battery-charging'
								>
									<path d='M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2' />
									<path d='M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1' />
									<path d='m11 7-3 5h4l-3 5' />
									<line x1='22' x2='22' y1='11' y2='13' />
								</svg>{" "}
							</div>
							<div class='flex-1 min-w-0'>
								<p class=' font-bold text-gray-900 dark:text-white'>80%</p>
								<p class='hidden lg:block text-sm text-gray-500  dark:text-gray-400'>
									Battery charge
								</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default RobotVacuum
