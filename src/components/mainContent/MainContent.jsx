import React from "react"
import RobotVacuum from "../robotVacuum/RobotVacuum"
import BulbCard from "../bulb/BulbCard"
import {
	CloudRainWindIcon,
	PlusIcon,
	ThermometerIcon,
	WindIcon,
	ZapIcon,
} from "lucide-react"
import Speaker from "../speaker/speacker"
import SideBar from "../sidebar/SideBar"

function MainContent() {
	return (
		<div className="flex m-5 rounded-2xl bg-white lg:p-4">
		<SideBar/>
		
		<div className='flex flex-col gap-4'>
			<div className='grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-3'>
				<div className='relative h-full overflow-hidden bg-gray-500 rounded-3xl lg:col-span-3'>
					<div className=''>
						<img
							src='/img/room.jpg'
							className=' '
							alt=''
						/>
						<div className='absolute top-0 left-0 right-0 flex flex-col justify-between h-full p-4 lg:h-auto lg:items-center lg:flex-row'>
							<div>
								<button
									type='button'
									class='flex items-center py-1 px-2 lg:py-2.5 lg:px-6 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
								>
									<div className='p-1 mr-2 bg-red-600 rounded-full' />{" "}
									<span>Live</span>
								</button>
							</div>

							<div className='flex items-center gap-2'>
								<button
									type='button'
									class='flex items-center gap-1.5 py-1 px-2 lg:py-2.5 lg:px-6 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white/70 shadow-sm backdrop-blur-md rounded-full hover:bg-white/80  focus:z-10 focus:ring-4 focus:ring-gray-100 transition-all duration-200'
								>
									<ThermometerIcon className='size-4' />
									<span>
										24<sup>o</sup>C
									</span>
								</button>
								<button
									type='button'
									class='flex items-center gap-1.5 py-1 px-2 lg:py-2.5 lg:px-6 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white/70 shadow-sm backdrop-blur-md rounded-full hover:bg-white/80  focus:z-10 focus:ring-4 focus:ring-gray-100 transition-all duration-200'
								>
									<CloudRainWindIcon className='size-4' />
									<span>50%</span>
								</button>
								<button
									type='button'
									class='flex items-center gap-1.5 py-1 px-2 lg:py-2.5 lg:px-6 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white/70 shadow-sm backdrop-blur-md rounded-full hover:bg-white/80  focus:z-10 focus:ring-4 focus:ring-gray-100 transition-all duration-200'
								>
									<ZapIcon className='size-4' />
									<span>350W</span>
								</button>
								<button
									type='button'
									class='flex items-center gap-1.5 py-1 px-2 lg:py-2.5 lg:px-6 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white/70 shadow-sm backdrop-blur-md rounded-full hover:bg-white/80  focus:z-10 focus:ring-4 focus:ring-gray-100 transition-all duration-200'
								>
									<WindIcon className='size-4' />
									<span>80%</span>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-col justify-between h-full px-6 pt-6 pb-4 rounded-3xl bg-gradient-to-b from-gray-300 to-orange-100 '>
					<div>
						<div className='flex justify-between '>
							<h2 className='text-lg font-bold tracking-tight'>Rooms</h2>

							<svg
								className='w-6 h-6 text-gray-500 rotate-180 dark:text-white'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								fill='none'
								viewBox='0 0 24 24'
							>
								<path
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
								/>
							</svg>
						</div>
						<hr className='h-px my-3 bg-gray-400 border-0 dark:bg-gray-700' />
					</div>
					<div className='mb-4'>
						<ul className='space-y-3'>
							<li class=''>
								<div class='flex items-center space-x-4 rtl:space-x-reverse rounded-full p-2'>
									<div class='flex-shrink-0 bg-gray-100 rounded-full p-3.5'>
										<svg
											class='w-6 h-6 text-black dark:text-white lucide lucide-bath'
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											stroke-width='2'
											stroke-linecap='round'
											stroke-linejoin='round'
										>
											<path d='M10 4 8 6' />
											<path d='M17 19v2' />
											<path d='M2 12h20' />
											<path d='M7 19v2' />
											<path d='M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5' />
										</svg>
									</div>
									<div class='flex-1 min-w-0'>
										<p class=' font-bold text-gray-900 truncate dark:text-white'>
											Bedroom
										</p>
										<p class='text-sm text-gray-500 truncate dark:text-gray-400'>
											3 device&#40;-s&#41;
										</p>
									</div>
									<div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
										<svg
											class='w-4 h-4 text-gray-800 dark:text-white'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											fill='none'
											viewBox='0 0 24 24'
										>
											<path
												stroke='currentColor'
												stroke-linecap='round'
												stroke-linejoin='round'
												stroke-width='2'
												d='m9 5 7 7-7 7'
											/>
										</svg>
									</div>
								</div>
							</li>
							<li class=''>
								<div class='flex items-center space-x-4 rtl:space-x-reverse rounded-full p-2'>
									<div class='flex-shrink-0 bg-gray-100 rounded-full p-3.5'>
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
											className='w-6 h-6 text-black dark:text-white lucide lucide-bath lucide-utensils'
										>
											<path d='M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2' />
											<path d='M7 2v20' />
											<path d='M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7' />
										</svg>
									</div>
									<div class='flex-1 min-w-0'>
										<p class=' font-bold text-gray-900 truncate dark:text-white'>
											Kitchen
										</p>
										<p class='text-sm text-gray-500 truncate dark:text-gray-400'>
											2 device&#40;-s&#41;
										</p>
									</div>
									<div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
										<svg
											class='w-4 h-4 text-gray-800 dark:text-white'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											fill='none'
											viewBox='0 0 24 24'
										>
											<path
												stroke='currentColor'
												stroke-linecap='round'
												stroke-linejoin='round'
												stroke-width='2'
												d='m9 5 7 7-7 7'
											/>
										</svg>
									</div>
								</div>
							</li>
							<li class=''>
								<div class='flex items-center space-x-4 rtl:space-x-reverse bg-white rounded-full p-2'>
									<div class='flex-shrink-0 bg-gray-200 rounded-full p-3.5'>
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
											className='w-6 h-6 text-black dark:text-white lucide lucide-bath lucide-armchair'
										>
											<path d='M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3' />
											<path d='M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z' />
											<path d='M5 18v2' />
											<path d='M19 18v2' />
										</svg>
									</div>
									<div class='flex-1 min-w-0'>
										<p class=' font-bold text-gray-900 truncate dark:text-white'>
											Living room
										</p>
										<p class='text-sm text-gray-500 truncate dark:text-gray-400'>
											5 device&#40;-s&#41;
										</p>
									</div>
									<div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
										<svg
											class='w-4 h-4 text-gray-800 dark:text-white'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											fill='none'
											viewBox='0 0 24 24'
										>
											<path
												stroke='currentColor'
												stroke-linecap='round'
												stroke-linejoin='round'
												stroke-width='2'
												d='m9 5 7 7-7 7'
											/>
										</svg>
									</div>
								</div>
							</li>

							<li class=''>
								<div class='flex items-center space-x-4 rtl:space-x-reverse rounded-full p-2'>
									<div class='flex-shrink-0 bg-gray-100 rounded-full p-3.5'>
										<svg
											class='w-6 h-6 text-black dark:text-white'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											fill='none'
											viewBox='0 0 24 24'
										>
											<path
												stroke='currentColor'
												stroke-linecap='round'
												stroke-linejoin='round'
												stroke-width='2'
												d='M18 17v2M12 5.5V10m-6 7v2m15-2v-4c0-1.6569-1.3431-3-3-3H6c-1.65685 0-3 1.3431-3 3v4h18Zm-2-7V8c0-1.65685-1.3431-3-3-3H8C6.34315 5 5 6.34315 5 8v2h14Z'
											/>
										</svg>
									</div>
									<div class='flex-1 min-w-0'>
										<p class=' font-bold text-gray-900 truncate dark:text-white'>
											Bathroom
										</p>
										<p class='text-sm text-gray-500 truncate dark:text-gray-400'>
											1 device&#40;-s&#41;
										</p>
									</div>
									<div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
										<svg
											class='w-4 h-4 text-gray-800 dark:text-white'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											fill='none'
											viewBox='0 0 24 24'
										>
											<path
												stroke='currentColor'
												stroke-linecap='round'
												stroke-linejoin='round'
												stroke-width='2'
												d='m9 5 7 7-7 7'
											/>
										</svg>
									</div>
								</div>
							</li>
						</ul>
					</div>

					<button
						type='button'
						class='text-white text-xs flex items-center py-3 justify-center w-full bg-gray-800 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full  px-5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
					>
						<PlusIcon className='mr-2 size-6' />
						ADD ROOM
					</button>
				</div>
			</div>

			<div className='grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-3'>
				<div className='min-h-[25rem] bg-gray-200 lg:col-span-2 rounded-3xl overflow-hidden'>
					<RobotVacuum />
				</div>
				<div className='min-h-[25rem]  overflow-hidden bg-gray-500 rounded-3xl '>
					<BulbCard />
				</div>
				<div className='min-h-[25rem]  overflow-hidden bg-gray-500 rounded-3xl '>
					<Speaker />
				</div>
			</div>
		</div>
		</div>
	)
}

export default MainContent
