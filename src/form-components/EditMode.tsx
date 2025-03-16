import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <div className="form-switch">
                    <input
                        type="checkbox"
                        checked={isEditMode}
                        onChange={() => {
                            setIsEditMode(!isEditMode);
                        }}
                    />
                </div>
                <span>Edit Mode: {isEditMode ? "On" : "Off"}</span>
            </div>

            {isEditMode ?
                <div>
                    <div>
                        <label>
                            Name:
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Is Student:
                            <input
                                type="checkbox"
                                checked={isStudent}
                                onChange={(e) => {
                                    setIsStudent(e.target.checked);
                                }}
                            />
                        </label>
                    </div>
                </div>
            :   <div>
                    <p>
                        {name} is {isStudent ? "a student" : "not a student"}
                    </p>
                </div>
            }
        </div>
    );
}
