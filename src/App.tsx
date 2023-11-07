import AuthLayout from "./_auth/AuthLayout";
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
import RootLayout from "./_root/RootLayout";
import { AllUsers, CreatePost, Home, Profile, UpdateProfile } from "./_root/pages";
import "./globals.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import PostDetails from "./_root/pages/PostDetails";
import EditPost from "./_root/pages/EditPost";

const App = () => {
    return (
        <main className="flex h-screen">
            <Routes>
                {/* public routes */}
                <Route element={<AuthLayout />}>
                    <Route path="/sign-in" element={<SigninForm />} />
                    <Route path="/sign-up" element={<SignupForm />} />
                </Route>


                {/* private routes */}

                <Route element={<RootLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/create-post" element={<CreatePost />} />
                    <Route path="/profile/:id/*" element={<Profile />} />
                    <Route path="/update-profile/:id" element={<UpdateProfile />} />
                    <Route path="/posts/:id" element={<PostDetails />} />
                    <Route path="/update-post/:id" element={<EditPost />} />
                    <Route path="/all-users" element={<AllUsers />} />
                </Route>

            </Routes>

            <Toaster />
        </main>
    )
}

export default App
