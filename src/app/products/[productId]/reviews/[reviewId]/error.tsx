"use client";

export default function ErrorBoundary(
    {
        error,
        reset,
    } : {
        error: Error;
        reset: () => void;
    }
) {
  return (
    <div>
      <h1>Error Occured : {error.message}</h1>
      <button onClick={reset}>Try again</button>
    </div>
  );
}