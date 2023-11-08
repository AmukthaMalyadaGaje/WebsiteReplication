import Image from 'next/image';
import right from '../public/rightimage.webp';
import logo from '../public/logo.svg';
import diagram from '../public/flowdiagram.webp';
import course from '../public/course.webp';
import lock from '../public/lock.webp';
import free from '../public/free.webp';
import pass from '../public/pass.webp';
import ali from '../public/ali.webp';
import alex from '../public/alex.webp';
import pencil from '../public/pencil.webp';
import icon2 from '../public/icon2.webp';
import icon3 from '../public/icon3.webp';
export default function Home() {
  let courses = {
    "Introduction and Overview": "locked",
    "Visual Search System": "free",
    "Google Street View Blurring System": "locked",
    "YouTube Video Search": "locked",
    "Harmful Content Detection": "locked",
    "Video Recommendation System": "locked",
    "Event Recommendation System": "locked",
    "Ad Click Prediction on Social Platforms": "locked",
    "Similar Listings on Vacation Rental Platforms": "locked",
    "Personalized News Feed": "locked",
    "People You May Know": "locked"
  };
  let i = 1;
  return (
    <>
      <div className='px-4 bg-white h-[95px] sticky top-0'>
        <ul className='px-7 flex flex-row justify-between items-center text-[37px]'>
          <Image className='pt-[20px]' src={logo} width={150} height={40} />
          <ul className='flex flex-row  items-center text-[20px] text-black'>
            <li className='pr-4 pt-7 pl-7 text-black'>Products</li>
            <li className='pr-4 pt-7 pl-7'>NewsLetter</li>
            <li className='pr-4 pt-7 pl-7'>Youtube</li>
            <li className='pr-4 pt-7 pl-7'>Jobs</li>
            <li className='pr-4 pt-7 pl-7'>Login</li>

          </ul>
        </ul>

      </div>
      <div className='pl-[180px] pt-11 bg-[#e0eeef] text-black'>
        <p className='text-[40px] font-bold'>Machine Learning System Design Interview</p>
        <p className='pb-[24px] text-[23px] pt-1'> Ali Aminian ·Staff Engineer at Adobe, Ex-Google</p>
        <p className='text-[17px]'>11 Lessons &nbsp; &nbsp;  &nbsp;100 Students&nbsp; &nbsp;  &nbsp;  LastModified: 2023.01.28</p>
      </div>
      <div className='flex flex-row pl-[150px] pt-7 bg-[#e0eeef] text-black'>
        <div className='w-[850px] h-[1590px] mb-10 bg-white mr-[3px] rounded-lg'>
          <div className=' pl-5 pt-8 text-[21px] flex flex-row font-semibold'>
            <Image src={right} width={30} height={18} />
            &nbsp; YOU'LL LEARN
          </div>
          <div className='pl-7 pt-5 list-disc'>
            <li className='pb-2'>A 7-step framework for solving any ML system design interview questions.</li>
            <li className='pb-2'>An insider’s take on what interviewers really look for and why.</li>
            <li className='pb-2'>10 real ML system design interview questions with detailed solutions.</li>
            <li className='pb-2'>211 diagrams that visually explain how various systems work.</li>
          </div>
          <div className=' pl-5 pt-8 text-[21px] flex flex-row font-semibold'>
            <Image src={right} width={30} height={18} />
            &nbsp; LEARN THE FUNDAMENTALS
          </div>
          <Image className='pl-5 pt-5' src={diagram} width={800} height={400} />
          <div className=' pl-5 pt-8 text-[21px] flex flex-row font-semibold'>
            <Image src={course} width={30} height={18} />
            &nbsp; COURSE CONTENTS
          </div>
          {
            Object.keys(courses).map(key => {
              if (courses[key] === "free") {

                return <div className='ml-7 pl-2 mt-3 pt-3 pb-4 mr-5 cursor-pointer bg-[#fafafa] flex flex-row'>
                  <p className='pr-[25px]'>{Object.keys(courses).indexOf(key) < 10 ? ("0" + Object.keys(courses).indexOf(key)) : (Object.keys(courses).indexOf(key))}</p>
                  <p className='w-[700px]'> {key} </p>
                  <Image src={free} width={30} height={9} />
                </div>
                i++;
              }
              if (courses[key] === "locked") {
                return <div className='ml-7 pl-2 mt-3 pt-3 pb-4 mr-5 cursor-pointer bg-[#fafafa] flex flex-row'>
                  <p className='pr-[25px]'>{Object.keys(courses).indexOf(key) < 10 ? ("0" + Object.keys(courses).indexOf(key)) : (Object.keys(courses).indexOf(key))}</p>
                  <p className='w-[700px]'>  {key} </p>
                  <Image src={lock} width={15} height={9} />
                </div>
                i++;
              }
            }
            )
          }
        </div>
        <div className='w-[320px] h-[220px] bg-white mx-6 rounded-lg'>
          <div className='flex flex-col' >
            <div className='mt-3 ml-2 mr-2 pt-3 pb-3 flex flex-row justify-between bg-[#bde7ee] text-[19px] rounded-lg' >
              <div className='flex flex-row items-center pl-3'>
                <Image src={pass} width={17} height={7} />
                <p className=' pl-3 font-semibold text-[14px]'>Annual Pass</p>

              </div>
              <div className='flex flex-col pr-5'>
                <p className='font-bold'>₹1,999.00</p>
                <p className='text-[12px] text-end '>per Year</p>
              </div>
            </div>
            <button className='ml-2 mr-2 mt-2 mb-2 pt-3 pb-3 w-[305px] bg-[#fafafa] border-[#3a3939] cursor-pointer border-solid border-2 border-black-500'>PREVIEW</button>
            <button className='ml-2 mr-2 pt-3 pb-3 w-[305px] bg-[#53e5a4] rounded cursor-pointer'>PURCHASE</button>
          </div>
          <p className='text-[21px] font-semibold pl-3 pt-9'>Instructors</p>
          <div className='w-[320px] h-[320px] mt-3 bg-white pl-3 flex flex-col justify-center items-center pr-3 rounded-lg'>
            <div className='pl-2 flex flex-row justify-center items-center'>
              <Image className='pr-3 rounded-lg' src={ali} width={60} height={20} />
              <div className='flex flex-col'>
                <p className='text-[19px] font-semibold'>Ali Aminian</p>
                <p className='text-[14px] font-normal'>Staff Engineer at Adobe, Ex-Google</p>
              </div>
            </div>
            <p className='pt-3 text-[15px]'>
              Ali Aminian is a staff machine learning engineer at Adobe, with expertise in machine learning and large-scale distributed systems. He previously worked at Google, where he helped build and deploy machine learning systems at scale. Besides his work at Adobe, he enjoys teaching machine learning to students and professionals.
            </p>
          </div>
          <div className='w-[320px] h-[320px] mt-2 bg-white pl-3 flex flex-col justify-center items-center pr-3 rounded-lg'>
            <div className='pl-2 flex flex-row justify-center items-center'>
              <Image className='pr-3 rounded-lg' src={alex} width={60} height={20} />
              <div className='flex flex-col'>
                <p className='text-[19px] font-semibold'>Alex Xu</p>
                <p className='text-[14px] font-normal'>Founder of ByteByteGo, Ex-Twitter</p>
              </div>
            </div>
            <p className='pt-3 text-[15px]'>
              Alex Xu is the CEO and founder of ByteByteGo. His book, System Design Interview - An Insider’s Guide, is an Amazon bestseller, which has been translated into six languages. He has worked at Twitter, Apple, and Zynga.
            </p>
          </div>
        </div>
      </div>
      <div className='bg-black h-[350px] pt-11'>
        <div className='pl-[180px] flex flex-row justify-normal items-center'>
          <button className='flex flex-row pr-[60px] border-solid border-2 border-white-500 mr-[100px] pt-2 pb-2 text-[22px] pl-3'><Image width={35} height={9} className='opacity-0.5 pr-[10px]' src={pencil} />Become a Contributor</button>
          <button className='flex flex-row pr-[60px] border-solid border-2 border-white-500 mr-[100px] pt-2 pb-2 text-[22px] pl-3'><Image width={35} height={9} className='opacity-0.5 pr-[10px]' src={icon2} />Be an Affiliate</button>
          <button className='flex flex-row pr-[60px] border-solid border-2 border-white-500 mr-[100px] pt-2 pb-2 text-[22px] pl-3'><Image width={35} height={9} className='opacity-0.5 pr-[10px]' src={icon3} />Suggest a new topic</button>
        </div>
        <ul className='pl-[180px] pt-10 text-[20px]'>
          <li className='pb-5 cursor-pointer'>Our Team</li>
          <li className='pb-5 cursor-pointer'>Privacy Policy</li>
          <li className='pb-5 cursor-pointer'>Terms of Service</li>
        </ul>
        <hr className='ml-[180px] mr-11' />
        <div className='pl-[180px] text-[12px] pr-2 pt-5'>Copyright ©2023 ByteByteGo Inc. All rights reserved
        </div>
      </div>
    </>



  )
}
