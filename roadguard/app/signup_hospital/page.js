// pages/signup/citizen.js
import Head from 'next/head';
import Link from 'next/link';

const HospitalSignup = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
    <Head>
      <title>Smart Traffic Management</title>
      <meta name="description" content="Revolutionizing road safety with Smart Traffic Management and Accident Prevention Platform." />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="text-center">
      <h1 className="text-4xl font-bold mb-4">RoadGuard</h1>
      <p className="text-lg mb-8">Revolutionizing road safety with state-of-the-art IoT and AI technologies.</p>

      <div className="flex space-x-4 justify-center pt-10 ">
        
        {/* <a href="#features" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Hospital Login
        </a>
        <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ">
          Police Login
        </a>
        <a href="#features" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ">
          Citizen Login
        </a> */}

<Link className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded' href="/signup_hospital">Hospital Sign Up</Link>
        <Link className='bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded' href="/signup_police">Police Sign Up</Link>
        <Link className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" href="/signup_citizen">Citizen Sign Up</Link>
      </div>
      <div className="bg-gray-100 pt-10 pb-12 flex flex-col items-center justify-center">
   
    <main className="bg-white p-8 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Hospital Signup</h1>
      <form className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="border p-2 rounded"
          // Add state and event handlers for form fields
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          // Add state and event handlers for form fields
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          // Add state and event handlers for form fields
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded">
          Sign Up
        </button>
      </form>
      <h1 className='pt-2'>Have account? <Link className='text-blue-700 hover:text-blue-500' href="/login_hospital">Sign In</Link> </h1>

    </main>
  </div>
    </main>

    <footer className="">
      <p>&copy; 2023 Smart Traffic Management. All rights reserved.</p>
    </footer>
  </div>
  );
};

export default HospitalSignup;
