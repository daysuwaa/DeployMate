import React from 'react'
import Image1 from '../assets/stepp1.jpg'
import Image2 from '../assets/Stepp2.png'
import Image3 from '../assets/step3.png'
import Image4 from '../assets/step4.png'
// import Image5a from '../assets/step5.1.png'
import Image5b from '../assets/step5.2.png'
import Image6 from '../assets/step6.png'
import Image7 from '../assets/step7.png'
import Image8 from '../assets/step8.png'
import Image9 from '../assets/step9.jpg'
import Image10 from '../assets/step10.png'
import Image11 from '../assets/step11.png'
import Image12 from '../assets/Step12.png'
import Image13 from '../assets/lasstep.jpg'


const Body = () => {
  return (
    <div className='bg-white mt-4 mx-[1rem] text-black'>
      <div className='flex flex-col sm:flex-row'>
        {/* Column 1: Text */}
        <div className='w-full sm:w-1/2 p-4'>
          <h2 className='font-bold text-xl font-customFont2'>STEP 1: </h2>
          <p className='font-light'>To create a new repository, Click the "+" sign in the top right corner</p>
        </div>
        
        {/* Column 2: Image */}
        <div className='w-full sm:w-1/2 p-4'>
          <img src={Image1} alt='stepp1' className='max-w-full h-auto' />
        </div>
      </div>
      
      {/* Repeat for the second set */}
      <div className='flex flex-col sm:flex-row mt-4'>
        {/* Column 1: Text */}
        <div className='w-full sm:w-1/2 p-4'>
        <h2 className='font-bold text-xl font-customFont2'>STEP 2: </h2>
          <p className='font-light'>Then click <span className='text-blue-500 font-semibold'>New repository</span></p>
        </div>
        
        {/* Column 2: Image */}
        <div className='w-full sm:w-1/2 p-4'>
          <img src={Image2} alt='step2' className='max-w-full h-auto' />
        </div>
      </div>
      
      {/* Repeat for the third set */}
      <div className='flex flex-col sm:flex-row mt-4'>
        {/* Column 1: Text */}
        <div className='w-full sm:w-1/2 p-4'>
        <h2 className='font-bold text-xl font-customFont2'>STEP 3: </h2>
          <p className='font-light'>Fill in the <span className='font-semibold text-blue-500'>repository name, description, choose visibility</span> and add license if desired. Note: to deploy, visibility is meant to be set to <span className='font-semibold'>public</span></p>
        </div>
        
        {/* Column 2: Image */}
        <div className='w-full sm:w-1/2 p-4'>
          <img src={Image3} alt='step3' className='max-w-full h-auto' />
        </div>
      </div>

      <div className='flex flex-col sm:flex-row mt-4'>
        {/* Column 1: Text */}
        <div className='w-full sm:w-1/2 p-4'>
        <h2 className='font-bold text-xl font-customFont2'>STEP 4: </h2>
          <p className='font-light'>Click on the  <span className='font-semibold text-green-500'>Create repository</span> at the bottom right of the screen </p>
        </div>
        
        {/* Column 2: Image */}
        <div className='w-full sm:w-1/2 p-4'>
          <img src={Image4} alt='step3' className='max-w-full h-auto' />
        </div>
      </div>

    
      <div className='flex flex-col sm:flex-row mt-4'>
        {/* Column 1: Text */}
        <div className='w-full sm:w-1/2 p-4'>
         <h2 className='font-bold text-xl font-customFont2'>STEP 5: </h2>
          <p className='font-light'>Open your terminal or command prompt.</p>
        </div>
        
        {/* Column 2: Image */}
        <div className='w-full sm:w-1/2 p-4'>
          <img src={Image5b} alt='step3' className='max-w-full h-auto' />
        </div>
      </div>

      <div className='flex flex-col sm:flex-row mt-4'>
        {/* Column 1: Text */}
        <div className='w-full sm:w-1/2 p-4'>
         <h2 className='font-bold text-xl font-customFont2'>STEP 6: </h2>
          <p className='font-light'>Copy the messages in <span className='font-semibold text-blue-500'>..or create a new repository on the command line </span>
           from line 2
          <ul>
            <li>
              git init
            </li>
            <li>
              git add .
            </li>
            <li>
             git commit -m "first commit"
            </li>
            <li>
              git branch -M main
            </li>
            <li>
             git remote add origin `repository url` (replace with the  repository url)
            </li>
            <li>
              git push
            </li>
          </ul>


          </p>
        </div>
        
        {/* Column 2: Image */}
        <div className='w-full sm:w-1/2 p-4'>
          <img src={Image6} alt='step3' className='max-w-full h-auto' />
        </div>
      </div>

      <div className='flex flex-col sm:flex-row mt-4'>
        {/* Column 1: Text */}
        <div className='w-full sm:w-1/2 p-4'>
         <h2 className='font-bold text-xl font-customFont2'>STEP 7: </h2>
          <p className='font-light'>If everything goes as planned, this should be what would show up in your terminal.</p>
        </div>
        
        {/* Column 2: Image */}
        <div className='w-full sm:w-1/2 p-4'>
          <img src={Image7} alt='step3' className='max-w-full h-auto' />
        </div>
      </div>

      <div className='flex flex-col sm:flex-row mt-4'>
        {/* Column 1: Text */}
        <div className='w-full sm:w-1/2 p-4'>
         <h2 className='font-bold text-xl font-customFont2'>STEP 8: </h2>
          <p className='font-light'>Refresh your page; your codes would be displayed as shown.</p>
        </div>
        
        {/* Column 2: Image */}
        <div className='w-full sm:w-1/2 p-4'>
          <img src={Image8} alt='step3' className='max-w-full h-auto' />
        </div>
      </div>

     
      <div className='flex flex-col sm:flex-row mt-4'>
        {/* Column 1: Text */}
        <div className='w-full sm:w-1/2 p-4'>
          <h2 className='font-bold text-xl pb-2' >For deploying static websites on Github:</h2>
         <h2 className='font-bold text-xl font-customFont2'>STEP 1: </h2>
          <p className='font-light'>Go to settings tab in the repository, scroll down to <span className='font-semibold text-green-500'>Pages </span> <br></br>
          Note: make sure your project has an `inex.html` file
          </p>

        </div>
        
        {/* Column 2: Image */}
        <div className='w-full sm:w-1/2 p-4'>
          <img src={Image9} alt='step3' className='max-w-full h-auto' />
        </div>
      </div>

      <div className='flex flex-col sm:flex-row mt-4'>
        {/* Column 1: Text */}
        <div className='w-full sm:w-1/2 p-4'>
         <h2 className='font-bold text-xl font-customFont2'>STEP 2: </h2>
          <p className='font-light'>Select branch as <span className='font-semibold text-blue-500'>main</span>, beside branch, select folder as <span className='font-semibold text-blue-500'>/(root). Then click Save or Save changes</span> </p>
        </div>
        
        {/* Column 2: Image */}
        <div className='w-full sm:w-1/2 p-4'>
          <img src={Image10} alt='step3' className='max-w-full h-auto' />
        </div>
      </div>

      <div className='flex flex-col sm:flex-row mt-4'>
        {/* Column 1: Text */}
        <div className='w-full sm:w-1/2 p-4'>
         <h2 className='font-bold text-xl font-customFont2'>STEP 3: </h2>
          <p className='font-light'>If successful, this message will pop up at the top of your screen.</p>
        </div>
        
        {/* Column 2: Image */}
        <div className='w-full sm:w-1/2 p-4'>
          <img src={Image11} alt='step3' className='max-w-full h-auto' />
        </div>
      </div>

      <div className='flex flex-col sm:flex-row mt-4'>
        {/* Column 1: Text */}
        <div className='w-full sm:w-1/2 p-4'>
         <h2 className='font-bold text-xl font-customFont2'>STEP 4: </h2>
          <p className='font-light'>Go to <span className='font-semibold text-blue-500'>Actions</span> to check the status of your deployed website</p>
        </div>
        
        {/* Column 2: Image */}
        <div className='w-full sm:w-1/2 p-4'>
          <img src={Image12} alt='step3' className='max-w-full h-auto' />
        </div>
      </div>

      <div className='flex flex-col sm:flex-row mt-4'>
        {/* Column 1: Text */}
        <div className='w-full sm:w-1/2 p-4'>
         <h2 className='font-bold text-xl font-customFont2'>STEP 5: </h2>
          <p className='font-light'>Go back to pages, your site should be deployed to the URL like `https://(your-username).github.io/(repository-name)</p>
        </div>
        
        {/* Column 2: Image */}
        <div className='w-full sm:w-1/2 p-4'>
          <img src={Image13} alt='step3' className='max-w-full h-auto' />
        </div>
      </div>
      
    </div>
  );
};

export default Body;
