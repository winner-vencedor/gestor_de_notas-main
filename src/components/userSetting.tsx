

const ProfileForm = () => {
  return (
    <div className="h-11/12  w-11/12 flex bg-gray-100">
      {/* Sidebar Azul */}
      <div className="bg-blue-500 text-white w-1/4 h-full p-6 flex flex-col justify-between">
        <div>
          <div className="h-16 w-16 rounded-full bg-blue-700 flex items-center justify-center text-2xl font-bold mb-4">
            P
          </div>
          <h2 className="text-xl font-bold">Welcome, Invite</h2>
          <p>Your personal profile info</p>
        </div>
      </div>

      {/* Formulário à direita */}
      <div className="bg-white shadow-md rounded-lg p-8 w-full">
        <h3 className="text-lg font-semibold mb-4">Profile Information</h3>
        
        <form >
          <div className="mb-4">
            <label className="block mb-1" htmlFor="firstName">First Name</label>
            <input className="border rounded p-2 w-full" type="text" id="firstName" required />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="lastName">Last Name</label>
            <input className="border rounded p-2 w-full" type="text" id="lastName" required />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="personalPhone">Personal Phone Number</label>
            <input className="border rounded p-2 w-full" type="tel" id="personalPhone" required />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="workPhone">Work Phone Number</label>
            <input className="border rounded p-2 w-full" type="tel" id="workPhone" required />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="username">Username</label>
            <input className="border rounded p-2 w-full" type="text" id="username" required />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="email">Your E-mail</label>
            <input className="border rounded p-2 w-full" type="email" id="email" required />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="country">Country</label>
            <input className="border rounded p-2 w-full" type="text" id="country" required />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="organization">Organization Name</label>
            <input className="border rounded p-2 w-full" type="text" id="organization" required />
          </div>
          <h3 className="text-lg font-semibold mt-6 mb-4">Password</h3>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="currentPassword">Current Password</label>
            <input className="border rounded p-2 w-full" type="password" id="currentPassword" required />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="newPassword">New Password</label>
            <input className="border rounded p-2 w-full" type="password" id="newPassword" required />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="confirmPassword">Confirm New Password</label>
            <input className="border rounded p-2 w-full" type="password" id="confirmPassword" required />
          </div>
          <div className="flex justify-between mt-6">
            <button className="bg-blue-500 text-white rounded p-2" type="submit">
              Save Info
            </button>
            <button className="text-gray-500" type="button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileForm;

