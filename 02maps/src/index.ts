import { User } from "./user";
import { Company } from "./company";

// Declare google as a global variable
declare const google: any;

const company = new Company();

const user = new User();
console.log(user);
console.log(company);

// Ensure the google object is available
// Ensure the google object is available
// Add the following script tag to your HTML file to load the Google Maps JavaScript API
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>

// Example usage of the google object
if (typeof google !== 'undefined') {
  console.log('Google Maps API is loaded');
} else {
  console.log('Google Maps API is not loaded');
}