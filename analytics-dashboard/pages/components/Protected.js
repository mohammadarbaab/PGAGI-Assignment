import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../../store/auth/authSlice";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Protected({ children }) {
  const user = useSelector(selectLoggedInUser);
  const router = useRouter();

  useEffect(() => {
    // If there's no logged-in user, redirect to the login page
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  // If the user is not logged in, render nothing initially (or a loading state)
  if (!user) {
    return null; // or a loading spinner
  }

  // Otherwise, render the children (protected content)
  return children;
}
