const validateCreateLink = (values) => {
    let errors = {};

    // Description errors
    if (!values.description) errors.email = "Description required.";
    else if (values.description.length < 10) {
        errors.description = "Description must contain at least 10 characters.";
    }

    // Link errors
    if (!values.url) errors.url = "Link required.";
    else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(values.url))
        errors.url = "Invalid URL. Please check the URL.";

    return errors;
};

export default validateCreateLink;
