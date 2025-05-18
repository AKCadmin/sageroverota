"use client";

// External dependencies
import Spinner from "@/components/shared/Spinner";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import { useFetchDestinations } from "@/hooks/useDestination";
import { usePropertySearchByDestination } from "@/hooks/useProperty";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import Select from "react-select"; // Importing react-select for searchable dropdown
import { toast } from "react-toastify";

const DestinationSearchForms = () => {
    // Local state to store formatted destinations
    const [destinations, setDestinations] = useState([]);

    // Fetch destination data using custom hook
    const { data, isLoading, isError } = useFetchDestinations();
    // usePropertySearchByDestination hook mutation
    const { mutate } = usePropertySearchByDestination();

    // Formik for managing form state
    const formik = useFormik({
        initialValues: {
            destination_id: null,
            check_in_date: "",
            check_out_date: "",
        },
        onSubmit: (values) => {
            console.log("Form submitted with values:", values);
            // Pass the selected destination_id to the usePropertySearchByDestination hook
            const formData = {
                destination_id: values.destination_id.value,
                check_in_date: values.check_in_date,
                check_out_date: values.check_out_date
            };
            console.log("hook data:", formData);
            mutate(formData);
        },
    });

    // Update dropdown options once data is fetched
    useEffect(() => {
        if (data) {
            const dropdownData = data
                .filter(dest => dest.status === true) // Filter only active destinations
                .map(dest => ({
                    value: dest.id,
                    label: dest.destination_name
                }));
            setDestinations(dropdownData);
        }
    }, [data]);

    // Show error toast if fetching destination fails
    useEffect(() => {
        if (isError) {
            toast.error("Destinations cannot be fetched.");
        }
    }, [isError]);

    // Show loading spinner while data is loading
    if (isLoading) return <Spinner />;

    // Show fallback error if data failed to load (after toast)
    if (isError) return <div>Error loading destinations</div>;

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="trip-search-section shape-search-section" style={{ marginTop: "2.5%" }}>
                <div className="slider-shape"></div>
                <div className="container">
                    <div className="trip-search-inner white-bg d-flex">

                        {/* Destination Search Dropdown */}
                        <div className="input-group width-col-3">
                            <Select
                                options={destinations}
                                name="destination_id"
                                onChange={(selected) => formik.setFieldValue("destination_id", selected)}
                                value={formik.values.destination_id}
                                placeholder="Select Destination"
                                isClearable
                                className="react-select-container"
                                classNamePrefix="react-select"
                            />
                        </div>

                        {/* Check-in Date Input */}
                        <div className="input-group width-col-3">
                            <label> Checkin Date * </label>
                            <input
                                className="input-date-picker"
                                type="date"
                                name="check_in_date"
                                onChange={formik.handleChange}
                                value={formik.values.check_in_date}
                                placeholder="MM / DD / YY"
                                autoComplete="off"
                            />
                        </div>

                        {/* Check-out Date Input */}
                        <div className="input-group width-col-3">
                            <label> Checkout Date * </label>
                            <input
                                className="input-date-picker"
                                type="date"
                                name="check_out_date"
                                onChange={formik.handleChange}
                                value={formik.values.check_out_date}
                                placeholder="MM / DD / YY"
                                autoComplete="off"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="input-group width-col-3">
                            <label className="screen-reader-text"> Search </label>
                            <PrimaryButton title="INQUIRE NOW" type="submit" />
                        </div>

                    </div>
                </div>
            </div>
        </form>
    );
};

export default DestinationSearchForms;
