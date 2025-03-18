"use client";
import { useEffect, useState } from 'react';
import { NextPage } from 'next';

interface ErrorProps {
  statusCode: number;
}

const ErrorPage: NextPage<ErrorProps> = () => {
  const [statusCode, setStatusCode] = useState<number>(404);

  useEffect(() => {
    // Here you can set the error status code based on how it's passed down
    const code = window?.location?.href.includes('404') ? 404 : 500; // Just an example check
    setStatusCode(code);
  }, []);

  return (
    <div>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </div>
  );
};

export default ErrorPage;
