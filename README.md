# JS-Form-Validation
This is a simple HTML form project with client-side validation using JavaScript and styled with CSS. The form collects basic user information and validates fields such as full name, email, country, postal code, and password.
![Form Validation Screenshot](/form-validation.png)

## Features
- Responsive form layout
- Real-time client-side validation
- Country-specific postal code validation
- Password matching check
- Custom error messages
- Clean and accessible UI

## Technologies Used
- HTML5
- CSS3
- JavaScript (Vanilla)

## Project Structure
```bash
JS-FORM-VALIDATION/
├── index.html              # Main HTML file
├── style.css               # Stylesheet
├── javascript.js           # Main JavaScript application
├── form-validation.png     # Screenshot of the form in action
└── README.md               # This documentation
```
## How to Use
1. Clone the repository:
```bash
git clone https://github.com/aennin/js-form-validation.git
```
2. Navigate into the project folder
```bash
cd JS-Form-Validation
```
3. Open `index.html` in your browser to test the form.

## Validation Logic
- **Full Name**: Required
- **Email**: Must match standard email format
- **Country & Postal Code**: Postal code is validated based on selected country:
    - CH: 4 digits (e.g., 3000)
    - FR, DE, IT: 5 digits
    - NL: 4 digits + 2 uppercase letters (e.g., 1234 AB)
- **Password**: Minimum 6 characters
- **Repeat Password**: Must match original password

## Future Improvements
- **Server-side validation**: Add backend validation to complement client-side checks and ensure data security.
- **Form submission handling**: Connect the form to a backend (e.g., Node.js, Flask) or a database to process and store user data.
- **Accessibility enhancements**: Improve support for screen readers and keyboard navigation.
- **Responsive design**: Further optimize layout for smaller screens and mobile devices.
- **Loading states & feedback**: Display a loading spinner or success message after form submission.
- **Unit testing**: Add JavaScript unit tests for validation functions using Jest or another framework.
- **Input enhancements**:
  - Show password toggle visibility
  - Real-time strength indicator for password
  - Autocomplete for country field

## Author
- [Augustine Ennin](https://github.com/aennin)

## Acknowledgements
**The Odin Project**