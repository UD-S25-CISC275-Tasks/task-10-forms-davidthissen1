import React, { useState } from "react";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "pink",
        "teal",
        "brown",
        "cyan",
    ];

    const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

    return (
        <div>
            <h3>Change Color</h3>

            <div>
                {colors.map((color) => (
                    <div
                        key={color}
                        style={{ display: "inline-block", marginRight: "10px" }}
                    >
                        <input
                            type="radio"
                            id={color}
                            name="color"
                            value={color}
                            checked={selectedColor === color}
                            onChange={() => {
                                setSelectedColor(color);
                            }}
                        />
                        <label htmlFor={color}>{color}</label>
                    </div>
                ))}
            </div>

            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    padding: "20px",
                    margin: "20px 0",
                    borderRadius: "5px",
                    color: selectedColor === "yellow" ? "black" : "white",
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedOption, setSelectedOption] = useState<string>("");

    const isCorrect = selectedOption === expectedAnswer;

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select
                value={selectedOption}
                onChange={(e) => {
                    setSelectedOption(e.target.value);
                }}
            >
                <option value="">Select an answer</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <div>{isCorrect ? "✔️" : "❌"}</div>
        </div>
    );
}
