// eslint-disable-next-line no-undef
const { useEffect } = require("react");
// eslint-disable-next-line no-undef
const { useDispatch, useSelector } = require("react-redux");
// eslint-disable-next-line no-undef
const { getUserProfile } = require("@/store/auth-slice");


const Profile = () => {
    const dispatch = useDispatch();
    const { userProfile, isLoading } = useSelector((state) => state.auth);
    
    useEffect(() => {
        dispatch(getUserProfile());
    }, [dispatch]);
    
    if (isLoading) return <div>Loading...</div>;
    
    return (
        <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">User Profile</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Profile Information</h2>
            <p><strong>Name:</strong> {userProfile.name}</p>
            <p><strong>Email:</strong> {userProfile.email}</p>
            <p><strong>Phone:</strong> {userProfile.phone}</p>
        </div>
        </div>
    );
    }
export default Profile;

