import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    const handleUseAttempt = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    const handleGainAttempts = () => {
        const attemptCount = parseInt(requestedAttempts);
        if (!isNaN(attemptCount)) {
            setAttemptsLeft(attemptsLeft + attemptCount);
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attemptsLeft}</p>
            <div>
                <label>
                    Request attempts:
                    <input
                        type="number"
                        value={requestedAttempts}
                        onChange={(e) => {
                            setRequestedAttempts(e.target.value);
                        }}
                    />
                </label>
            </div>
            <div>
                <button onClick={handleUseAttempt} disabled={attemptsLeft <= 0}>
                    use
                </button>
                <button onClick={handleGainAttempts}>gain</button>
            </div>
        </div>
    );
}
