import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import NavBar from "./navbars/NavBar";
import Footer from "./Footer";
const UpdateUser = () => {
    const router = useRouter();
    const { id } = router.query;

    const [user, setUser] = useState({
        username: '',
        email: '',
    });

    useEffect(() => {
        if (id) {
            // Fetch user details when the component mounts
            axios.get(`/api/user/${id}`).then((response) => {
                setUser(response.data);
            });
        }
    }, [id]);

    const handleUpdate = () => {
        // Update user details
        axios.put(`/api/user/${id}`, user).then(() => {
            alert('User updated successfully');
        });
    };
    return (
        <>
            <NavBar />
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-amber-100 p-8 rounded shadow-md w-96">
                    <h2 className="text-2xl mb-4 text-center">Update User</h2>
                    <form method="post">
                        
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default UpdateUser;