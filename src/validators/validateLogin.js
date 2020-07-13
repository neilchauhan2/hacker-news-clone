const validateLogin = (values) => {
    let errors = {};

    // email errors
    if (!values.email) errors.email = "Email required.";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email Invalid.";
    }

    // password errors
    if (!values.password) errors.password = "Password required.";
    else if (values.password.length < 6)
        errors.password = "Password must contain atleast 6 characters.";

    return errors;
};

export default validateLogin;
