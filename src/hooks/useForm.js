import { useState, useEffect } from "react";
import alert from "../components/helpers/alert";

const useForm = (initState, validate, action) => {
    const [values, setValues] = useState(initState);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (isSubmitting) {
            const noErrors = Object.keys(errors).length === 0;
            if (noErrors) {
                action();
                setValues(initState);
                setIsSubmitting(false);
            } else {
                alert(Object.values(errors).join(" "), "danger");
                setIsSubmitting(false);
            }
        }
    }, [errors]);

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        const validationErrors = validate(values);
        setErrors(validationErrors);
        setIsSubmitting(true);
    };

    return {
        handleSubmit,
        handleChange,
        values,
        setValues,
        isSubmitting
    };
};

export default useForm;
