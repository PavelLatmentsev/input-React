export function validator(data,config) {
    const errors = {};
    function validated(validateMethod, data, config) {
        let statusValidate;
        switch (validateMethod) {
        case "isRequired":
            statusValidate = data.trim() === "";
            break;
        case "max":
            statusValidate = data.length !==config.value
            break;
        case "isRealYear":
            statusValidate = Number(data) >= config.value || Number(data)<= config.value-150 //А вдруг долгожитель =)
            break;
            case "isUrl":
                const urlCheck = /^https?:\/\/\S+\.\S+/g;
                statusValidate = !urlCheck.test(data)
                break;
        default:
            break;
        }
        if (statusValidate) return config.message;
    }
   
    for (const fieldName in data) {
        for (const validateMethod in config[fieldName]) {
            const error = validated(validateMethod, data[fieldName], config[fieldName][validateMethod]);
            if (error && !errors[fieldName]) {
                errors[fieldName] = error;
            }
        }
    }
    return errors;
};
