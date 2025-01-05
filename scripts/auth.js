export async function protectRoute(requiredRole) {
 const token = localStorage.getItem("authToken");

 if (!token) {
  // Redirect to login if no token exists
  window.location.href = "/pages/auth/adminLogin.html";
  return;
 }

 try {
  const response = await fetch(CONFIG.API_BASE_URL + "/protected-route", {
   method: "GET",
   headers: {
    Authorization: `Bearer ${token}`,
   },
  });

  if (!response.ok) {
   // Redirect if the token is invalid or expired
   window.location.href = "/pages/auth/adminLogin.html";
   return;
  }

  const userData = await response.json();

  if (userData.role !== requiredRole) {
   // Redirect if the user role is not authorized for this page
   window.location.href = "/pages/error/unauthorized.html";
   return;
  }

  console.log(`Access granted for ${requiredRole}`);
 } catch (error) {
  console.error("Error:", error);
  // Redirect to login on error
  window.location.href = "/pages/auth/adminLogin.html";
 }
}


// admin

// <script type="module">
//   import { protectRoute } from "/scripts/auth.js";

//   // Protect this page for Admins only
//   protectRoute("Admin");
// </script>


// inspector 
// <script type="module">
//   import { protectRoute } from "/scripts/auth.js";

//   // Protect this page for Inspectors only
//   protectRoute("Inspector");
// </script>
