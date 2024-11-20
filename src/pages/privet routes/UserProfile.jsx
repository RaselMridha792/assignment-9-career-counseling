import { useContext } from "react";
import herobg from "../../assets/hero-bg-2.jpg";
import { AllContext } from "../../contextprovider/DataContext";
import { toast, ToastContainer } from "react-toastify";
import { auth } from "../../Firebase.init";
const UserProfile = () => {
  const { user, updateUserProfile, setUser, loading } = useContext(AllContext);
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    if (name) {
      updateUserProfile({ displayName: name, photoURL: photo })
        .then(() => {
          setUser((prevUser) => ({
            ...prevUser,
            displayName: name,
            photoURL: photo,
          }));
          toast.success("profile updated successfully");
        })
        .catch((error) => {
          console.log(error.message);
          toast.error("profile update failed");
        });
    }
  };
  if (loading) {
    return (
      <>
        <h1>loading</h1>
      </>
    );
  }
  return (
    <>
        <ToastContainer></ToastContainer>
      <div
        className="hero min-h-fit"
        style={{
          backgroundImage: `url(${herobg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-20 bg-gray-200"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md my-40"></div>
        </div>
      </div>
      <div className="min-h-screen w-10/12 mx-auto font-Roboto">
        <div className="">
          <div className="avatar -my-20">
            <div className="w-36 rounded-full border border-4 border-blue-800">
              <img src={user.photoURL} />
            </div>
          </div>
        </div>
        <div className="border md:w-10/12 mx-auto md:px-10">
          <h1 className="text-4xl uppercase font-bold py-5">user profile :</h1>
          <div className="pb-5">
            <h1 className="text-2xl font-bold">User Name</h1>
            <hr className="my-2" />
            <h1 className="text-xl text-gray-500">{user.displayName}</h1>
          </div>
          <div className="pb-5">
            <h1 className="text-2xl font-bold">Email</h1>
            <hr className="my-2" />
            <h1 className="text-xl text-gray-500">{user.email}</h1>
          </div>
          <div className="mt-10 py-5">
            <h1 className="text-2xl font-bold">update your profile</h1>
            <form onSubmit={handleUpdateProfile} action="">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Profile Name</span>
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Photo Url</span>
                </div>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo url"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <button className="btn btn-neutral mt-5 w-1/6">Update Now</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
