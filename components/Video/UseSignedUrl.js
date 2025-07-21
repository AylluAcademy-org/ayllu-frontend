import React, { useState, useEffect } from 'react';
import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: 'AKIAVT54ELYGNRPIZRES',
  secretAccessKey: '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',
  region: 'us-east-1'
});

const s3 = new AWS.S3();

export const useSignedUrl = (bucket, key) => {
  const [url, setUrl] = useState('');

  const updateUrl = () => {
    const params = { Bucket: bucket, Key: key, Expires: 60 };
    const signedUrl = s3.getSignedUrl('getObject', params);
    setUrl(signedUrl);
  };

  useEffect(() => {
    updateUrl();
  }, [bucket, key]);

  return url;
};
