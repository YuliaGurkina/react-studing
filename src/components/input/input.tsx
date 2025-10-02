import { ReactNode } from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
 type?: string;
 label?: string;
 name: string;
 id: string;
 value: string;
 required?: boolean;
 placeholder?: string;
 onChange?: (value: string) => void;
 error?: string;
 disabled?: boolean;
 className?: string;
 radius?: keyof typeof InputRadius;
 size?: keyof typeof InputSize;
 withAsterisk?: boolean;
 leftSection?: React.ReactNode
}

const InputRadius = {
 sm: '4px',
 md: '6px',
 lg: '8px',
};

const InputSize = {
 xs: '1rem',
 sm: '1.25rem',
 md: '1.5rem',
 lg: '1.75rem',
 xl: '2rem',
};


export const InputField: React.FC<InputFieldProps> = ({
    type = "text",
    label,
    name,
    id,
    value,
    required = false,
    placeholder = '',
    onChange = () => {},
    error,
    className = '',
    radius = "sm",
    size = "sm",
    disabled = false,
    withAsterisk = false,
    leftSection
}) => {
     //console.log(leftSection?.props.size);
     return (
        <div className="input-field-block">
            {label && <label htmlFor={name} className={`input-field-label ${withAsterisk ? 'input-field-label--asterisk' : ''}`}>{label}</label>}
           
            <div className={`input-field-wrapper ${error ? 'input-field-error' : ''}`}>
                {leftSection && <div className="input-field-left-section">{leftSection}</div> }
                <input
                    className={`input-field ${className}`}
                    type={type}
                    name={name}
                    id={id}
                    value={value}
                    required={required}
                    placeholder={placeholder}
                    disabled={disabled}
                    onChange={(e) => onChange(e.target.value)}
                    style={{
                        borderRadius: InputRadius[radius],
                        fontSize: InputSize[size],
                    }}
                />
                {error && <div className='input-field-error-message'>{error}</div>}
            </div>
        </div>
     );
};