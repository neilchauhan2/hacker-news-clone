const validatePasswordReset = (values) => {
    let errors = {};

    // email errors
    if (!values.email) errors.email = "Email required.";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email Invalid.";
    }

    return errors;
};

export default validatePasswordReset;
