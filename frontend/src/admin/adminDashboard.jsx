function AdminDashboard() {
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin-login";
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-[#A11717] text-white px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>

        <button
          onClick={handleLogout}
          className="bg-white text-[#A11717] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100"
        >
          Logout
        </button>
      </div>

      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6">
          Welcome, Admin 👋
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-lg font-semibold">Users</h3>
            <p className="text-gray-500 mt-2">
              Manage registered users
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-lg font-semibold">Gallery</h3>
            <p className="text-gray-500 mt-2">
              Add or delete gallery images
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-lg font-semibold">Services</h3>
            <p className="text-gray-500 mt-2">
              Update flooring services
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-lg font-semibold">Blogs</h3>
            <p className="text-gray-500 mt-2">
              Create and manage blog posts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;