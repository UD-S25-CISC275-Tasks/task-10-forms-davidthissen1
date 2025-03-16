import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    const isCorrect = userAnswer === expectedAnswer;

    return (
        <div>
            <h3>Check Answer</h3>
            <div>
                <input
                    type="text"
                    value={userAnswer}
                    onChange={(e) => {
                        setUserAnswer(e.target.value);
                    }}
                />
            </div>
            <div>{isCorrect ? "✔️" : "❌"}</div>
        </div>
    );
}
