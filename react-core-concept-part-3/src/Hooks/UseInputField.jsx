import { useState } from "react"

const useInputField = (defaultValue) => {

    const [value, setValue] = useState(defaultValue);

    const handleOnChange = (event) => {
        setValue(event.target.value);
    }

    return [value, handleOnChange];
}

export default useInputField;