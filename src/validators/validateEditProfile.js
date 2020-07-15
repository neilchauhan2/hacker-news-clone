const validateEditProfile = (values) => {
    let errors = {};

    // name error
    if (!values.name) errors.name = "Name required.";

    // email errors
    if (!values.email) errors.email = "Email required.";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email Invalid.";
    }

    // current password errors
    if (!values.currentPassword)
        errors.currentPassword = "Current Password is required.";
    else if (values.currentPassword.length < 6)
        errors.currentPassword =
            "Current Password must contain atleast 6 characters.";

    //New password errors
    if (values.newPassword && values.newPassword.length < 6)
        errors.newPassword = "New Password must contain atleast 6 characters.";

    return errors;
};

export default validateEditProfile;
